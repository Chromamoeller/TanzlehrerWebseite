<script>
export default {
  name: "ContentBannerImgLeft",
  props: {
    text: String,
    img: String,
  },
};
</script>
<template>
  <div class="ContentBannerContainer">
    <div class="ContentBannerImg">
      <img :src="'img'" alt="Tanzpaar" />
    </div>
    <div class="ContentBannerText">
      <p>
        {{ text }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.ContentBannerContainer {
  width: 100%;
  display: flex;
  background-color: rgba(145, 224, 255, 0.486);
  height: 150px;
  border-radius: 0 0 20px 20px;
  margin-bottom: 10px;
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
