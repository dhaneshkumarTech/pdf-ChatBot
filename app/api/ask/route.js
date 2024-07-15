import { NextResponse } from 'next/server';
import { loadDocumentAndUseEmbeddings } from '../../../lib/langchain';

export async function POST(request) {
  const { question, chat_history } = await request.json();
  try {
    const response = await loadDocumentAndUseEmbeddings(question, chat_history);
    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
