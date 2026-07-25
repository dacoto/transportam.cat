<script setup lang="ts">
import PrivacyPolicySection from "~/components/PrivacyPolicySection.vue";
</script>

<template>
  <Container class="py-20 sm:py-32">
    <div class="mx-auto max-w-2xl sm:text-center">
      <h1 class="text-3xl font-medium tracking-tight text-neutral-900">Termes i condicions d'ús</h1>
      <p class="mt-2 text-sm text-neutral-600">Última actualització: 2026-07-25</p>
    </div>

    <ul role="list" class="mt-16 space-y-10">
      <PrivacyPolicySection title="Acceptació dels termes">
        <p>
          Aquests termes i condicions regulen l'ús de l'aplicació <strong>Transporta'm</strong> i del lloc web
          <strong>transportam.cat</strong>, titularitat de <strong>David Cortés Toledano</strong> (vegeu l'
          <NuxtLink to="/legal-notice" class="text-primary underline">Avís legal</NuxtLink>). En descarregar, instal·lar o
          utilitzar l'aplicació, acceptes aquests termes. Si no hi estàs d'acord, no la facis servir.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Descripció del servei">
        <p>
          Transporta'm ofereix informació sobre el transport públic en temps real. Les dades provenen dels operadors de
          transport i de fonts de tercers, i es proporcionen amb finalitats informatives. No garantim que siguin exactes,
          completes o actualitzades en tot moment.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Ús acceptable">
        <p>
          Et comprometes a fer servir l'aplicació de manera lícita i a no: (a) utilitzar-la per a finalitats il·legals o
          no autoritzades; (b) intentar accedir, alterar o interferir en els sistemes o dades del servei; (c) reproduir,
          revendre o explotar comercialment el servei o els seus continguts sense autorització; ni (d) fer-ne un ús que
          pugui perjudicar-ne el funcionament o altres persones usuàries.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Subscripcions de pagament">
        <p>
          L'aplicació és gratuïta i es finança amb publicitat. Oferim una subscripció opcional de pagament que elimina els
          anuncis. El preu es mostra a l'aplicació abans de la compra i pot variar segons el país i la botiga.
        </p>
        <p class="mt-4">
          Les subscripcions es contracten i es cobren a través del teu compte de l'<strong>App Store</strong> d'Apple o de
          <strong>Google Play</strong>, i es <strong>renoven automàticament</strong> pel mateix període llevat que les
          cancel·lis com a mínim 24 hores abans que acabi el període en curs. La gestió i la cancel·lació es fan des de la
          configuració del teu compte a la botiga corresponent; la desinstal·lació de l'aplicació no cancel·la la
          subscripció. Les devolucions es regeixen per les polítiques d'Apple i de Google.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Publicitat">
        <p>
          En la versió gratuïta, l'aplicació mostra anuncis a través de tercers. El tractament de dades associat a la
          publicitat i a les subscripcions es descriu a la
          <NuxtLink to="/privacy-policy" class="text-primary underline">Política de privacitat</NuxtLink>.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Propietat intel·lectual">
        <p>
          L'aplicació, el lloc web i tots els seus continguts estan protegits per drets de propietat intel·lectual i
          industrial. Se't concedeix una llicència limitada, no exclusiva i revocable per utilitzar l'aplicació per a ús
          personal i no comercial, d'acord amb aquests termes.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Exempció i limitació de responsabilitat">
        <p>
          El servei es proporciona «tal com és» i «segons disponibilitat». No ens fem responsables de decisions preses a
          partir de la informació de transport, que pot contenir errors, imprecisions o retards respecte de les dades dels
          operadors. En la mesura permesa per la llei, quedem exempts de responsabilitat pels danys indirectes o
          derivats de la manca de disponibilitat del servei. Res en aquests termes exclou la responsabilitat que no pugui
          excloure's legalment, incloent-hi els drets que et reconeix la normativa de consum aplicable.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Modificacions">
        <p>
          Podem modificar aquests termes per adaptar-los a canvis legals o operatius. Publicarem la versió actualitzada en
          aquesta pàgina i, si els canvis són substancials, procurarem avisar-te. L'ús continuat de l'aplicació després
          d'una actualització implica l'acceptació dels nous termes.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Legislació aplicable">
        <p>
          Aquests termes es regeixen per la legislació espanyola, sens perjudici dels drets que la normativa de consum del
          teu país de residència et pugui reconèixer.
        </p>
      </PrivacyPolicySection>
      <PrivacyPolicySection title="Contacte">
        <p>
          Per a qualsevol qüestió relacionada amb aquests termes, pots contactar-nos a
          <a href="mailto:hello@transportam.cat" class="text-primary underline">hello@transportam.cat</a>.
        </p>
      </PrivacyPolicySection>
    </ul>
  </Container>
</template>
