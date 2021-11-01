interface Game {
    name: string;
    link: string
    description: string;
    iconUrl: string;
}

type GameList = Game[]

export default (): GameList => [
  {
    name: 'TABG',
    description: 'A ragdoll-based FPS made for april fools. Cursed as hell. Fun as hell.',
    iconUrl: 'https://thumb.modcdn.io/mods/d4ff/380792/thumb_1020x2000/logo.png',
    link: 'https://store.steampowered.com/app/823130/Totally_Accurate_Battlegrounds/'
  },
  {
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
    iconUrl: 'https://img.apksum.com/07/jp.pinbit.flygorilla/2.82/icon.png',
    link: 'https://apps.apple.com/us/app/flying-gorilla/id1365028549'
  }
]
