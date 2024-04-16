import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db/db";

export const dynamic = "force-dynamic";

export async function PATCH(req: NextRequest, res: NextResponse) {
  const formData = await req.formData();

  const result = await prisma.accounts.update({
    where: {
      ID: parseInt(formData.get("accountID") as string),
    },
    data: {
      name: formData.get("inputAccountName") as string,
      description: formData.get("inputAccountDescription") as string,
    },
  });

  return NextResponse.json(result);
}
