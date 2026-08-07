<script setup lang="ts">
import PrivacyPolicySection from "~/components/PrivacyPolicySection.vue";
import ObfuscatedEmail from "~/components/ObfuscatedEmail.vue";
</script>

<template>
  <Container class="py-20 sm:py-32">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h1 class="text-3xl font-medium tracking-tight text-neutral-900">Política de Privacitat</h1>
      <p class="mt-2 text-sm text-neutral-600">Última actualització: 2026-08-08</p>
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
          Recollim dades d'ús anònimes per millorar l'aplicació (vegeu la secció «Anàlisi d'ús») i, només si ho actives
          voluntàriament, informes d'errors tècnics seudonimitzats (vegeu la secció «Informes d'errors»). Per
          mantenir-la gratuïta, mostrem publicitat a través de Google AdMob, un servei de tercers que pot recollir
          determinades dades del teu dispositiu tal com es descriu a la secció «Publicitat». També oferim una
          subscripció opcional de pagament que elimina els anuncis, gestionada tal com es descriu a la secció
          «Subscripcions i monetització».
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
          dades d'ús es tracten en servidors propis, no es comparteixen amb tercers i s'eliminen automàticament al cap
          de 6 mesos. L'únic element que compartim és un identificador d'instal·lació anònim, que enviem a RevenueCat
          per vincular les dades de subscripció i publicitat (vegeu la secció «Subscripcions i monetització»); aquest
          identificador no permet identificar-te personalment.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Informes d'errors">
        <p>
          Pots activar voluntàriament l'enviament d'informes d'errors des de la configuració de privacitat de
          l'aplicació. Aquesta opció està <strong>desactivada per defecte en la versió de producció</strong>. Mentre
          estigui desactivada, el servei d'informes d'errors no s'inicialitza i no recull ni envia cap informe. Pots
          retirar el consentiment en qualsevol moment desactivant la mateixa opció; el canvi té efecte immediat i no
          afecta les funcions principals de l'aplicació.
        </p>
        <p class="mt-4">
          Si l'actives, utilitzem <strong>Sentry</strong>, un servei de Functional Software, Inc. (Estats Units), per
          detectar, diagnosticar i corregir errors de l'aplicació. Els informes poden incloure el tipus i el missatge
          de l'error, la traça de la pila, l'estat dels fils, la data i hora, la versió de l'aplicació, informació
          tècnica del dispositiu i del sistema operatiu, un identificador d'instal·lació seudònim i determinades
          preferències no sensibles de visualització, mapa, publicitat i subscripció que ajuden a reproduir l'error.
        </p>
        <p class="mt-4">
          Hem configurat Sentry perquè no enviï el teu nom, correu electrònic ni adreça IP, ni captures de pantalla,
          jerarquia de vistes, ubicació precisa, contingut introduït per l'usuari, registres, reproduccions de sessió,
          dades de rendiment o perfils. Els informes són seudonimitzats: l'identificador d'instal·lació permet agrupar
          errors del mateix dispositiu, però no revela directament la teva identitat.
        </p>
        <p class="mt-4">
          La base jurídica d'aquest tractament és el teu consentiment. Sentry actua com a encarregat del tractament i
          les dades del servei s'allotgen a la seva regió europea, a Alemanya. Sentry i alguns dels seus subencarregats
          poden tractar dades fora de l'Espai Econòmic Europeu amb les garanties previstes al seu acord de tractament
          de dades, incloent-hi, quan correspongui, el Marc de Privacitat de Dades UE-EUA i les clàusules contractuals
          tipus de la Comissió Europea. Pots consultar la
          <a href="https://sentry.io/privacy/" target="_blank" rel="noopener noreferrer" class="text-primary underline">Política de privacitat de Sentry</a>
          i el seu
          <a href="https://sentry.io/legal/dpa/" target="_blank" rel="noopener noreferrer" class="text-primary underline">Acord de tractament de dades</a>.
        </p>
        <p class="mt-4">
          Si vols sol·licitar l'accés o la supressió d'informes associats a la teva instal·lació, contacta'ns i indica
          l'identificador d'instal·lació que trobaràs a la configuració de privacitat de l'aplicació.
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
      <PrivacyPolicySection title="Subscripcions i monetització">
        <p>
          Oferim una subscripció opcional de pagament que elimina els anuncis. Les compres es processen a través de
          l'App Store d'Apple o de Google Play, i fem servir <strong>RevenueCat, Inc.</strong> (Estats Units) com a
          proveïdor per gestionar i validar les subscripcions.
        </p>
        <p class="mt-4">
          Per fer-ho, RevenueCat tracta dades relacionades amb la compra (com ara l'estat de la subscripció i els rebuts
          de transacció; les dades de pagament les gestionen directament Apple i Google, no RevenueCat), un identificador
          d'instal·lació anònim i, en el cas dels usuaris amb anuncis, esdeveniments publicitaris agregats (impressions,
          clics i ingressos per anunci). Aquestes dades ens ofereixen una visió unificada de la monetització i no
          permeten identificar-te personalment.
        </p>
        <p class="mt-4">
          RevenueCat, Inc. té la seu als Estats Units i actua com a encarregat del tractament (<em>processor</em>) en nom
          nostre. Aquesta transferència internacional de dades està emparada per les clàusules contractuals tipus
          (<em>Standard Contractual Clauses</em>) de la Comissió Europea, tal com estableix l'acord de tractament de dades
          (DPA) de RevenueCat. Pots consultar com tracta la informació a la
          <a href="https://www.revenuecat.com/privacy" target="_blank" rel="noopener noreferrer" class="text-primary underline">Política de privacitat de RevenueCat</a>.
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
          <span>Correu electrònic: <ObfuscatedEmail /></span>
        </p>
      </PrivacyPolicySection>
    </ul>
  </Container>
</template>
