<template>
  <div class="lang-selector">
    <label for="selectedLang">
      <IconGlobe />
      <select v-model="lang" @change="changeLang()" id="selectedLang" aria-label="Cambiar idioma">
      <option v-for="langSupported in useLangSupported()" :key="langSupported" :value="langSupported">
        {{ langSupported }}
      </option>
    </select>
    </label>

  </div>
</template>

<script setup lang="ts">
  const lang = useLang();

  const changeLang = () => {
    useChangeLang(lang.value)

    let pathTo = useLangReplacePath(useRoute().path, lang.value)

    pathTo = useRouter().resolve(pathTo).matched.length > 0 ? pathTo : '/'

    navigateTo(pathTo)
  }
</script>

<style lang="scss">
  .lang-selector {
    display: flex;
    align-items: center;

    select {
      border: none;
      outline: none;
      color: inherit;
      background-color: inherit;
      font-size: 1em;
      text-transform: uppercase;
    }
  }
</style>
