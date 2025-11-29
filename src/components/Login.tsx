"use client"

import type React from "react"
import { useState } from "react"
import { Scale } from "lucide-react"

const SAMPLE_USER = { name: "Estudiante de Derecho" }

function Login({ onLogin }: { onLogin: (u: { name: string }) => void }) {
  const [name, setName] = useState("")

  function submit(e: React.FormEvent) {
    e.preventDefault()
    onLogin({ name: name.trim() || SAMPLE_USER.name })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 rounded-full mb-4">
            <Scale className="w-9 h-9 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-2">Simulador de Litigio</h1>
          <p className="text-slate-400 text-sm">Plataforma de práctica profesional para estudiantes de Derecho</p>
        </div>

        <form onSubmit={submit} className="bg-white rounded-lg shadow-xl p-8">
          <h2 className="text-xl font-bold text-slate-900 mb-2">Iniciar Sesión</h2>
          <p className="text-sm text-slate-600 mb-6">
            Ingrese su nombre completo para acceder a la plataforma de evaluación.
          </p>

          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
              Nombre Completo
            </label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ej: Juan Pérez García"
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-lg transition-colors shadow-lg"
          >
            Acceder a la Plataforma
          </button>

          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center leading-relaxed">
              Al acceder, podrá responder preguntas de práctica, recibir retroalimentación inmediata y exportar su
              evaluación en formato PDF.
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
