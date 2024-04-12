import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";
import dayjs from "dayjs";

export async function GET(req: NextRequest, res: NextResponse) {
  const aggregatedTransactions = await getAggregatedTransactions();
  return NextResponse.json(aggregatedTransactions);
}

async function getAggregatedTransactions() {
  const [total, up, down] = await Promise.all([
    getTransactionsTotal(),
    getTransactionsUp(),
    getTransactionsDown(),
  ]);

  return {
    total,
    up,
    down,
  };
}

async function getTransactionsTotal() {
  return await prisma.transactions.aggregate({
    where: {
      date: {
        gte: new Date(dayjs().startOf("month").day()),
        lte: new Date(),
      },
      transaction_type: {
        not: "transfert",
      },
    },
    _sum: {
      amount: true,
    },
  });
}

async function getTransactionsUp() {
  return await prisma.transactions.aggregate({
    where: {
      date: {
        gte: new Date(dayjs().startOf("month").day()),
        lte: new Date(),
      },
      transaction_type: {
        not: "transfert",
      },
      amount: {
        gte: 0,
      },
    },
    _sum: {
      amount: true,
    },
  });
}

async function getTransactionsDown() {
  return await prisma.transactions.aggregate({
    where: {
      date: {
        gte: new Date(dayjs().startOf("month").day()),
        lte: new Date(),
      },
      transaction_type: {
        not: "transfert",
      },
      amount: {
        lte: 0,
      },
    },
    _sum: {
      amount: true,
    },
  });
}
