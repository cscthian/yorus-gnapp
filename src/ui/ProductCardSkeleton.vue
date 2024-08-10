<script setup lang="ts">
  defineProps({
    visible: {
      type: Boolean,
      default: false
    },
    length: {
      type: Number,
      default: 1
    }
  })
</script>

<template>
  <div v-if="visible" v-for="n in length" class="card-skeleton">
    <div class="skeleton card-skeleton__img">

    </div>
    <p class="skeleton card-skeleton__text"></p>
    <p class="skeleton card-skeleton__text"></p>
  </div>
</template>

<style lang="scss" scoped>
.skeleton {
  background: #e9e9ee;
  animation: shimmer 1.7s infinite;
}
.card-skeleton {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &__img {
    width: 250px;
    height: 240px;
    margin-bottom: 10px;
  }
  &__text {
    height: 25px;
    width: 200px;
    margin-bottom: 10px;
  }
}

@keyframes shimmer {
  0% {
    background-position: -150px 0;
    background: #c5d5dd;
  }
  100% {
    background-position: 150px 0;
  }
}
</style>