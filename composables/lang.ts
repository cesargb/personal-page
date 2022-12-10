const languagesSupported = ['es', 'en']
const languageDefault = 'es'

const getLangByPath = (path: string): string => {
  return languagesSupported
    .filter((lang) => lang !== languageDefault)
    .filter((lang) => {
      return path.startsWith(`/${lang}/`) || path === `/${lang}`
    }).pop() || languageDefault
}

export const useLangSupported = () => {
  return languagesSupported
}

export const useLang = () => useState<string>('lang', () => useDefaultLang())


export const useDefaultLang = (): string => {
  const langSelected: string = useCookie('lang').value || ''

  if (languagesSupported.includes(langSelected)) {
    return langSelected
  }

  let lang: string = languageDefault

  if (process.server) {
    const reqLocale = useRequestHeaders(['accept-language'])["accept-language"]?.split(',')
    .map((lang: string) => lang.split(';')[0])
    .find(
      (lang) => languagesSupported.includes(lang)
      )

    if (reqLocale) {
      lang = reqLocale
    }
  }

  return lang
}

export const useLangReplacePath = (path: string, langTo: string, langFrom: string| null = null): string => {
  langFrom = langFrom || getLangByPath(path)

  if (langFrom === langTo) {
    return path
  }

  if (langFrom === languageDefault) {
    return path === '/' ? `/${langTo}` : `/${langTo}/${path}`
  }

  if (langTo === languageDefault) {
    return path.replace(`/${langFrom}`, '')
  }

  return path.replace(`/${langFrom}`, `/${langTo}`)
}

export const useLangPath = (): string => {
  return useLangReplacePath(useRoute().path, useDefaultLang())
}

export const useChangeLang = (lang: string): null|string  => {
  if (! languagesSupported.includes(lang)) {
    return null
  }

  const previousLang = useDefaultLang()

  if (lang === previousLang) {
    return null
  }

  const langCookie = useCookie('lang')

  langCookie.value = lang

  return useLangPath()
}
