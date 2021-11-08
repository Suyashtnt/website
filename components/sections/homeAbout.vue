<template>
  <section class="flex flex-col items-center">
    <div class="flex flex-col md:flex-row items-center self-center w-9/10 mb-16">
      <p class="text-6xl text-center flex items-center justify-items-center mb-8 md:text-10xl">
        <glitched-text text="ABOUT ME" class="w-full" />
      </p>
      <div class="h-full flex items-center justify-center">
        <div class="h-full text-2xl prose md:text-4xl md:w-3/4">
          Hi, I'm
          <span
            v-for="alias, idx in aliases"
            :key="idx"
          >
            <span class="font-mono bg-gray-900">{{ alias }}</span>,
          </span> and more online (Dont ask why i have so many names). I like to play games and over-engineer websites. If you want see overengineering then go to my API
        </div>
      </div>
    </div>
    <p class="text-center text-5xl w-3/4 pb-8">
      I Usually Play
      <a
        v-for="{ name, description, iconUrl, link } in gameList"
        :key="name"
        :href="link"
        class="underline underline-blue-500"
      >
        <tippy>
          <template #content>
            <card class="!bg-gray-900 rounded-lg pt-5 pb-5 pl-2">
              <template #title>
                <div class="flex flex-row gap-4">
                  <img
                    :src="iconUrl"
                    :alt="name"
                    class="object-cover h-15 w-15 rounded-lg"
                  >
                  <div class="text-5xl self-center">{{ name }}</div>
                </div>
              </template>

              <template #content>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div class="text-2xl" v-html="description" />
              </template>

            </card>
          </template>
          <span>{{ name }}, {{ "" }}</span>
        </tippy>
      </a>
      and other random games at really random times.
    </p>
  </section>
</template>

<script lang="ts" setup>
import { Tippy } from 'vue-tippy'
import { useFetch } from '#app'

const { data: gameList } = await useFetch('/api/gamelist')
const { data: aliases } = await useFetch('/api/aliases')
</script>
