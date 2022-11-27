<template>
  <div class="page--index">
    <header>
        <a href="https://github.com/cesargb" target="_blank" title="My profile in Github">
          <IconGithub />
        </a>
    </header>

    <section class="profile">
        <div class="profile__title">
            <div>Hello,</div>
            <h1>I'm Cesar Garcia</h1>
        </div>

        <div class="profile__content">
            I´m a enthusiastic developer, I love to learn new things and I´m always looking for new challenges.
        </div>
    </section>

    <section class="experience">
        <div class="experience__title">
            <h2>My Experience</h2>
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

<script lang="ts">

</script>

<style lang="scss">
@import '@/assets/css/pages/index.scss';
</style>