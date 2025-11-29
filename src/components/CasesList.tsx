import type { Question } from "../types"
import MCQ from "./MCQ"
import { Scale } from "lucide-react"

interface CasesListProps {
  items: Question[]
  results: Record<number, { selected: string; correct: boolean }>
  onAnswer: (res: { id: number; selected: string; correct: boolean }) => void
}

function CasesList({ items, results, onAnswer }: CasesListProps) {
  const total = items.length
  const answered = Object.keys(results).length
  const correctCount = Object.values(results).filter((r) => r.correct).length

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-6">
        <div className="flex items-center gap-3 mb-2">
          <Scale className="w-6 h-6 text-amber-600" />
          <h2 className="text-2xl font-bold text-slate-900">Casos Complejos</h2>
        </div>
        <p className="text-sm text-slate-600 mb-4">
          Analice situaciones jurídicas complejas y demuestre su capacidad de análisis legal
        </p>

        {answered > 0 && (
          <div className="flex gap-4 pt-4 border-t border-slate-200">
            <div className="text-sm">
              <span className="text-slate-600">Casos resueltos:</span>
              <span className="font-bold text-slate-900 ml-2">
                {answered}/{total}
              </span>
            </div>
            <div className="text-sm">
              <span className="text-slate-600">Correctos:</span>
              <span className="font-bold text-green-600 ml-2">{correctCount}</span>
            </div>
          </div>
        )}
      </div>

      <div className="grid gap-4">
        {items.map((it) => (
          <MCQ key={it.id} item={it} onAnswer={onAnswer} savedAnswer={results[it.id]} />
        ))}
      </div>
    </div>
  )
}

export default CasesList
