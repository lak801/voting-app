import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI as string; // Set this in your .env.local
const client = new MongoClient(uri);

export async function POST(request: Request) {
  const { name } = await request.json();
  try {
    await client.connect();
    const db = client.db('voting-app');
    const users = db.collection('users');
    await users.insertOne({ name });
    return NextResponse.json({ success: true });
  } catch (error : any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}