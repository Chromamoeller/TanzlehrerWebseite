<script>
import Tanzpaar from "../assets/Tanzpaar.png";
import ContentBannerImgLeft from "./ContentBannerImgLeft.vue";
import ContentBannerImgRight from "./ContentBannerImgRight.vue";

export default {
  name: "Content",
  components: {
    ContentBannerImgLeft,
    ContentBannerImgRight,
  },
};
</script>
<template>
  <ContentBannerImgLeft text="Hier steht der Text" img="Tanzpaar.png" />
  <ContentBannerImgRight
    text="Hier steht der Text"
    img="../../public/Tanzpaar.png"
  />
</template>
<style scoped></style>
