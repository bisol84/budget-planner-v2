import prisma from "@/db/db";
import dayjs from "dayjs";

export const dynamic = "force-dynamic";

export async function GET(req: Request, res: Response) {
  const currentDate = dayjs().unix();

  const result = await prisma.$queryRaw`
        SELECT 
          c.ID,
          c.category,
          c.parent_category_id,
          b.amount,
          b.start_date,
          b.end_date,
          SUM(CASE WHEN c.category = 'A classer' AND t.amount > 0 THEN -t.amount ELSE t.amount END) AS "transactions_amount"
        FROM Categories c
        LEFT OUTER JOIN Budgets b on b.id_category = c.ID and b.start_date <= ${currentDate} and b.end_date > ${currentDate}
        LEFT OUTER JOIN Transactions t on t.id_category = c.ID
        WHERE c.ID < 1000
        GROUP BY
          c.category
      `;
  return Response.json(result);
}
