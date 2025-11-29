import jsPDF from "jspdf"
import type { UserAnswer } from "../types"

export function generatePDF(userName: string, answers: UserAnswer[]) {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  const margin = 20
  const maxWidth = pageWidth - 2 * margin
  let yPosition = margin

  // Header
  doc.setFillColor(17, 24, 39) // slate-900
  doc.rect(0, 0, pageWidth, 40, "F")

  doc.setTextColor(255, 255, 255)
  doc.setFontSize(20)
  doc.setFont("helvetica", "bold")
  doc.text("SIMULADOR DE LITIGIO", margin, 20)

  doc.setFontSize(10)
  doc.setFont("helvetica", "normal")
  doc.text("Reporte de Evaluación Profesional", margin, 30)

  yPosition = 55

  // Student info
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text(`Estudiante: ${userName}`, margin, yPosition)
  yPosition += 7

  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)
  doc.text(
    `Fecha: ${new Date().toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    })}`,
    margin,
    yPosition,
  )
  yPosition += 15

  // Statistics
  const totalQuestions = answers.length
  const correctAnswers = answers.filter((a) => a.isCorrect).length
  const percentage = Math.round((correctAnswers / totalQuestions) * 100)

  doc.setFillColor(248, 250, 252) // slate-50
  doc.rect(margin, yPosition - 5, maxWidth, 25, "F")

  doc.setFontSize(10)
  doc.setFont("helvetica", "bold")
  doc.text("RESUMEN GENERAL", margin + 5, yPosition + 3)

  doc.setFont("helvetica", "normal")
  doc.setFontSize(9)
  doc.text(`Total de preguntas: ${totalQuestions}`, margin + 5, yPosition + 10)
  doc.text(`Respuestas correctas: ${correctAnswers}`, margin + 5, yPosition + 16)

  doc.setFont("helvetica", "bold")
  doc.text(`Porcentaje de acierto: ${percentage}%`, maxWidth - 30, yPosition + 13)

  yPosition += 35

  // Questions and answers
  doc.setFontSize(11)
  doc.setFont("helvetica", "bold")
  doc.text("DETALLE DE RESPUESTAS", margin, yPosition)
  yPosition += 10

  answers.forEach((answer, index) => {
    // Check if we need a new page
    if (yPosition > pageHeight - 60) {
      doc.addPage()
      yPosition = margin
    }

    // Question number and section
    doc.setFontSize(9)
    doc.setFont("helvetica", "bold")
    doc.setTextColor(71, 85, 105) // slate-600
    doc.text(`${index + 1}. ${answer.section.toUpperCase()}`, margin, yPosition)
    yPosition += 6

    // Question text
    doc.setFont("helvetica", "bold")
    doc.setTextColor(0, 0, 0)
    const questionLines = doc.splitTextToSize(answer.question, maxWidth)
    doc.text(questionLines, margin, yPosition)
    yPosition += questionLines.length * 5

    // User answer
    doc.setFont("helvetica", "normal")
    doc.setFontSize(8)
    if (answer.isCorrect) {
      doc.setTextColor(22, 163, 74) // green-600
      doc.text(`✓ Tu respuesta: ${answer.selectedAnswer} (CORRECTA)`, margin + 2, yPosition)
    } else {
      doc.setTextColor(220, 38, 38) // red-600
      doc.text(`✗ Tu respuesta: ${answer.selectedAnswer} (INCORRECTA)`, margin + 2, yPosition)
      yPosition += 5
      doc.setTextColor(71, 85, 105)
      doc.text(`  Respuesta correcta: ${answer.correctAnswer}`, margin + 2, yPosition)
    }
    yPosition += 6

    // Explanation
    doc.setTextColor(71, 85, 105)
    doc.setFont("helvetica", "italic")
    const explanationLines = doc.splitTextToSize(`Explicación: ${answer.explanation}`, maxWidth - 4)
    doc.text(explanationLines, margin + 2, yPosition)
    yPosition += explanationLines.length * 4 + 8

    // Separator line
    doc.setDrawColor(226, 232, 240) // slate-200
    doc.line(margin, yPosition, pageWidth - margin, yPosition)
    yPosition += 8
  })

  // Footer on last page
  doc.setFontSize(8)
  doc.setFont("helvetica", "italic")
  doc.setTextColor(148, 163, 184)
  doc.text(
    "Simulador de Litigio - Herramienta de práctica profesional para estudiantes de Derecho",
    pageWidth / 2,
    pageHeight - 10,
    { align: "center" },
  )

  // Save the PDF
  doc.save(`evaluacion-litigio-${userName.replace(/\s+/g, "-")}-${Date.now()}.pdf`)
}
