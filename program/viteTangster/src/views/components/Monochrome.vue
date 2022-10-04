<template>
  <div>
    <div class="parent white">
      <div class="firstImg">
        <el-image :src="firstImg" />
      </div>
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
const firstImg = ref(useImageUrl("Monochrome", "Linguang", "jpg"));
const images = ref([
  useImageUrl("Monochrome", "Chen", "jpg"),
  useImageUrl("Monochrome", "Chenduo", "jpg"),
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
  width: 700px;
  height: auto;
  overflow: hidden;
}
.firstImg {
  width: 450px;
  height: 438.01px;
}
.box {
  flex: 1 1 300px; /*  Stretching: */
  flex: 0 1 300px; /*  No stretching: */
  margin: 5px;
}
</style>
