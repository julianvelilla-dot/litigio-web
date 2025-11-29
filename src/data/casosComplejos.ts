import type { Question } from "../types"

const COMPLEX_CASES: Question[] = [
  {
    id: 1,
    title: "Caso Penal — Lesiones",
    text: "Un individuo A agrede a B en una discusión pública. B presenta denuncia por lesiones. No hay testigos directos, pero hay un parte médico. ¿Cuál es la línea probatoria más sólida?",
    opts: {
      A: "Confiar solo en el parte médico",
      B: "Buscar testigos, peritaje médico y contexto (video/registro) que corroboren el hecho",
      C: "Negar la ocurrencia sin más",
    },
    answer: "B",
    explanation: "La combinación de parte médico, testimonios y evidencia material fortalece la línea probatoria.",
  },
  {
    id: 2,
    title: "Caso Civil — Contrato y Cumplimiento",
    text: "Empresa X demanda a proveedor Y por incumplimiento de contrato. El proveedor alega fuerza mayor. ¿Qué debe demostrarse para invalidar la fuerza mayor?",
    opts: {
      A: "Que exista voluntad de incumplir",
      B: "Que el evento alegado no impidió objetivamente el cumplimiento o que pudo preverse",
      C: "Que el contrato no existe",
    },
    answer: "B",
    explanation: "La fuerza mayor requiere imprevisibilidad o imposibilidad objetiva; si pudo preverse no aplica.",
  },
  {
    id: 3,
    title: "Caso Laboral — Despido",
    text: "Trabajador afirma despido sin justa causa. El empleador alega bajo rendimiento. ¿Qué prueba resulta determinante?",
    opts: {
      A: "Registros de desempeño, evaluaciones formales y advertencias previas",
      B: "Testimonios de amigos",
      C: "Un comunicado informal",
    },
    answer: "A",
    explanation: "Evidencias documentales sobre rendimiento y sanciones previas son determinantes.",
  },
  {
    id: 4,
    title: "Caso Procesal — Nulidad de Acto",
    text: "Se alega que una notificación procesal fue irregular porque se hizo fuera de plazo y sin firma. ¿Qué consecuencias podría tener?",
    opts: {
      A: "Nulidad parcial o total del acto si se demuestra afectación al debido proceso",
      B: "Sanción penal al notificador",
      C: "No tiene efecto",
    },
    answer: "A",
    explanation: "Los vicios en notificaciones pueden causar nulidad si afectan el derecho de defensa.",
  },
]

export default COMPLEX_CASES
