export default defineNuxtRouteMiddleware((to, from) => {
  const currentPath = to.path
  const langPath: null|string = useLangPath()

  if (currentPath !== langPath) {
    navigateTo(langPath)
  }
})