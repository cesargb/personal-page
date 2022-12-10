export default defineNuxtRouteMiddleware(() => {
  const currentPath = useRoute().path
  const langPath: null|string = useLangPath()

  if (currentPath !== langPath) {
    navigateTo(langPath)
  }
})