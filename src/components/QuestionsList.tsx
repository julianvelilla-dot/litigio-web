import type { Question } from "../types"
import MCQ from "./MCQ"
import { Award, TrendingUp } from "lucide-react"

interface QuestionsListProps {
  title: string
  items: Question[]
  results: Record<number, { selected: string; correct: boolean }>
  onAnswer: (res: { id: number; selected: string; correct: boolean }) => void
}

function QuestionsList({ title, items, results, onAnswer }: QuestionsListProps) {
  const total = items.length
  const answered = Object.keys(results).length
  const correctCount = Object.values(results).filter((r) => r.correct).length
  const percentage = answered > 0 ? Math.round((correctCount / answered) * 100) : 0

  return (
    <div className="space-y-6">
      {/* Header with stats */}
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
            <p className="text-sm text-slate-600 mt-1">{total} preguntas disponibles para evaluación</p>
          </div>

          <div className="flex gap-4">
            <div className="bg-slate-50 rounded-lg px-4 py-3 border border-slate-200">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-4 h-4 text-slate-600" />
                <span className="text-xs font-semibold text-slate-600 uppercase">Progreso</span>
              </div>
              <p className="text-2xl font-bold text-slate-900">
                {answered}/{total}
              </p>
            </div>

            {answered > 0 && (
              <div className="bg-amber-50 rounded-lg px-4 py-3 border border-amber-200">
                <div className="flex items-center gap-2 mb-1">
                  <Award className="w-4 h-4 text-amber-600" />
                  <span className="text-xs font-semibold text-amber-600 uppercase">Acierto</span>
                </div>
                <p className={`text-2xl font-bold ${percentage >= 70 ? "text-green-600" : "text-amber-600"}`}>
                  {percentage}%
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Progress bar */}
        {answered > 0 && (
          <div className="mt-4">
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
              <div
                className="bg-slate-900 h-full transition-all duration-500 ease-out"
                style={{ width: `${(answered / total) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Questions */}
      <div className="grid gap-4">
        {items.map((it) => (
          <MCQ key={it.id} item={it} onAnswer={onAnswer} savedAnswer={results[it.id]} />
        ))}
      </div>
    </div>
  )
}

export default QuestionsList
