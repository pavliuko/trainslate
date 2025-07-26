'use client'

import { useState, useEffect, useRef } from 'react'
import { Copy } from 'lucide-react'

export default function MainPage() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const [isTranslating, setIsTranslating] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const countdownRef = useRef<NodeJS.Timeout>()
  const translationRef = useRef<AbortController>()

  const translate = async (text: string) => {
    if (!text.trim()) {
      setOutput('')
      return
    }

    setIsTranslating(true)
    
    if (translationRef.current) {
      translationRef.current.abort()
    }
    
    translationRef.current = new AbortController()

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
        signal: translationRef.current.signal,
      })

      if (!response.ok) {
        throw new Error('Translation failed')
      }

      const data = await response.json()
      setOutput(data.translation)
    } catch (error) {
      if (error instanceof Error && error.name !== 'AbortError') {
        setOutput('Translation error occurred')
      }
    } finally {
      setIsTranslating(false)
    }
  }

  const startCountdown = () => {
    if (countdownRef.current) {
      clearInterval(countdownRef.current)
    }
    
    setCountdown(3)
    countdownRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownRef.current!)
          translate(input)
          return 0
        }
        return prev - 1
      })
    }, 1000)
  }

  const handleInputChange = (value: string) => {
    setInput(value)
    
    if (countdownRef.current) {
      clearInterval(countdownRef.current)
      setCountdown(0)
    }
    
    if (value.trim()) {
      startCountdown()
    } else {
      setOutput('')
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      if (countdownRef.current) {
        clearInterval(countdownRef.current)
        setCountdown(0)
      }
      translate(input)
    }
    
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setInput('')
      setOutput('')
      setCountdown(0)
      if (countdownRef.current) {
        clearInterval(countdownRef.current)
      }
      inputRef.current?.focus()
    }
    
    if ((e.metaKey || e.ctrlKey) && e.key === 'c' && output) {
      e.preventDefault()
      copyToClipboard()
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output)
  }

  useEffect(() => {
    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current)
      }
      if (translationRef.current) {
        translationRef.current.abort()
      }
    }
  }, [])

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Trainslate
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Input Text
            </label>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your text here..."
              className="w-full h-64 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            {countdown > 0 && (
              <div className="text-sm text-gray-500">
                Translating in {countdown}...
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium text-gray-700">
                Translation
              </label>
              {output && (
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-1 px-2 py-1 text-sm text-gray-600 hover:text-gray-800"
                >
                  <Copy size={16} />
                  Copy
                </button>
              )}
            </div>
            <div className="w-full h-64 p-4 border border-gray-300 rounded-lg bg-gray-100 overflow-y-auto">
              {isTranslating ? (
                <div className="text-gray-500">Translating...</div>
              ) : (
                <div className="whitespace-pre-wrap">{output}</div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500 space-y-1">
          <div>Press <kbd className="px-2 py-1 bg-gray-200 rounded">Enter</kbd> to translate immediately</div>
          <div>Press <kbd className="px-2 py-1 bg-gray-200 rounded">Cmd+K</kbd> / <kbd className="px-2 py-1 bg-gray-200 rounded">Ctrl+K</kbd> to start new session</div>
          <div>Press <kbd className="px-2 py-1 bg-gray-200 rounded">Cmd+C</kbd> / <kbd className="px-2 py-1 bg-gray-200 rounded">Ctrl+C</kbd> to copy translation</div>
        </div>
      </div>
    </div>
  )
}