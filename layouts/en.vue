<template>
  <div class="layout">
    <header class="header-main">
        <nav>
            <ul>
                <li>
                    <LangSelector />
                </li>
                <li>
                    <a href="https://github.com/cesargb" target="_blank" title="My profile in Github">
                        <IconGithub />
                    </a>
                </li>
            </ul>
        </nav>

    </header>
    <slot />
  </div>
</template>

<script setup lang="ts">
useHead({
  meta: [
    { name: 'description', content: 'I´m a enthusiastic developer, I love to learn new things and I´m always looking for new challenges.' }
  ],
  htmlAttrs: {
    lang: 'en',
  },
  link: [
    { rel: "alternate", hreflang: "es", href: "https://cesargb.dev" },
  ]
})
</script>
