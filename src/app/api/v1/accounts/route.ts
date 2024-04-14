import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  const result = await prisma.accounts.findMany({
    orderBy: [
      {
        name: "asc",
      },
    ],
  });

  return NextResponse.json(result);
}
