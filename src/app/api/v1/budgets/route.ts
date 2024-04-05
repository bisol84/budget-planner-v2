import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest, res: NextResponse) {
  if (req.method === 'GET') {
    // return "{ titre: 'titre' }";
    return NextResponse.json({ message: 'DT' });
  } 
}
