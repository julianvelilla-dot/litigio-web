import type { Question } from "../types"

const AUDIENCIAS_QS: Question[] = [
  {
    id: 1,
    q: "¿Cuál es el principal objetivo de la audiencia inicial en un proceso civil?",
    opts: {
      A: "Resolver el fondo del litigio",
      B: "Fijar los hechos controvertidos y promover la conciliación",
      C: "Escuchar los alegatos finales",
      D: "Practicar las pruebas documentales",
    },
    answer: "B",
    explanation: "La audiencia inicial busca fijar hechos controvertidos y explorar la conciliación entre las partes.",
  },
  {
    id: 2,
    q: "¿Quién dirige la audiencia en un proceso civil?",
    opts: {
      A: "El secretario judicial",
      B: "El juez o magistrado competente",
      C: "El demandante",
      D: "El conciliador designado",
    },
    answer: "B",
    explanation: "La conducción de la audiencia corresponde al juez o magistrado competente.",
  },
  {
    id: 3,
    q: "En una audiencia civil, ¿qué sucede si una de las partes no asiste sin justificación válida?",
    opts: {
      A: "Se suspende automáticamente la audiencia",
      B: "Se decreta la nulidad del proceso",
      C: "Se puede continuar la audiencia en su ausencia",
      D: "Se archiva el proceso",
    },
    answer: "C",
    explanation: "El proceso puede continuar en ausencia de la parte ausente salvo que la ley exija lo contrario.",
  },
  {
    id: 4,
    q: "¿Cuál de las siguientes actuaciones se realiza generalmente antes de la audiencia de instrucción y juzgamiento?",
    opts: {
      A: "Presentación de alegatos de conclusión",
      B: "Práctica de pruebas",
      C: "Intento de conciliación",
      D: "Fallo del proceso",
    },
    answer: "C",
    explanation: "El intento de conciliación suele realizarse en etapas previas a la práctica principal de pruebas.",
  },
  {
    id: 5,
    q: "Durante la audiencia de instrucción y juzgamiento, el juez debe:",
    opts: {
      A: "Decidir sobre la admisión de la demanda",
      B: "Practicar las pruebas decretadas y escuchar alegatos finales",
      C: "Conciliar de nuevo a las partes obligatoriamente",
      D: "Citar a nuevas partes al proceso",
    },
    answer: "B",
    explanation: "En esa audiencia se practican las pruebas decretadas y se escuchan los alegatos finales.",
  },
  {
    id: 6,
    q: "¿Cuál de los siguientes documentos es indispensable para el desarrollo de la audiencia civil?",
    opts: {
      A: "El acta de la audiencia",
      B: "La copia de la cédula de ciudadanía del juez",
      C: "El fallo previo del tribunal",
      D: "El registro mercantil de las partes",
    },
    answer: "A",
    explanation: "El acta documenta lo actuado y es esencial para el expediente procesal.",
  },
  {
    id: 7,
    q: "Si en la audiencia se presentan nuevos hechos o pruebas no allegadas oportunamente, el juez debe:",
    opts: {
      A: "Rechazarlas por extemporáneas, salvo justificación válida",
      B: "Admitirlas siempre para no afectar el derecho de defensa",
      C: "Dejar la decisión al secretario",
      D: "Suspender indefinidamente la audiencia",
    },
    answer: "A",
    explanation: "Las pruebas extemporáneas suelen rechazarse salvo que exista justificación que permita su admisión.",
  },
  {
    id: 8,
    q: "¿Qué principio procesal se aplica durante la audiencia civil para garantizar la participación de las partes?",
    opts: {
      A: "Principio de publicidad",
      B: "Principio de favorabilidad",
      C: "Principio de inmediatez",
      D: "Principio de economía procesal",
    },
    answer: "C",
    explanation:
      "El principio de inmediatez garantiza la participación directa y la inmediación del juez con la prueba.",
  },
  {
    id: 9,
    q: "¿En qué momento se profiere la sentencia en la audiencia civil, según la complejidad del caso?",
    opts: {
      A: "Siempre al inicio de la audiencia",
      B: "Al finalizar la audiencia o dentro del término legal posterior",
      C: "En la audiencia inicial",
      D: "Solo después de la apelación",
    },
    answer: "B",
    explanation:
      "La sentencia puede dictarse al finalizar o dentro del término previsto por la ley según la complejidad.",
  },
  {
    id: 10,
    q: "¿Qué función cumple el secretario durante la audiencia civil?",
    opts: {
      A: "Representar a una de las partes",
      B: "Dictar la sentencia",
      C: "Levantar el acta y certificar lo actuado",
      D: "Decidir sobre la admisión de pruebas",
    },
    answer: "C",
    explanation: "El secretario levanta acta y certifica lo ocurrido; no decide sobre el fondo del asunto.",
  },
]

export default AUDIENCIAS_QS
