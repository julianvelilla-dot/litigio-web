type Options = Record<string, string>

interface Question {
  id: number
  q?: string
  title?: string
  text?: string
  opts: Options
  answer: string
  explanation?: string
}

interface UserAnswer {
  questionId: number
  section: string
  question: string
  selectedAnswer: string
  correctAnswer: string
  isCorrect: boolean
  explanation: string
  timestamp: number
}

interface Progress {
  audiencias: Record<number, { selected: string; correct: boolean; timestamp: number }>
  blandas: Record<number, { selected: string; correct: boolean; timestamp: number }>
  casos: Record<number, { selected: string; correct: boolean; timestamp: number }>
}

export type { Question, Options, UserAnswer, Progress }
