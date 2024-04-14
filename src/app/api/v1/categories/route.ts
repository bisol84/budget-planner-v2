import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, res: NextResponse) {
  const result = await prisma.categories.findMany({
    orderBy: [
      {
        category: "asc",
      },
    ],
    where: {
      ID: {
        lt: 1000, // lt signifie "less than" (inférieur à)
      },
    },
  });

  return NextResponse.json(result);
}
