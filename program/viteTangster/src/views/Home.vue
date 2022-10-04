<template>
  <div class="content">
    <h2>Tangster</h2>
    <div class="tab">
      <div @click="goAccueil" class="tabs-item">Accueil</div>
      <div
        @click="swichItem(item)"
        class="tabs-item"
        v-for="item in data"
        :key="item.name"
      >
        {{ item.name }}
      </div>
    </div>
    <component :is="current.comName"></component>
  </div>
</template>

<script setup lang="ts">
import { reactive, markRaw } from "vue";
import A from "./components/Color.vue";
import B from "./components/Monochrome.vue";
import C from "./components/PublicWelfare.vue";
import { useRouter } from "vue-router";

const router = useRouter();
type Tabs = {
  name: string;
  comName: any;
};
type Com = Pick<Tabs, "comName">;

const data = reactive<Tabs[]>([
  {
    name: "Color",
    comName: markRaw(A),
  },
  {
    name: "Mono Chrome",
    comName: markRaw(B),
  },
  {
    name: "Public Welfare",
    comName: markRaw(C),
  },
]);

let current = reactive<Com>({
  comName: data[0].comName,
});

const swichItem = (item: Tabs) => {
  current.comName = item.comName;
};
const goAccueil = () => {
  router.push({
    name: "Accueil",
  });
};
</script>

<style scoped>
.tab {
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 1.4em;
  letter-spacing: 0.1em;
  font-family: Italiana, serif;
  color: rgb(180, 199, 218);
  align-self: center;
  text-align: left;
  align-items: center;
  margin-bottom: 0em;
}
.tab div {
  cursor: pointer;
}
.tabs-item {
  padding: 20px;
}
</style>
