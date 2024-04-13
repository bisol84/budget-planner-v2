import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";
import dayjs from "dayjs";

export async function GET(req: NextRequest, res: NextResponse) {
  const transactionsTotal = (await getTransactionsTotal())._sum.amount;
  const budgetTotal = (await getBudgetTotal())._sum.amount;

  if (transactionsTotal && budgetTotal) {
    const total = budgetTotal - transactionsTotal;
    return NextResponse.json({
      total: total,
    });
  } else {
    return NextResponse.json({ total: 0 });
  }
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

async function getBudgetTotal() {
  return await prisma.budgets.aggregate({
    _sum: {
      amount: true,
    },
  });
}
