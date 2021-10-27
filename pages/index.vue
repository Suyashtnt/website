<template>
  <div>
    <p class="text-center text-4xl">
      <glitched-writer class="w-full" :text="smallText" appear></glitched-writer>
    </p>
    <div class="text-center">
      <glitched-writer class="w:w-full text-center glitch" :text="bigText" appear></glitched-writer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import GlitchedWriter from 'vue-glitched-writer'

const bigTexts = [
  "TNT MAN INC",
  "COMING SOON"
]

const smallTexts = [
  "WELCOME TO",
  "The website of a really bad coder. Its really bare-bones for now, but actual content is"
]

let idx = ref(0)

let bigText = ref(bigTexts[0])
let smallText = ref(smallTexts[0])

setInterval(() => {
  idx.value++
  if (idx.value >= bigTexts.length) {
    idx.value = 0
  }

  bigText.value = bigTexts[idx.value]
  smallText.value = smallTexts[idx.value]
}, 7000)
</script>
