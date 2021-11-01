<template>
  <div>
    <Title>{{ $route.name === 'index' ? 'Home' : $route.name }} | TNT MAN INC</Title>
    <div>
      <nav role="navigation" class="shadow-2xl h-24 flex flex-row items-center sticky top-0 z-50 bg-[var(--surface-a)]">
        <div class="flex flex-col ml-4">
          <glitched-text text="TNT MAN INC" class="text-5xl" />
          <h2 clas6="text-3xl">
            Making random things since 2017
          </h2>
        </div>
        <div class="flex-grow" />
        <div class="flex flex-row mr-8 gap-4">
          <btn @click="$router.push('/')">
            Home
          </btn>
          <btn @click="$router.push('/aboutme')">
            About
          </btn>
        </div>
      </nav>
      <slot />

      <footer class="bg-black h-24">
        <glitched-text text="MORE COMING SOON" class="text-8xl text-center" />
      </footer>
    </div>
  </div>
</template>
