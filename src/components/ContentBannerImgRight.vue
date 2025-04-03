<script>
export default {
  name: "ContentBannerImgRight",
  props: {
    text: String,
    img: {
      type: String,
      required: true,
    },
  },
};
</script>
<template>
  <div class="ContentBannerContainer">
    <div class="ContentBannerText">
      {{ text }}
    </div>
    <div class="ContentBannerImg">
      <img :src="'img'" alt="Tanzpaar" />
    </div>
  </div>
</template>
<style scoped>
.ContentBannerContainer {
  width: 100%;
  display: flex;
  background-color: aqua;
  height: 150px;
  border-radius: 0 0 20px 20px;
  margin-bottom: 10px;
}
img {
  width: 50%;
  object-fit: cover;
  border-radius: 0 0 20px 20px;
}

.ContentBannerImg {
  width: 40%;
  height: 100%;
}
.ContentBannerText {
  width: 60%;
  height: 100%;
}
</style>
