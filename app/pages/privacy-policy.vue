<script setup lang="ts">
import PrivacyPolicySection from "~/components/PrivacyPolicySection.vue";
</script>

<template>
  <Container class="py-20 sm:py-32">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h1 class="text-3xl font-medium tracking-tight text-neutral-900">Política de Privacitat</h1>
      <p class="mt-2 text-sm text-neutral-600">Última actualització: 2026-07-21</p>
    </div>

    <ul role="list" class="mt-16 space-y-10">
      <PrivacyPolicySection title="Introducció">
        <p>
          A <strong>Transporta'm</strong>, respectem la teva privacitat i ens comprometem a complir amb el Reglament
          General de Protecció de Dades (RGPD) i altres normatives aplicables. Aquesta política explica com gestionem
          les teves dades personals.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Recollida de dades">
        <p>
          <strong>Transporta'm</strong> no recull, emmagatzema ni processa directament cap informació personal
          identificable dels usuaris. La nostra aplicació està dissenyada per funcionar sense necessitat que ens
          facilitis dades personals.
        </p>
        <p class="mt-4">
          Recollim dades d'ús anònimes per millorar l'aplicació (vegeu la secció «Anàlisi d'ús») i, per mantenir-la
          gratuïta, mostrem publicitat a través de Google AdMob, un servei de tercers que pot recollir determinades
          dades del teu dispositiu tal com es descriu a la secció «Publicitat».
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Anàlisi d'ús">
        <p>
          Recollim dades d'ús <strong>anònimes i agregades</strong> sobre com es fa servir l'aplicació, com ara les
          funcionalitats utilitzades i la versió de l'aplicació. Aquesta informació no s'associa amb la teva identitat
          ni permet identificar-te.
        </p>
        <p class="mt-4">
          L'utilitzem exclusivament per millorar l'aplicació i decidir quines noves funcionalitats prioritzar. Aquestes
          dades es tracten en servidors propis, no es comparteixen amb tercers ni surten de la nostra infraestructura, i
          s'eliminen automàticament al cap de 6 mesos.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Publicitat">
        <p>
          Utilitzem <strong>Google AdMob</strong> (de Google Ireland Limited) per mostrar anuncis dins de l'aplicació.
          Per oferir aquest servei, AdMob pot recollir i tractar dades com ara l'identificador de publicitat del
          dispositiu, l'adreça IP, informació sobre el dispositiu i el sistema operatiu, i dades sobre la teva
          interacció amb els anuncis.
        </p>
        <p class="mt-4">
          Aquestes dades s'utilitzen per mostrar anuncis, mesurar-ne el rendiment i, si hi dones el consentiment,
          personalitzar-los. Pots consultar com Google tracta aquesta informació a la
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary underline">Política de privacitat de Google</a>
          i a
          <a href="https://support.google.com/admob/answer/6128543" target="_blank" rel="noopener noreferrer" class="text-primary underline">Com Google fa servir les dades d'AdMob</a>.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Consentiment i compliment de les normatives europees">
        <p>
          Ens comprometem a complir amb totes les normatives europees rellevants, incloent-hi el Reglament General de
          Protecció de Dades (RGPD) i la Directiva ePrivacy. Als usuaris de l'Espai Econòmic Europeu els mostrem un
          missatge de consentiment gestionat per la plataforma de missatgeria d'usuari de Google (UMP) abans de
          mostrar anuncis personalitzats.
        </p>
        <p class="mt-4">
          Pots atorgar o retirar el teu consentiment en qualsevol moment. Si el retires, se't continuaran mostrant
          anuncis, però no personalitzats. També pots limitar el seguiment publicitari des de la configuració de
          privacitat del teu dispositiu.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Canvis en la política">
        <p>
          Ens reservem el dret de modificar aquesta política de privacitat per assegurar el compliment de noves
          regulacions o per raons operatives. T'informarem de qualsevol canvi publicant una versió actualitzada en
          aquesta pàgina.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Contacte">
        <p>
          Si tens preguntes o dubtes sobre aquesta política de privacitat, pots contactar-nos a:
        </p>
        <p>
          <span>Correu electrònic: <a href="mailto:hello@transportam.cat" class="text-primary underline">hello@transportam.cat</a></span>
        </p>
      </PrivacyPolicySection>
    </ul>
  </Container>
</template>
