import type { Question } from "../types"

const SOFTSKILL_QS: Question[] = [
  {
    id: 1,
    q: "Durante una audiencia, el juez interrumpe constantemente tu intervención como abogado. ¿Cuál sería la respuesta más adecuada?",
    opts: {
      A: "Levantar la voz para exigir tu derecho a hablar",
      B: "Esperar con calma y pedir la palabra de manera respetuosa",
      C: "Guardar silencio para evitar conflictos",
      D: "Abandonar la audiencia en señal de protesta",
    },
    answer: "B",
    explanation: "La comunicación asertiva exige respeto y control emocional: pedir la palabra con calma y protocolo.",
  },
  {
    id: 2,
    q: "Un cliente llega alterado y frustrado por el curso de su proceso. ¿Qué demuestra una adecuada gestión emocional?",
    opts: {
      A: "Decirle que se calme porque no puede hacer nada",
      B: "Escucharlo activamente y validar sus emociones antes de explicarle la situación jurídica",
      C: "Evitar hablar del tema para no generar tensión",
      D: "Reenviarlo a otro profesional",
    },
    answer: "B",
    explanation: "La empatía incluye escucha activa y validación antes de ofrecer soluciones técnicas.",
  },
  {
    id: 3,
    q: "En una firma jurídica, te asignan un caso junto con otro abogado que tiene un estilo de trabajo muy distinto al tuyo. ¿Qué actitud sería más profesional?",
    opts: {
      A: "Imponer tu método porque crees que es más eficiente",
      B: "Escuchar sus propuestas y buscar una estrategia común",
      C: "Dividir el caso para evitar conflictos",
      D: "Dejarle todo el trabajo a él y concentrarte en otros asuntos",
    },
    answer: "B",
    explanation: "Trabajo en equipo implica diálogo y construcción de una estrategia compartida.",
  },
  {
    id: 4,
    q: "Tienes varias audiencias y plazos simultáneos esta semana. ¿Qué acción refleja inteligencia emocional y organización?",
    opts: {
      A: "Esperar al último momento para preparar los casos",
      B: "Delegar tareas, priorizar actividades y cuidar tu descanso",
      C: "Trabajar sin pausas hasta resolverlo todo",
      D: "Ignorar el estrés y seguir adelante",
    },
    answer: "B",
    explanation: "La gestión del estrés pasa por priorizar y delegar con controles claros.",
  },
  {
    id: 5,
    q: "Durante una reunión con una parte contraria, notas que el abogado opositor parece molesto. ¿Qué demuestra una buena escucha activa?",
    opts: {
      A: "Interrumpirlo para aclarar tus puntos",
      B: "Permitirle expresarse y reformular lo que dijo para confirmar que comprendiste",
      C: "Mantenerte en silencio sin responder nada",
      D: "Tomar notas sin mirar al interlocutor",
    },
    answer: "B",
    explanation: "Reformular muestra atención y confirma comprensión, reduciendo tensiones.",
  },
  {
    id: 6,
    q: "Un cliente te propone alterar un documento para ganar un caso. ¿Qué deberías hacer?",
    opts: {
      A: "Rechazar la propuesta y explicarle las consecuencias legales",
      B: "Aceptar si no hay posibilidad de que lo descubran",
      C: "Ignorar el comentario y continuar con el proceso",
      D: "Pedirle que lo haga él mismo",
    },
    answer: "A",
    explanation: "La ética profesional exige rechazar conductas ilícitas y advertir las consecuencias.",
  },
  {
    id: 7,
    q: "En una audiencia virtual, la conexión falla repetidamente y el juez cambia el formato a presencial. ¿Qué actitud refleja adaptabilidad profesional?",
    opts: {
      A: "Molestarse y reclamar por el cambio",
      B: "Ajustarse al nuevo formato y reorganizar la logística con calma",
      C: "Cancelar la asistencia por las molestias",
      D: "Culpar al juzgado por la falta de tecnología",
    },
    answer: "B",
    explanation: "La adaptabilidad implica reorganizarse y mantener efectividad pese al cambio.",
  },
  {
    id: 8,
    q: "Eres coordinador de un equipo de pasantes en una oficina jurídica. Uno de ellos comete un error en un documento. ¿Cómo actúas?",
    opts: {
      A: "Lo reprendes frente al equipo para que aprenda",
      B: "Le explicas el error en privado y lo orientas sobre cómo corregirlo",
      C: "Le quitas la responsabilidad de inmediato",
      D: "Ignoras la situación para evitar conflictos",
    },
    answer: "B",
    explanation: "El liderazgo formativo corrige en privado y orienta en la mejora.",
  },
  {
    id: 9,
    q: "Dos compañeros de la firma discuten sobre quién debe asumir un caso. Te piden mediar. ¿Qué sería lo más adecuado?",
    opts: {
      A: "Tomar partido por el más experimentado",
      B: "Escuchar a ambos y buscar una solución que equilibre las cargas de trabajo",
      C: "Evadir la situación para no involucrarte",
      D: "Dejar que el jefe lo resuelva",
    },
    answer: "B",
    explanation: "La mediación objetiva y equilibrada preserva el clima y la productividad.",
  },
  {
    id: 10,
    q: "Un cliente confía en ti un caso importante, pero descubres que cometiste un error en la presentación de un documento. ¿Qué demuestra mayor integridad profesional?",
    opts: {
      A: "Ocultar el error y esperar que no se note",
      B: "Asumir la responsabilidad, informar al cliente y buscar la solución jurídica posible",
      C: "Culpar al asistente que revisó el archivo",
      D: "Esperar a que el juez lo advierta para actuar",
    },
    answer: "B",
    explanation: "Informar y corregir demuestra responsabilidad y preserva la confianza profesional.",
  },
]

export default SOFTSKILL_QS
