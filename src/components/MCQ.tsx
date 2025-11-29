"use client"

import type { Question } from "../types"
import { useState, useEffect } from "react"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"

interface MCQProps {
  item: Question
  onAnswer: (res: { id: number; selected: string; correct: boolean }) => void
  savedAnswer?: { selected: string; correct: boolean }
}

function MCQ({ item, onAnswer, savedAnswer }: MCQProps) {
  const [selected, setSelected] = useState<string | null>(savedAnswer?.selected || null)
  const [answered, setAnswered] = useState(!!savedAnswer)

  useEffect(() => {
    if (savedAnswer) {
      setSelected(savedAnswer.selected)
      setAnswered(true)
    }
  }, [savedAnswer])

  function submit(ans: string) {
    if (answered) return
    setSelected(ans)
    setAnswered(true)
    onAnswer({ id: item.id, selected: ans, correct: ans === item.answer })
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="flex items-start gap-3 mb-4">
          <div className="shrink-0 w-8 h-8 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {item.id}
          </div>
          <div className="flex-1">
            <h3 className="text-slate-900 font-semibold leading-relaxed">{item.q ?? item.title}</h3>
            {item.text && (
              <p className="text-sm text-slate-600 mt-2 leading-relaxed bg-slate-50 p-3 rounded border-l-4 border-slate-300">
                {item.text}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {Object.entries(item.opts).map(([k, v]) => {
            const isSelected = selected === k
            const isCorrect = k === item.answer
            const showCorrect = answered && isCorrect
            const showIncorrect = answered && isSelected && !isCorrect

            return (
              <button
                key={k}
                onClick={() => submit(k)}
                disabled={answered}
                className={`p-4 text-left rounded-lg border-2 transition-all ${
                  showCorrect
                    ? "border-green-600 bg-green-50"
                    : showIncorrect
                      ? "border-red-500 bg-red-50"
                      : answered
                        ? "border-slate-200 bg-slate-50 opacity-60"
                        : "border-slate-200 hover:border-slate-400 hover:bg-slate-50 cursor-pointer"
                } ${!answered && "active:scale-[0.98]"}`}
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                      showCorrect
                        ? "border-green-600 bg-green-600 text-white"
                        : showIncorrect
                          ? "border-red-500 bg-red-500 text-white"
                          : "border-slate-400 text-slate-600"
                    }`}
                  >
                    {k}
                  </div>
                  <span className={`text-sm leading-relaxed ${answered ? "text-slate-700" : "text-slate-800"}`}>
                    {v}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {answered && (
          <div
            className={`mt-4 p-4 rounded-lg border-l-4 ${
              selected === item.answer ? "bg-green-50 border-green-600" : "bg-red-50 border-red-500"
            }`}
          >
            <div className="flex items-start gap-3">
              {selected === item.answer ? (
                <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              ) : (
                <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
              )}
              <div className="flex-1">
                <p
                  className={`font-semibold text-sm mb-1 ${
                    selected === item.answer ? "text-green-900" : "text-red-900"
                  }`}
                >
                  {selected === item.answer ? "Respuesta Correcta" : "Respuesta Incorrecta"}
                </p>
                {selected !== item.answer && (
                  <p className="text-sm text-red-800 mb-2">
                    La respuesta correcta es: <span className="font-semibold">{item.answer}</span>
                  </p>
                )}
                <div className="flex items-start gap-2 mt-2">
                  <AlertCircle className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700 leading-relaxed">{item.explanation}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MCQ
