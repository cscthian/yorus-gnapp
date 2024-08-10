<script setup lang="ts">
  import { ref } from 'vue';
  // components
  import ProductCardSkeleton from '@/ui/ProductCardSkeleton.vue';

  // states
  const listProds = ref<Number[]>([1,2,3,4,5,6,7])
  const showProds = ref(false)
  const loading = ref(false)

  // methods
  const defaultBestProds = () => {  
    showProds.value = false
    let divElement = document.getElementById("betSeller")
    if (divElement) {
      divElement.style.display = 'grid';
    }
  }

  const changeListBestProds = async (tag:string) => {  
    let divElement = document.getElementById("betSeller")
    if (divElement) {
      divElement.style.display = 'none';
    }
    loading.value = true
    showProds.value = true
    listProds.value = await new Promise((resolve, rejected) => {
      setTimeout(() => {
        loading.value = false
        resolve([1,2,3,4,5,6,7])
      }, 1000)
    })
    
  }
</script>

<template>
  <div class="flex gap-5 items-center justify-center py-6 mb-4">
    <a  
      class="hover:text-colorAction hover:cursor-pointer font-ffPrimary uppercase text-lg"
      @click="defaultBestProds()"
      >Mas Vendido</a>
    <a
      class="hover:text-colorAction hover:cursor-pointer font-ffPrimary uppercase text-lg"
      @click="changeListBestProds('toy')">Juguetes</a>
    <a 
      href="#" 
      class="hover:text-colorAction hover:cursor-pointer font-ffPrimary uppercase text-lg"
      @click="changeListBestProds('salud')">Bienestar</a>
  </div>
  <div v-show="showProds" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
    <ProductCardSkeleton 
      :visible="loading"
      :length="listProds.length"
    />
    <div
      v-if="!loading"
      v-for="prod in listProds" 
      class="flex flex-col items-center justify-center mb-10">
      <img 
        src="https://servicios.neunapp.com/media/producto/pet-02-removebg-preview.png"
        alt="corre para perro" 
        width="250" 
        height="250"
        class="h-[250px]"
      />
      <a href="#"
          class="font-ffText font-bold capitalize mt-4 text-colorText
                text-lg hover:text-colorBgFront">Correa para perro</a>
      <p class="font-ffPrimary font-bold text-colorAction text-xl m-2">$ 125.25</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>