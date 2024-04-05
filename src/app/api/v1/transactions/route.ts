import { NextRequest, NextResponse } from 'next/server';

export function GET(req: NextRequest, res: NextResponse) {
  if (req.method === 'GET') {
    return NextResponse.json({ message: 'I am a transaction' });
  } 
}
