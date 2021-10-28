<template>
  <div class="flex flex-col gap-6">
    <section class="h-32 flex">
      <div class="grid grid-cols-2 divide-x items-center h-32 w-9/10">
        <p class="text-8xl text-right mr-8 justify-self-end">
          <glitched-text text="WELCOME TO" />
        </p>
        <div class="text-8xl h-full flex items-center">TNT MAN INC</div>
      </div>
    </section>
    <hr class="w-8/10 self-center" />
    <section class="h-32">
      <div class="grid grid-cols-2 divide-x items-center h-32 w-9/10">
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
            </span> and more online (Dont ask why i have so many name). I like to program random not-so-useful and g a m i n g.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
