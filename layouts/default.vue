<template>
  <div class="layout">
    <header>
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

    <main>
      <slot />
    </main>
  </div>
</template>
