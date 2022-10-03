<template>
  <div class="content">
    <h2>Tangster</h2>
    <div class="content-img">
      <img src="../assets/images/Accueil/snake.jpg" alt="Accueil" />
    </div>
    <div class="content-tabs">
      <router-link to="/Home">Work</router-link>
      <router-link to="/Contact">Contact</router-link>
    </div>
  </div>
</template>

<style scoped>
.content-img {
  width: 500px;
  height: 311px;
}
img {
  width: 100%;
  height: 100%;
}
.content-tabs {
  color: rgb(0, 6, 14);
  font-size: 1.4em;
  text-transform: none;
  letter-spacing: 0.1em;
  font-family: Italiana, serif;
  margin-top: 0.45em;
}
</style>
