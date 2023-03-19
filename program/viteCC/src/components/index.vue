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
  <div class="main">
    <h1>美好的事情</h1>

    <div class="card">
      <button type="button" @click="goSunflower">请点击此处</button>
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
body {
  padding: 0;
  margin: 0;
}
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  margin-top: 60%;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
</style>
