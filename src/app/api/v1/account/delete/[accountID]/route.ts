import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

interface Params {
  accountID: string;
}

export const dynamic = "force-dynamic";

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  const result = await prisma.accounts.delete({
    where: {
      ID: parseInt(params.accountID),
    },
  });

  return NextResponse.json(result);
}
