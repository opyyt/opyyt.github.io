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
  useImageUrl("Color", "03", "jpg"),
  useImageUrl("Color", "04", "jpg"),
  useImageUrl("Color", "dehuang", "jpg"),
  useImageUrl("Color", "Illustration03", "jpg"),
  useImageUrl("Color", "kashandela", "jpg"),
  useImageUrl("Color", "lamu", "jpg"),
  useImageUrl("Color", "snake", "jpg"),
  useImageUrl("Color", "summer", "jpg"),
  useImageUrl("Color", "swore", "jpg"),
  useImageUrl("Color", "yansai", "jpg"),
  useImageUrl("Color", "yinghuang", "jpg"),
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
