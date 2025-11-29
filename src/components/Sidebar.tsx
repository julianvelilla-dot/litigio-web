"use client"

import { BookOpen, Users, Briefcase } from "lucide-react"

interface SidebarProps {
  section: string
  setSection: (s: string) => void
  stats: {
    audiencias: { total: number; correct: number; percentage: number }
    blandas: { total: number; correct: number; percentage: number }
    casos: { total: number; correct: number; percentage: number }
  }
}

function Sidebar({ section, setSection, stats }: SidebarProps) {
  const sections = [
    { id: "audiencias", icon: BookOpen, label: "Audiencias Procesales", stat: stats.audiencias },
    { id: "blandas", icon: Users, label: "Habilidades Profesionales", stat: stats.blandas },
    { id: "casos", icon: Briefcase, label: "Casos Complejos", stat: stats.casos },
  ]

  return (
    <aside className="w-72 min-w-[18rem] bg-slate-50 border-r border-slate-200 hidden lg:flex flex-col">
      <div className="p-6 border-b border-slate-200 bg-white">
        <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider">Módulos de Práctica</h2>
        <p className="text-xs text-slate-500 mt-1">Selecciona un área para comenzar</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {sections.map(({ id, icon: Icon, label, stat }) => {
          const isActive = section === id
          return (
            <button
              key={id}
              onClick={() => setSection(id)}
              className={`w-full text-left p-4 rounded-lg transition-all ${
                isActive
                  ? "bg-slate-900 text-white shadow-lg"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className={`w-5 h-5 ${isActive ? "text-amber-400" : "text-slate-600"}`} strokeWidth={2} />
                <span className="font-semibold text-sm">{label}</span>
              </div>
              {stat.total > 0 && (
                <div className={`text-xs mt-2 pt-2 border-t ${isActive ? "border-slate-700" : "border-slate-200"}`}>
                  <div className="flex justify-between items-center">
                    <span className={isActive ? "text-slate-300" : "text-slate-500"}>
                      {stat.correct} / {stat.total} correctas
                    </span>
                    <span
                      className={`font-bold ${
                        stat.percentage >= 70
                          ? isActive
                            ? "text-green-400"
                            : "text-green-600"
                          : isActive
                            ? "text-amber-400"
                            : "text-amber-600"
                      }`}
                    >
                      {stat.percentage}%
                    </span>
                  </div>
                </div>
              )}
            </button>
          )
        })}
      </nav>

      <div className="p-4 border-t border-slate-200 bg-white">
        <div className="text-xs text-slate-500 leading-relaxed">
          <p className="font-semibold text-slate-700 mb-1">Instrucciones:</p>
          <p>Complete cada sección respondiendo las preguntas. Su progreso se guarda automáticamente.</p>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
