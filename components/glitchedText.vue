<template>
    <glitched-writer
        :text="text"
        class="glitch"
        appear
        preset="nier"
        :options="{
            interval: 1,
            steps: 10
        }
        "
    />
</template>

<script lang="ts" setup>

import GlitchedWriter from 'vue-glitched-writer'
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>