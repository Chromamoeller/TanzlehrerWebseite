<script>
import ImgForBanner from "./ImgForBanner.vue";

export default {
  name: "Bilderbanner",
  components: {
    ImgForBanner,
  },
};
</script>
<template>
  <div class="banner">
    <ImgForBanner />
  </div>
</template>
<style scoped>
.banner {
  width: 100%;
  height: 300px;
  background-color: black;
  margin-bottom: 20px;
}
</style>
