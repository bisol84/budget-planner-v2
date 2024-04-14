import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

interface Params {
  transactionID: string;
}

export const dynamic = "force-dynamic";

export async function DELETE(req: NextRequest, { params }: { params: Params }) {
  const result = await prisma.transactions.delete({
    where: {
      ID: parseInt(params.transactionID),
    },
  });

  return NextResponse.json(result);
}
