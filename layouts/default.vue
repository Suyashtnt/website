<template>
  <div>
    <Title>{{ $route.name === 'index' ? 'Home' : $route.name }} | TNT MAN INC</Title>
    <div>
      <nav role="navigation" class="shadow-2xl h-56 md:h-32 flex flex-row items-center sticky top-0 z-50 bg-[var(--surface-a)]">
        <div class="flex flex-col text-center md:text-left md:ml-4">
          <glitched-text text="TNT MAN INC" class="text-6xl" />
          <h2 class="text-4xl">
            Making random things since 2017 (I think)
          </h2>
        </div>
        <div class="flex-grow" />
        <div v-show="width > 640">
          <div class="flex flex-row mr-8 gap-4">
            <btn @click="$router.push('/')">
              Home
            </btn>
            <btn @click="$router.push('/aboutme')">
              About
            </btn>
          </div>
        </div>
      </nav>
      <slot />

      <footer class="bg-black h-24">
        <glitched-text text="MORE COMING SOON" class="text-8xl text-center" />
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
</script>
