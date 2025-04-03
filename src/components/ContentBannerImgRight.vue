<script>
export default {
  name: "ContentBannerImgRight",
  props: {
    text: String,
  },
};
</script>
<template>
  <div class="ContentBannerContainer">
    <div class="ContentBannerText">
      {{ text }}
    </div>
    <div class="ContentBannerImg">
      <img src="https://picsum.photos/600/300" alt="Zufallsbild" />
    </div>
  </div>
</template>
<style scoped>
.ContentBannerContainer {
  width: 100%;
  display: flex;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 212, 255, 0.3) 100%
  );
  height: 300px;
  border-radius: 0 0 20px 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
}
img {
  width: 50%;
  object-fit: cover;
  border-radius: 0 0 20px 0px;
}

.ContentBannerImg {
  width: 40%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.ContentBannerImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.ContentBannerText {
  width: 60%;
  height: 100%;
}
</style>
