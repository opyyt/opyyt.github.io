<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

defineProps({
  msg: String,
});
const count = ref(0);
const router = useRouter();
const route = useRoute();

const goSunflower = () => {
  router.push({
    name: "Sunflower",
  });
};
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="goSunflower">请点击此处</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
