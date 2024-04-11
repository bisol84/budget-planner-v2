import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";
import dayjs from "dayjs";

export async function GET(req: NextRequest, res: NextResponse) {
  const aggregatedTransactions = await getAggregatedTransactions()
  console.log(aggregatedTransactions.total._sum.amount)
  return NextResponse.json(aggregatedTransactions);
}

async function getAggregatedTransactions(){
  const [total, up, down] = await Promise.all([
    getTransactionsTotal(),
    getTransactionsUp(),
    getTransactionsDown(),
  ])

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
      amount: {
        gte: 0
      }
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
      amount: {
        lte: 0
      }
    },
    _sum: {
      amount: true,
    },
  });
}
