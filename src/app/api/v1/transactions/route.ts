import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  const result = await prisma.transactions.findMany({
    orderBy: [
      {
        date: "desc",
      },
      {
        description: "desc",
      },
    ],
    include: {
      Category: true,
      Account: true,
    },
  });

  return NextResponse.json(result);
}
