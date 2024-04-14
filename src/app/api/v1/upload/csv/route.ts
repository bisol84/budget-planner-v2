import { parse } from "papaparse";
import prisma from "@/db/db";

export const dynamic = "force-dynamic";

export async function POST(req: Request, res: Response) {
  const formData = await req.formData();
  const file = formData.get("file") as File | null;
  if (file) {
    const CSVString = await file.text();
    const { data } = parse(CSVString, { header: true, skipEmptyLines: true });
    await insertDb(data);
  }

  async function insertDb(data: any[]) {
    await Promise.all(
      data.map(async (item) => {
        await prisma.transactions.create({
          data: {
            date: new Date(item.Date).toISOString(),
            amount: parseFloat(item.Amount),
            description: item.Description,
            import_category: item.Category,
            id_category: 1,
          },
        });
      })
    );
  }

  return Response.json({ message: "Table update" });
}
