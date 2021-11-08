<template>
  <glitchy-writer
    :text="text"
    class="glitch"
    appear
    preset="nier"
    :options="{
      interval: 1,
      steps: 25
    }
    "
  />
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import GlitchyWriter from 'vue-glitched-writer'

defineProps({
  text: {
    type: String,
    required: true
  }
})
</script>
