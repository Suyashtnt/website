<template>
    <Title>{{ $route.name === 'index' ? 'Home' : $route.name }} | TNT MAN INC</Title>
    <div>
        <nav role="navigation" class="shadow-lg h-24 flex flex-row items-center mb-12">
            <h1 class="text-4xl ml-4">TNT MAN INC</h1>
            <div class="flex-grow"></div>
            <div class="flex flex-row mr-8">
                <btn @click="$router.push('/')">Home</btn>
                <btn @click="$router.push('/about')">About</btn>
            </div>
        </nav>
        <slot />
    </div>
</template>

<script setup lang="ts">
import '~/assets/glitch.scss'
import type { } from 'vue-router'
</script>