'use client'

import { useState, useEffect } from 'react'

const codeLines = [
  { text: "// Ready for your new digital presence?", delay: 0 },
  { text: '', delay: 100 },
  { text: "import { Vision, Strategy } from 'mantaray'", delay: 80 },
  { text: '', delay: 100 },
  { text: 'async function launchYourDream() {', delay: 80 },
  { text: '  const idea = await Vision.capture()', delay: 60 },
  { text: '  const plan = Strategy.craft(idea)', delay: 60 },
  { text: '', delay: 100 },
  { text: '  return {', delay: 60 },
  { text: "    design: 'stunning',", delay: 60 },
  { text: "    performance: 'blazing',", delay: 60 },
  { text: "    timeline: '14 days',", delay: 60 },
  { text: "    result: 'production-ready'", delay: 60 },
  { text: '  }', delay: 60 },
  { text: '}', delay: 60 },
  { text: '', delay: 100 },
  { text: '// Your success story starts here →', delay: 60 },
]

function SyntaxHighlight({ text }: { text: string }) {
  let html = text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

  // Comments first (gray/dim)
  if (html.trim().startsWith('//')) {
    return <span className="code-comment" dangerouslySetInnerHTML={{ __html: html }} />
  }

  // Strings (green)
  html = html.replace(/(['"`].*?['"`])/g, '<span class="code-string">$1</span>')

  // Keywords (pink/purple)
  html = html.replace(/\b(import|from|function|const|let|var|return|export|default|async|await)\b/g, '<span class="code-keyword">$1</span>')

  // Built-in/module names (blue)
  html = html.replace(/\b(Vision|Strategy|capture|craft|idea|plan)\b/g, '<span class="code-builtin">$1</span>')

  // User-defined function names (yellow)
  html = html.replace(/\b(launchYourDream)\b/g, '<span class="code-function">$1</span>')

  // Object property names before colon (orange)
  html = html.replace(/(\s+)(\w+)(:\s)/g, '$1<span class="code-attr">$2</span>$3')

  // Braces and brackets (white/gray)
  html = html.replace(/([{}[\](),;])/g, '<span class="code-bracket">$1</span>')

  return <span dangerouslySetInnerHTML={{ __html: html }} />
}

export function CodeEditorMockup() {
  const [visibleLines, setVisibleLines] = useState<number[]>([])
  const [typingLine, setTypingLine] = useState<{ line: number; text: string } | null>(null)

  useEffect(() => {
    let totalDelay = 500
    const timeouts: NodeJS.Timeout[] = []

    codeLines.forEach((line, index) => {
      const lineTimeout = setTimeout(() => {
        setTypingLine({ line: index, text: '' })

        let currentText = ''
        const charDelay = 30 // ms per character

        for (let i = 0; i <= line.text.length; i++) {
          const charTimeout = setTimeout(() => {
            if (i < line.text.length) {
              currentText += line.text[i]
              setTypingLine({ line: index, text: currentText })
            } else {
              setVisibleLines(prev => [...prev, index])
              setTypingLine(null)
            }
          }, i * charDelay)
          timeouts.push(charTimeout)
        }
      }, totalDelay)
      timeouts.push(lineTimeout)
      totalDelay += line.delay + (line.text.length * 30) + 100
    })

    return () => timeouts.forEach(t => clearTimeout(t))
  }, [])

  return (
    <div className="code-editor">
      <div className="code-editor-header">
        <div className="code-editor-dots">
          <span className="dot dot-red"></span>
          <span className="dot dot-yellow"></span>
          <span className="dot dot-green"></span>
        </div>
        <span className="code-editor-filename">launch.ts</span>
      </div>
      <div className="code-editor-content">
        {codeLines.map((line, index) => (
          <div key={index} className="code-line">
            <span className="line-number">{index + 1}</span>
            <span className="code-content">
              {typingLine?.line === index ? (
                <SyntaxHighlight text={typingLine.text} />
              ) : visibleLines.includes(index) ? (
                <SyntaxHighlight text={line.text} />
              ) : (
                <span className="cursor">&nbsp;</span>
              )}
            </span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .code-editor {
          background: linear-gradient(145deg, #0f1419 0%, #1a1f2e 100%);
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5),
                      0 0 0 1px rgba(255, 255, 255, 0.08);
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .code-editor-header {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: rgba(0, 0, 0, 0.4);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          flex-shrink: 0;
        }

        .code-editor-dots {
          display: flex;
          gap: 8px;
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .dot-red {
          background: #ff5f57;
          box-shadow: 0 0 8px rgba(255, 95, 87, 0.5);
        }

        .dot-yellow {
          background: #ffbd2e;
          box-shadow: 0 0 8px rgba(255, 189, 46, 0.5);
        }

        .dot-green {
          background: #28ca42;
          box-shadow: 0 0 8px rgba(40, 202, 66, 0.5);
        }

        .code-editor-filename {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
        }

        .code-editor-content {
          padding: 20px 0;
          font-size: 15px;
          line-height: 1.8;
          color: #e4e4e7;
          flex: 1;
          overflow: hidden;
        }

        .code-line {
          display: flex;
          padding: 0 20px;
          min-height: 28px;
          align-items: center;
        }

        .line-number {
          width: 40px;
          color: rgba(255, 255, 255, 0.2);
          user-select: none;
          flex-shrink: 0;
          font-size: 13px;
        }

        .code-content {
          flex: 1;
          white-space: pre;
        }

        :global(.code-comment) {
          color: #5a7a7b;
          font-style: italic;
        }

        :global(.code-keyword) {
          color: #68ACAD;
          font-weight: 600;
        }

        :global(.code-string) {
          color: #E8B978;
        }

        :global(.code-builtin) {
          color: #9EC5C6;
        }

        :global(.code-function) {
          color: #F0C674;
        }

        :global(.code-tag) {
          color: #68ACAD;
        }

        :global(.code-attr) {
          color: #A3C4C5;
        }

        :global(.code-bracket) {
          color: #8a9a9b;
        }

        .cursor {
          display: inline-block;
          width: 8px;
          height: 16px;
          background: #68ACAD;
          animation: blink 1s infinite;
          vertical-align: middle;
          margin-left: 2px;
          box-shadow: 0 0 8px #68ACAD;
        }

        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  )
}
