import prisma from "@/db/db";
import { Prisma } from "@prisma/client";
import dayjs from 'dayjs'

interface Params {
  budgetDate: Date;
}

export async function GET(req: Request, { params }: { params: Params }, res: Response) {
  // const currentDate = firstDayOfMonth(params.budgetDate);
  const currentDate = dayjs(params.budgetDate).unix();

  const result = await prisma.$queryRaw(
    Prisma.sql`
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
      `
  );
  return Response.json(result);
}