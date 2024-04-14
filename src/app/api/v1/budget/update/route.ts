import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

interface IFormData {
  budgetID: number;
  inputBudget: number;
}

export const dynamic = "force-dynamic";

export async function PATCH(req: NextRequest, res: NextResponse) {
  const formData = await req.formData();

  const result = await prisma.budgets.update({
    where: {
      ID: parseInt(formData.get("budgetID") as string),
    },
    data: {
      amount: parseInt(formData.get("inputBudget") as string),
    },
  });

  return NextResponse.json(result);
}
