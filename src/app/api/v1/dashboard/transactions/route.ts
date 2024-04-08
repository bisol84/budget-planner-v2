import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export async function GET(req: NextRequest, res: NextResponse) {
  const result = await prisma.transactions.aggregate({
    where: {
      date: {
        gte: new Date(new Date() - 120 * 24 * 60 * 60 * 1000), // 30 days ago
        lte: new Date(), // current date
      },
    },
    _sum: {
      amount: true,
    },
  });

  return NextResponse.json(result._sum);
}
