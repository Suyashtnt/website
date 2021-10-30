<template>
  <section class="flex flex-col items-center">
    <div class="grid grid-cols-2 divide-x items-center self-center h-64 w-9/10 mb-16">
      <div class="h-full flex items-center">
        <div class="ml-8 self-center h-full w-full text-4xl">
          Hi, I'm
          <span
            v-for="alias, idx in ['A Badly Drawn TABS/G Person', 'TNT MAN', 'Suyashtnt']"
            :key="idx"
          >
            <span class="font-mono bg-gray-900">{{ alias }}</span>,
          </span> and more online (Dont ask why i have so many names). I like to program random not-so-useful things and g a m e.
        </div>
      </div>
      <p class="text-9xl text-center flex items-center justify-items-center mr-8 h-64">
        <glitched-text text="ABOUT ME" class="w-full" />
      </p>
    </div>
    <p class="text-center text-3xl">
      I Usually Play
      <a
        v-for="{ name, description, iconUrl, link } in gameList"
        :key="name"
        :href="link"
      >
        <tippy arrow>
          <template #content>
            <div class="bg-gray-900 rounded-lg pt-5 pb-5 pl-2">
              <div class="flex flex-row">
                <img
                  :src="iconUrl"
                  :alt="name"
                  class="object-cover h-15 w-15 mr-6 rounded-lg"
                >
                <div class="text-5xl self-center">{{ name }}</div>
              </div>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <p class="mt-6" v-html="description" />
            </div>
          </template>
          <!-- workaround for now -->
          <span>{{ name }}, {{ "" }}</span>
        </tippy>
      </a>
      and other random games at really random times.
    </p>
  </section>
</template>

<script lang="ts" setup>
import { Tippy } from 'vue-tippy'

interface Game {
    name: string;
    link: string
    description: string;
    iconUrl: string;
}

const gameList: Game[] = [
  {
    name: 'TABG',
    description: 'A ragdoll-based FPS made for april fools. Cursed as hell. Fun as hell.',
    iconUrl: 'https://thumb.modcdn.io/mods/d4ff/380792/thumb_1020x2000/logo.png',
    link: 'https://store.steampowered.com/app/823130/Totally_Accurate_Battlegrounds/'
  }, {
    name: 'DSP',
    description: 'Dyson Sphere program is a factory game, but its in space over multiple stars and planets. Will test also your mental maths skills.',
    iconUrl: 'https://sun9-79.userapi.com/impg/C9f8lFIj8_S1aeZvmRJICRrmRd1-DiE1aGpwQQ/hGi0W42U1xM.jpg?size=200x200&quality=96&sign=f3ff878566d2af48c036968aaf6c0ab9&type=album',
    link: 'https://store.steampowered.com/app/1366540/Dyson_Sphere_Program/'
  },
  {
    name: 'ULTRAKILL',
    description: `
MANKIND IS DEAD <br>
HELL IS FULL <br>
<span class="text-red-700">BLOOD IS FUEL</span>
    `,
    iconUrl: 'https://styles.redditmedia.com/t5_2etapp/styles/communityIcon_8vtgmv7fpjf41.png?width=256&s=7d0a2e48fe3b21d28bc1904de9b2cf865ce003e5',
    link: 'https://store.steampowered.com/app/1229490/ULTRAKILL/'
  },
  {
    name: 'Minecraft',
    description: 'If you dont know minecraft then idk how you found my website',
    iconUrl: 'https://www.freeiconspng.com/download/16689',
    link: 'https://www.minecraft.net'
  },
  {
    name: 'Flying Gorilla',
    description: 'The most blursed mobile game someone has made. And I\'m somehow in the top 2% of players',
    iconUrl: 'https://play-lh.googleusercontent.com/34GKHRxH_V6ILfiH5Pmom8xflEzAwJdNMYXy4eLEYV0sS9SMH8YvyuIr-zZ8TfZ7GU97=s180-rw',
    link: 'https://apps.apple.com/us/app/flying-gorilla/id1365028549'
  }
]
</script>
