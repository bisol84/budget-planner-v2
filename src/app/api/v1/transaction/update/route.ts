import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export const dynamic = "force-dynamic";

export async function PATCH(req: NextRequest, res: NextResponse) {
  const formData = await req.formData();

  const result = await prisma.transactions.update({
    where: {
      ID: parseInt(formData.get("transactionID") as string),
    },
    data: {
      id_category: parseInt(formData.get("selectCategory") as string),
      id_account: parseInt(formData.get("selectAccount") as string),
      transaction_type: formData.get("transactionType") as string,
    },
  });

  return NextResponse.json(result);
}
