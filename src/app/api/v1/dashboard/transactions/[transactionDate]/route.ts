import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";
import dayjs from "dayjs";

interface Params {
  transactionDate: Date;
}

export async function GET(
  req: Request,
  { params }: { params: Params },
  res: Response
) {
  const startOfMonth = dayjs(params.transactionDate)
    .startOf("month")
    .add(1, "day")
    .toDate();
  const endOfMonth = dayjs(params.transactionDate).endOf("month").toDate();

  const aggregatedTransactions = await getAggregatedTransactions(
    startOfMonth,
    endOfMonth
  );

  return Response.json(aggregatedTransactions);
}

async function getAggregatedTransactions(startOfMonth: Date, endOfMonth: Date) {
  const [total, up, down] = await Promise.all([
    getTransactionsTotal(startOfMonth, endOfMonth),
    getTransactionsUp(startOfMonth, endOfMonth),
    getTransactionsDown(startOfMonth, endOfMonth),
  ]);

  return {
    total,
    up,
    down,
  };
}

async function getTransactionsTotal(startOfMonth: Date, endOfMonth: Date) {
  const result = await prisma.transactions.aggregate({
    where: {
      date: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
      NOT: {
        transaction_type: "transfert",
      },
    },
    _sum: {
      amount: true,
    },
  });
  console.log(result);
  const totalAmount = result._sum.amount ? result._sum.amount : 0;
  return totalAmount;
}

async function getTransactionsUp(startOfMonth: Date, endOfMonth: Date) {
  const result = await prisma.transactions.aggregate({
    where: {
      date: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
      NOT: {
        transaction_type: "transfert",
      },
      amount: {
        gte: 0,
      },
    },
    _sum: {
      amount: true,
    },
  });
  const totalAmountUp = result._sum.amount ? result._sum.amount : 0;
  return totalAmountUp;
}

async function getTransactionsDown(startOfMonth: Date, endOfMonth: Date) {
  const result = await prisma.transactions.aggregate({
    where: {
      date: {
        gte: startOfMonth,
        lte: endOfMonth,
      },
      NOT: {
        transaction_type: "transfert",
      },
      amount: {
        lte: 0,
      },
    },
    _sum: {
      amount: true,
    },
  });
  const totalAmountDown = result._sum.amount ? result._sum.amount : 0;
  return totalAmountDown;
}
