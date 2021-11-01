<template>
  <section class="flex flex-col items-center">
    <div class="grid grid-cols-2 divide-x items-center self-center h-64 w-9/10 mb-16">
      <div class="h-full flex items-center">
        <div class="ml-8 self-center h-full w-full text-4xl">
          Hi, I'm
          <span
            v-for="alias, idx in aliases"
            :key="idx"
          >
            <span class="font-mono bg-gray-900">{{ alias }}</span>,
          </span> and more online (Dont ask why i have so many names). I like to play games and over-engineer websites. If you want see overengineering then go to my API
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
            <card class="bg-gray-900 rounded-lg pt-5 pb-5 pl-2">
              <template #title>
                <div class="flex flex-row gap-4">
                  <img
                    :src="iconUrl"
                    :alt="name"
                    class="object-cover h-15 w-15 rounded-lg"
                  >
                  <div class="text-5xl self-center">{{ name }}</div>
                </div>
                <!-- eslint-disable-next-line vue/no-v-html -->

              </template>

              <template #content>
                <!-- eslint-disable-next-line vue/no-v-html -->
                <div v-html="description" />
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
