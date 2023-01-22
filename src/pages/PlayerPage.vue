<template>
  <div class="container">
    <v-slider
        step="1"
        show-ticks
        color="orange"
        label="гитара"
        min="0"
        max="100"
        v-model="sliders[0]"
    ></v-slider>
    <v-slider
        step="1"
        show-ticks
        color="orange"
        label="голос"
        min="0"
        max="100"
        v-model="sliders[1]"
    ></v-slider>
    <v-slider
        step="1"
        show-ticks
        color="orange"
        label="бас"
        min="0"
        max="100"
        v-model="sliders[2]"
    ></v-slider>
    <v-slider
        step="1"
        show-ticks
        color="orange"
        label="барабаны"
        min="0"
        max="100"
        v-model="sliders[3]"
    ></v-slider>
  </div>
  <audio>
    <source src="./1.mp3" type="audio/mpeg">
  </audio>
  <audio>
    <source src="./2.mp3" type="audio/mpeg">
  </audio>
  <audio>
    <source src="./3.mp3" type="audio/mpeg">
  </audio>
  <audio>
    <source src="./4.mp3" type="audio/mpeg">
  </audio>

  <div class="w-100" v-if="start"><v-btn class="w-100" variant="tonal" @click="startF()">старт</v-btn></div>
  <div class="w-100" v-if="!start"><v-btn class="w-100" variant="tonal" @click="startF()">стоп</v-btn></div>
</template>

<script setup>
import {reactive, ref} from "vue";

const start = ref(false)

const sliders = reactive([])
sliders.push(2)
sliders.push(2)
sliders.push(2)
sliders.push(0)

function startF(){
  this.start = !this.start

  const audios = document.getElementsByTagName('audio')

  if (this.start){
    for (let i = 0; i < audios.length; i++) {
      audios[i].volume = sliders[i]/100
      audios[i].play()
    }
  }
  else {
    for (let i = 0; i < audios.length; i++) {
      audios[i].pause()
    }
  }
}

// function changeSound(){
//   const audios = document.getElementsByTagName('audio')
//
//   for (let i = 0; i < audios.length; i++) {
//     audios[i].volume = sliders[i]/100
//     audios[i].play()
//   }
// }

</script>

<style lang="scss">
.v-slider-thumb{
  display: none;
}
</style>