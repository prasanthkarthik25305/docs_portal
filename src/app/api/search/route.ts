import { NextResponse } from "next/server";
import { getAllDocs } from "@/lib/search";

export async function GET() {
  const docs = getAllDocs();
  return NextResponse.json(docs);
}
