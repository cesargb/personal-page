<template>
  <div class="page--index">
    <section class="profile">
        <div class="profile__title">
            <div>Hola,</div>
            <h1>Soy Cesar Garcia</h1>
        </div>

        <div class="profile__content">
            Soy un desarrollador entusiasta, me encanta aprender cosas nuevas y siempre estoy buscando nuevos desafíos.
        </div>
    </section>

    <section class="experience">
        <div class="experience__title">
            <h2>Mi experiencia</h2>
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
  link: [
    { rel: "alternate", hreflang: "en", href: "https://cesargb.dev/en" },
  ]
})

</script>

<style lang="scss">
@import '@/assets/css/pages/index.scss';
</style>