import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

interface IFormData {
  transactionID: number;
  selectCategory: number;
}

export async function PATCH(req: NextRequest, res: NextResponse) {

  const formData = await req.formData();
  console.log(formData)

  const result = await prisma.transactions.update({
    where: {
      ID: parseInt(formData.get('transactionID') as string),
    },
    data: {
      id_category: parseInt(formData.get('selectCategory') as string),
    },
  })

  return NextResponse.json(result);
}
