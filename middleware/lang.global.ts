export default defineNuxtRouteMiddleware((to) => {
  const currentPath = to.path
  const langPath: null|string = useLangPath()

  if (currentPath !== langPath) {
    navigateTo(langPath)
  }
})