import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export async function GET(req: NextRequest, res: NextResponse) {
  const result = await prisma.transactions.findMany({
    orderBy: [
      {
        date: 'desc',
      },
      {
        description: 'desc',
      },
    ],
  });

  return NextResponse.json(result);
}
