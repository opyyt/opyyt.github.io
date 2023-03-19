<template>
  <div class="mian">
    <van-swipe
      style="height: 800px"
      vertical
      :show-indicators="false"
      touchable
    >
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon1" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon2" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon3" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon4" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon5" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon6" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon7" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon8" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon9" />
      </van-swipe-item>
      <van-swipe-item>
        <img style="width: '100%'" :src="homeIcon10" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script setup>
// import useImageUrl from "../utils/useImageUrl.js";
// console.log(useImageUrl);
import homeIcon from "../assets/images/1008566138_6927679c8a.jpg";
import homeIcon1 from "../assets/images/1022552002_2b93faf9e7_n.jpg";
import homeIcon2 from "../assets/images/1022552036_67d33d5bd8_n.jpg";
import homeIcon3 from "../assets/images/10386503264_e05387e1f7_m.jpg";
import homeIcon4 from "../assets/images/10386522775_4f8c616999_m.jpg";
import homeIcon5 from "../assets/images/10386525005_fd0b7d6c55_n.jpg";
import homeIcon6 from "../assets/images/10386525695_2c38fea555_n.jpg";
import homeIcon7 from "../assets/images/10386540106_1431e73086_m.jpg";
import homeIcon8 from "../assets/images//10386540696_0a95ee53a8_n.jpg";
import homeIcon9 from "../assets/images/1043442695_4556c4c13d_n.jpg";
import homeIcon10 from "../assets/images/1044296388_912143e1d4.jpg";
</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
