"use client"

import { useState, useEffect } from "react"
import type { Progress } from "../types"

const STORAGE_KEY = "litigio-progress"

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored
      ? JSON.parse(stored)
      : {
          audiencias: {},
          blandas: {},
          casos: {},
        }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  }, [progress])

  const saveAnswer = (
    section: "audiencias" | "blandas" | "casos",
    questionId: number,
    selected: string,
    correct: boolean,
  ) => {
    setProgress((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [questionId]: { selected, correct, timestamp: Date.now() },
      },
    }))
  }

  const clearProgress = () => {
    setProgress({
      audiencias: {},
      blandas: {},
      casos: {},
    })
    localStorage.removeItem(STORAGE_KEY)
  }

  const getStats = (section: "audiencias" | "blandas" | "casos") => {
    const answers = Object.values(progress[section])
    const total = answers.length
    const correct = answers.filter((a) => a.correct).length
    const percentage = total > 0 ? Math.round((correct / total) * 100) : 0
    return { total, correct, percentage }
  }

  return { progress, saveAnswer, clearProgress, getStats }
}
