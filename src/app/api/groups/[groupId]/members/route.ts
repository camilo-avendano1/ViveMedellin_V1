import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ message: 'OK' });
}
export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({ message: 'OK', body });
}
// export async function PUT(request: Request) {

