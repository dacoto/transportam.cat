<script setup lang="ts">
const faqs = [
  [
    {
      question: "Quins serveis de transport puc consultar?",
      answer: "Transporta'm integra informació de TMB, FGC, Rodalies, Renfe, TRAM, AMB, Bicing i Ganxeta perquè puguis consultar diferents opcions de transport des d’un mateix lloc.",
    },
    {
      question: "Quina informació de TMB puc consultar?",
      answer: "Pots consultar la informació disponible de les línies, parades, properes sortides i estat del servei de la xarxa de TMB des de Transporta'm.",
    },
    {
      question: "Puc consultar els serveis d’FGC?",
      answer: "Sí. Transporta'm et permet accedir a la informació disponible de Ferrocarrils de la Generalitat de Catalunya, incloses les properes sortides i l’estat del servei.",
    },
  ],
  [
    {
      question: "Puc consultar Rodalies de Catalunya?",
      answer: "Sí. Pots consultar la informació disponible de Rodalies de Catalunya per planificar els teus trajectes i comprovar les properes sortides i possibles incidències.",
    },
    {
      question: "Quina informació de Renfe mostra Transporta'm?",
      answer: "Transporta'm agrupa la informació disponible dels serveis de Renfe integrats a l’aplicació perquè puguis consultar els teus trajectes des del mateix lloc que la resta d’operadors.",
    },
    {
      question: "Puc consultar el TRAM de Barcelona?",
      answer: "Sí. Pots consultar la informació disponible de les línies i parades del TRAM, així com les properes sortides i l’estat del servei quan la font ho proporciona.",
    },
  ],
  [
    {
      question: "Quins serveis d’AMB puc consultar?",
      answer: "Transporta'm incorpora la informació disponible dels serveis de transport gestionats o coordinats per l’Àrea Metropolitana de Barcelona que estan integrats a l’aplicació.",
    },
    {
      question: "Puc consultar la disponibilitat de Bicing?",
      answer: "Sí. Transporta'm et permet consultar la informació disponible de Bicing per trobar estacions i comprovar la disponibilitat del servei.",
    },
    {
      question: "Transporta'm inclou el servei Ganxeta?",
      answer: "Sí. Pots consultar la informació disponible de Ganxeta, el servei de bicicleta compartida de Reus, directament des de Transporta'm.",
    },
  ],
]
</script>

<template>
  <section id="faqs" aria-labelledby="faqs-title" class="border-t border-neutral-200 bg-white py-20 sm:py-32">
    <Container>
      <div class="mx-auto max-w-2xl lg:mx-0">
        <h2 id="faqs-title" class="text-3xl font-medium tracking-tight text-neutral-900">
          Preguntes freqüents
        </h2>
        <p class="mt-2 text-lg text-neutral-600">
          Si tens qualsevol altra pregunta,
          <NuxtLink to="/contact" class="text-neutral-900 underline">
            contacta amb nosaltres
          </NuxtLink>.
        </p>
      </div>
      <ul
        role="list"
        class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
      >
        <li v-for="(column, columnIndex) in faqs" :key="columnIndex">
          <ul role="list" class="space-y-10">
            <li v-for="faq in column" :key="faq.question">
              <h3 class="text-lg/6 font-semibold text-neutral-900">
                {{ faq.question }}
              </h3>
              <p class="mt-4 text-sm text-neutral-700">
                {{ faq.answer }}
              </p>
            </li>
          </ul>
        </li>
      </ul>
    </Container>
  </section>
</template>
