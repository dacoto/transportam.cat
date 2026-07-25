<script setup lang="ts">
import PrivacyPolicySection from "~/components/PrivacyPolicySection.vue";
import ObfuscatedEmail from "~/components/ObfuscatedEmail.vue";
</script>

<template>
  <Container class="py-20 sm:py-32">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h1 class="text-3xl font-medium tracking-tight text-neutral-900">Avís legal</h1>
      <p class="mt-2 text-sm text-neutral-600">Última actualització: 2026-07-25</p>
    </div>

    <ul role="list" class="mt-16 space-y-10">
      <PrivacyPolicySection title="Titular">
        <p>
          En compliment de la Llei 34/2002, d'11 de juliol, de serveis de la societat de la informació i de comerç
          electrònic (LSSI-CE), s'informa de les dades identificatives del titular de l'aplicació
          <strong>Transporta'm</strong> i del lloc web <strong>transportam.cat</strong>:
        </p>
        <ul class="mt-4 space-y-1">
          <li>Titular: <strong>David Cortés Toledano</strong></li>
          <li>Correu electrònic: <ObfuscatedEmail /></li>
        </ul>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Objecte">
        <p>
          Transporta'm és una aplicació que ofereix informació sobre el transport públic en temps real. Aquest avís legal
          regula l'ús de l'aplicació i del lloc web, els quals el titular posa a disposició de les persones usuàries.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Condicions d'ús">
        <p>
          L'accés i l'ús de l'aplicació i del lloc web es regeixen pels
          <NuxtLink to="/terms" class="text-primary underline">Termes i condicions d'ús</NuxtLink>
          i per la
          <NuxtLink to="/privacy-policy" class="text-primary underline">Política de privacitat</NuxtLink>.
          En utilitzar-los, acceptes aquestes condicions.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Propietat intel·lectual i industrial">
        <p>
          Tots els continguts de l'aplicació i del lloc web (textos, imatges, logotips, disseny i codi) són titularitat de
          <strong>David Cortés Toledano</strong> o de tercers que n'han autoritzat l'ús, i estan protegits per la
          normativa de propietat intel·lectual i industrial. Queda prohibida la seva reproducció, distribució o
          transformació sense autorització expressa del titular.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Responsabilitat">
        <p>
          El titular no garanteix l'absència d'errors ni la disponibilitat permanent del servei, i no es fa responsable
          dels danys derivats de la manca de disponibilitat o de la utilització de la informació de transport, la qual pot
          contenir imprecisions o retards respecte de les dades dels operadors. Consulta la limitació de responsabilitat
          detallada als <NuxtLink to="/terms" class="text-primary underline">Termes i condicions d'ús</NuxtLink>.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Legislació aplicable">
        <p>
          Aquest avís legal es regeix per la legislació espanyola. Per a qualsevol controvèrsia derivada de l'ús de
          l'aplicació o del lloc web, les parts se sotmeten als jutjats i tribunals que corresponguin segons la normativa
          aplicable.
        </p>
      </PrivacyPolicySection>
    </ul>
  </Container>
</template>
