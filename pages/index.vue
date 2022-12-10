<template>
  <div class="page--index">
    <section class="profile">
        <div class="profile__title">
            <div>Hola,</div>
            <h1>mi nombre es Cesar Garcia</h1>
        </div>

        <div class="profile__content">
            Soy un entusiasta desarrollador, me encanta aprender cosas nuevas y siempre estoy buscando nuevos desafíos.
        </div>

        <div class="profile__work">
            Trabajo en <a href="https://www.descom.es" target="__blank">Descom.es</a>, una empresa técnologica
            con más de 30 años en el sector, donde como CTO mi principal tarea es diseñar y desarrollar soluciones
            mediante la innovación y la tecnología.
        </div>
    </section>

    <section class="experience">
        <div class="experience__title">
            <h2>Mi experiencia como desarrollador</h2>
        </div>

        <div class="experience__content">
            <div class="item">
                <div class="item__image">
                    <IconPhp />
                </div>
                <h3>PHP</h3>
            </div>
            <div class="item">
                <div class="item__image">
                    <IconNuxt />
                </div>
                <h3>Nuxt</h3>
            </div>
            <div class="item">
                <div class="item__image">
                    <IconAws />
                </div>
                <h3>AWS</h3>
            </div>
            <div class="item">
                <div class="item__image">
                    <IconLinux />
                </div>
                <h3>Linux</h3>
            </div>
        </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Cesar Garcia: arquitecto de software y desarrollador",
  meta: [
    { name: 'description', content: 'Hola me presento, mi nombre es Cesar García y me entusiasma todo lo relacionado al desarrollo y siempre busco nuevos retos que me puedan inspirar.' }
  ],
  link: [
    { rel: "alternate", hreflang: "en", href: "https://cesargb.dev/en" },
  ]
})

</script>

<style lang="scss">
@import '@/assets/css/pages/index.scss';
</style>