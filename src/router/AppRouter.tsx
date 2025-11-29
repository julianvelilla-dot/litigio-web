"use client"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import type { JSX } from "react"
import { useState } from "react"
import Header from "../components/Header"
import Login from "../components/Login"
import Sidebar from "../components/Sidebar"
import QuestionsList from "../components/QuestionsList"
import CasesList from "../components/CasesList"
import MobileNav from "../components/MobileNav"
import AUDIENCIAS_QS from "../data/preguntasAudiencias"
import SOFTSKILL_QS from "../data/preguntasBlandas"
import COMPLEX_CASES from "../data/casosComplejos"
import { useProgress } from "../hooks/useProgress"
import { generatePDF } from "../utils/pdfGenerator"
import type { UserAnswer } from "../types"

export default function AppRouter(): JSX.Element {
  const stored = localStorage.getItem("litigio-user")
  const initialUser = stored ? JSON.parse(stored) : null
  const [user, setUser] = useState<{ name: string } | null>(initialUser)
  const [section, setSection] = useState<string>("audiencias")

  const { progress, saveAnswer, clearProgress, getStats } = useProgress()

  function login(u: { name: string }) {
    localStorage.setItem("litigio-user", JSON.stringify(u))
    setUser(u)
  }

  function logout() {
    localStorage.removeItem("litigio-user")
    setUser(null)
  }

  function handleAnswer(
    sectionKey: "audiencias" | "blandas" | "casos",
    result: { id: number; selected: string; correct: boolean },
  ) {
    saveAnswer(sectionKey, result.id, result.selected, result.correct)
  }

  function handleExportPDF() {
    if (!user) return

    const allAnswers: UserAnswer[] = []

    // Collect all answers from all sections
    const sections = [
      { key: "audiencias" as const, name: "Audiencias Procesales", questions: AUDIENCIAS_QS },
      { key: "blandas" as const, name: "Habilidades Profesionales", questions: SOFTSKILL_QS },
      { key: "casos" as const, name: "Casos Complejos", questions: COMPLEX_CASES },
    ]

    sections.forEach(({ key, name, questions }) => {
      const sectionProgress = progress[key]
      Object.entries(sectionProgress).forEach(([questionId, answer]) => {
        const question = questions.find((q) => q.id === Number.parseInt(questionId))
        if (question) {
          allAnswers.push({
            questionId: question.id,
            section: name,
            question: question.q || question.title || "",
            selectedAnswer: answer.selected,
            correctAnswer: question.answer,
            isCorrect: answer.correct,
            explanation: question.explanation || "",
            timestamp: answer.timestamp,
          })
        }
      })
    })

    // Sort by timestamp
    allAnswers.sort((a, b) => a.timestamp - b.timestamp)

    if (allAnswers.length === 0) {
      alert("No hay respuestas para exportar. Complete al menos una pregunta.")
      return
    }

    generatePDF(user.name, allAnswers)
  }

  function handleClearProgress() {
    if (confirm("¿Está seguro de que desea reiniciar todo el progreso? Esta acción no se puede deshacer.")) {
      clearProgress()
    }
  }

  const stats = {
    audiencias: getStats("audiencias"),
    blandas: getStats("blandas"),
    casos: getStats("casos"),
  }

  const hasAnswers = stats.audiencias.total > 0 || stats.blandas.total > 0 || stats.casos.total > 0

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={!user ? <Login onLogin={login} /> : <Navigate to="/" replace />} />

        <Route
          path="/"
          element={
            user ? (
              <div className="min-h-screen bg-slate-100 font-sans">
                <Header
                  user={user}
                  onLogout={logout}
                  onExportPDF={handleExportPDF}
                  onClearProgress={handleClearProgress}
                  hasAnswers={hasAnswers}
                />
                <div className="flex">
                  <Sidebar section={section} setSection={setSection} stats={stats} />
                  <main className="flex-1 p-6 pb-24 lg:pb-6">
                    <div className="max-w-5xl mx-auto">
                      {section === "audiencias" && (
                        <QuestionsList
                          title="Banco: Audiencias Procesales"
                          items={AUDIENCIAS_QS}
                          results={progress.audiencias}
                          onAnswer={(result) => handleAnswer("audiencias", result)}
                        />
                      )}
                      {section === "blandas" && (
                        <QuestionsList
                          title="Banco: Habilidades Profesionales"
                          items={SOFTSKILL_QS}
                          results={progress.blandas}
                          onAnswer={(result) => handleAnswer("blandas", result)}
                        />
                      )}
                      {section === "casos" && (
                        <CasesList
                          items={COMPLEX_CASES}
                          results={progress.casos}
                          onAnswer={(result) => handleAnswer("casos", result)}
                        />
                      )}
                    </div>
                  </main>
                </div>
                <MobileNav section={section} setSection={setSection} stats={stats} />
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
