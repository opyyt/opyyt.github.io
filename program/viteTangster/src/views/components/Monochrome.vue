<template>
  <div>
    <div class="parent white">
      <el-image
        class="box green"
        v-for="image in images"
        :key="image"
        :src="image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import useImageUrl from "../../utils/useImageUrl";
import { ref } from "vue";
const images = ref([
  useImageUrl("Monochrome", "Chen", "jpg"),
  useImageUrl("Monochrome", "Chenduo", "jpg"),
  useImageUrl("Monochrome", "Linguang", "jpg"),
  useImageUrl("Monochrome", "munihei", "jpg"),
  useImageUrl("Monochrome", "shenguan", "jpg"),
  useImageUrl("Monochrome", "WangYao01", "jpg"),
  useImageUrl("Monochrome", "WangYao02", "jpg"),
  useImageUrl("Monochrome", "WangYao03", "jpg"),
]);
</script>

<style scoped>
.parent {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 900px;
  height: auto;
  overflow: hidden;
}

.box {
  flex: 1 1 150px; /*  Stretching: */
  flex: 0 1 150px; /*  No stretching: */
  margin: 5px;
}
.box img {
  height: 345px;
  width: 900px;
  transition: all 2s;
}
img:hover {
  transform: scale(1.3);
}
</style>
