"use client"

import { BookOpen, Users, Briefcase } from "lucide-react"

interface MobileNavProps {
  section: string
  setSection: (s: string) => void
  stats: {
    audiencias: { total: number; correct: number; percentage: number }
    blandas: { total: number; correct: number; percentage: number }
    casos: { total: number; correct: number; percentage: number }
  }
}

function MobileNav({ section, setSection, stats }: MobileNavProps) {
  const sections = [
    { id: "audiencias", icon: BookOpen, label: "Audiencias", stat: stats.audiencias },
    { id: "blandas", icon: Users, label: "Habilidades", stat: stats.blandas },
    { id: "casos", icon: Briefcase, label: "Casos", stat: stats.casos },
  ]

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg z-50">
      <div className="grid grid-cols-3 gap-1 p-2">
        {sections.map(({ id, icon: Icon, label, stat }) => {
          const isActive = section === id
          return (
            <button
              key={id}
              onClick={() => setSection(id)}
              className={`flex flex-col items-center justify-center p-3 rounded-lg transition-all ${
                isActive ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-50"
              }`}
            >
              <Icon className={`w-5 h-5 mb-1 ${isActive ? "text-amber-400" : ""}`} strokeWidth={2} />
              <span className="text-xs font-medium">{label}</span>
              {stat.total > 0 && (
                <span className={`text-[10px] mt-1 ${isActive ? "text-slate-300" : "text-slate-500"}`}>
                  {stat.percentage}%
                </span>
              )}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default MobileNav
