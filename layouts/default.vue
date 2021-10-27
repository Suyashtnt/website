<template>
    <Title>{{ $route.name === 'index' ? 'Home' : $route.name }} | TNT MAN INC</Title>
    <div>
        <nav role="navigation" class="shadow-lg h-24 flex flex-row items-center mb-12">
            <h1 class="text-4xl ml-4">TNT MAN INC</h1>
            <div class="flex-grow"></div>
            <div class="flex flex-row mr-8">
                <button class="btn" @click="$router.push('/')">Home</button>
                <button class="btn" @click="$router.push('/about')">about</button>
            </div>
        </nav>
        <slot />
    </div>
</template>

<script setup lang="ts">
import '~/assets/glitch.css'
import type { } from 'vue-router'
</script>

<style>
.btn {
    @apply ripple-bg-blue-600
    shadow-md
    rounded-md
    p-6 
    ml-2 mr-2 
    h-6
    flex 
    items-center;
}
</style>