<template>
    <section class="h-64">
        <div class="grid grid-cols-2 divide-x items-center h-64 w-9/10 mb-16">
            <p class="text-9xl text-right mr-8">
                <glitched-text text="ABOUT ME" />
            </p>
            <div class="h-full flex items-center">
                <div class="ml-8 self-center h-full w-full text-4xl">
                    Hi, I'm
                    <span
                        v-for="alias, idx in ['A Badly Drawn TABS/G Person', 'TNT MAN', 'Suyashtnt']"
                        :key="idx"
                    >
                        <span class="font-mono bg-gray-900">{{ alias }}</span>,
                    </span> and more online (Dont ask why i have so many name). I like to program random not-so-useful things and g a m e.
                </div>
            </div>
        </div>
        <p class="text-center text-3xl">
            I Usually Play
            <a
                v-for="{ name, description, iconUrl, link } in gameList"
                :href="link"
                :key="name"
            >
                <tippy arrow>
                    <template #content>
                        <div class="bg-gray-900 rounded-lg p-6">
                            <div class="flex flex-row">
                                <img
                                    :src="iconUrl"
                                    :alt="name"
                                    class="object-cover h-15 w-15 mr-6 rounded-lg"
                                />
                                <div class="text-5xl self-center">{{ name }}</div>
                            </div>
                            <p class="prose mt-6">{{ description }}</p>
                        </div>
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
interface Game {
    name: string;
    link: string
    description: string;
    iconUrl: string;
}

const gameList: Game[] = [{
    name: 'TABG',
    description: 'A ragdoll-based FPS made for april fools. Cursed as hell. Fun as hell.',
    iconUrl: "https://thumb.modcdn.io/mods/d4ff/380792/thumb_1020x2000/logo.png",
    link: "https://store.steampowered.com/app/823130/Totally_Accurate_Battlegrounds/"
}, {
    name: 'DSP',
    description: 'Dyson Sphere program is a factory game, but its in space over multiple stars and planets. Will test also your mental maths skills.',
    iconUrl: "https://sun9-79.userapi.com/impg/C9f8lFIj8_S1aeZvmRJICRrmRd1-DiE1aGpwQQ/hGi0W42U1xM.jpg?size=200x200&quality=96&sign=f3ff878566d2af48c036968aaf6c0ab9&type=album",
    link: "https://store.steampowered.com/app/1366540/Dyson_Sphere_Program/"
}]
</script>