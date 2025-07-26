import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const TRANSLATION_PROMPT = process.env.TRANSLATION_PROMPT || `You are a professional translator. Translate the following text to English. If the text is already in English, translate it to Spanish. Provide only the translation without any additional commentary or explanation.`

export async function POST(request: NextRequest) {
  try {
    const { text } = await request.json()

    if (!text?.trim()) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 })
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 })
    }

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: TRANSLATION_PROMPT
        },
        {
          role: 'user',
          content: text
        }
      ],
      max_tokens: 1000,
      temperature: 0.3,
    })

    const translation = completion.choices[0]?.message?.content?.trim()

    if (!translation) {
      return NextResponse.json({ error: 'Translation failed' }, { status: 500 })
    }

    return NextResponse.json({ translation })
  } catch (error) {
    console.error('Translation error:', error)
    return NextResponse.json({ error: 'Translation failed' }, { status: 500 })
  }
}