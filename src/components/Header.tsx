"use client"

import { Scale, Download, RotateCcw } from "lucide-react"

interface HeaderProps {
  user: { name: string }
  onLogout: () => void
  onExportPDF: () => void
  onClearProgress: () => void
  hasAnswers: boolean
}

function Header({ user, onLogout, onExportPDF, onClearProgress, hasAnswers }: HeaderProps) {
  return (
    <header className="w-full bg-slate-900 border-b border-slate-700 shadow-lg">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              <Scale className="w-7 h-7 text-amber-500" strokeWidth={2.5} />
              <div>
                <h1 className="text-xl font-bold text-white tracking-tight">SIMULADOR DE LITIGIO</h1>
                <p className="text-xs text-slate-400 font-medium">Práctica Profesional • Evaluación Continua</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {hasAnswers && (
              <>
                <button
                  onClick={onExportPDF}
                  className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-sm font-medium rounded transition-colors"
                  title="Exportar evaluación a PDF"
                >
                  <Download className="w-4 h-4" />
                  <span className="hidden sm:inline">Exportar PDF</span>
                </button>
                <button
                  onClick={onClearProgress}
                  className="flex items-center gap-2 px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 text-sm font-medium rounded transition-colors"
                  title="Reiniciar progreso"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span className="hidden sm:inline">Reiniciar</span>
                </button>
              </>
            )}
            <div className="flex items-center gap-3 pl-4 border-l border-slate-700">
              <div className="text-right hidden sm:block">
                <div className="text-sm font-medium text-white">{user.name}</div>
                <div className="text-xs text-slate-400">Estudiante de Derecho</div>
              </div>
              <button
                onClick={onLogout}
                className="text-sm text-slate-400 hover:text-white font-medium transition-colors"
              >
                Salir
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
