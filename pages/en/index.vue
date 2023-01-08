<template>
  <div class="page--index">
    <section class="profile">
        <div class="profile__title">
            <div>Hello,</div>
            <h1>my name is Cesar Garcia</h1>
        </div>

        <div class="profile__content">
            I´m a enthusiastic developer, I love to learn new things and I´m always looking for new challenges.
        </div>

        <div class="profile__work">
            I work in <a href="https://www.descom.es" target="__blank">Descom.es</a>, a technological company
            with more than 30 years in the sector, where as CTO my main task is to design and develop solutions
            through innovation and technology.
        </div>
    </section>

    <section class="experience">
        <div class="experience__title">
            <h2>My Experience in developer</h2>
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

    <section class="open-source">
        <div class="open-source__title">
            <h2>Open source</h2>
        </div>

        <div class="open-source__content">
            <GithubRepositoryItem v-for="repository in repositories"
                :key="repository.repository"
                class="item"
                tag-title="h3"
                :repository="repository.repository"
                :tags="repository.tags"
                :description="repository.description.en"
            />

        </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import repositories from '@/assets/data/repositories.json'

useHead({
  title: "Cesar Garcia: software architect and developer",
  meta: [
    { name: 'description', content: 'Hello, let me introduce myself, my name is Cesar García and I am enthusiastic about everything related to development and I am always looking for new challenges that can inspire me.' }
  ],
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: "alternate", hreflang: "es", href: "https://cesargb.dev" },
  ]
})
</script>


<style lang="scss">
@import '@/assets/css/pages/index.scss';
</style>