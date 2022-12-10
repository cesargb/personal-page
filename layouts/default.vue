<template>
  <div class="layout-es">
    <header class="header-main">
        <nav>
            <ul>
                <li>
                    <LangSelector />
                </li>
                <li>
                    <a href="https://github.com/cesargb" target="_blank" title="Mi perfil in Github">
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
    { name: 'description', content: 'Soy un desarrollador entusiasta, me encanta aprender cosas nuevas y siempre estoy buscando nuevos desafíos.' }
  ],
  htmlAttrs: {
    lang: 'es',
  }
})
</script>
