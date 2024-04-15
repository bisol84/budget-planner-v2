import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.formData();

  const result = await prisma.accounts.create({
    data: {
      name: formData.get("inputAccountName") as string,
      description: formData.get("inputAccountDescription") as string,
    },
  });

  return NextResponse.json(result);
}
