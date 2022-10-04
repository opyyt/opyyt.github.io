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
      <div class="firstImg">
        <el-image :src="listImg" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import useImageUrl from "../../utils/useImageUrl";
import { ref } from "vue";
const firstImg = ref(useImageUrl("Color", "snake", "jpg"));
const listImg = ref(useImageUrl("Color", "yansai", "jpg"));
const images = ref([
  useImageUrl("Color", "03", "jpg"),
  useImageUrl("Color", "04", "jpg"),
  useImageUrl("Color", "Illustration03", "jpg"),
  useImageUrl("Color", "kashandela", "jpg"),
  useImageUrl("Color", "summer", "jpg"),
  useImageUrl("Color", "swore", "jpg"),
  useImageUrl("Color", "yinghuang", "jpg"),
  useImageUrl("Color", "dehuang", "jpg"),
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
  width: 600px;
  height: auto;
}
.box {
  flex: 1 1 300px; /*  Stretching: */
  flex: 0 1 300px; /*  No stretching: */
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
