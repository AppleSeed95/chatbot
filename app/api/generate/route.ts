import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  const { question } = await request.json();

  if (!question) {
    return NextResponse.json({ message: "input query" }, { status: 400 });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: question }],
    });

    const answer = completion.choices[0].message?.content;
    return NextResponse.json({ answer });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Failed to get response from OpenAI API",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
