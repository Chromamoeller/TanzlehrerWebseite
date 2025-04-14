<script setup>
// Props definieren
defineProps({
  text: String,
});
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
  width: 95%;
  margin-left: auto;
  display: flex;
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 0, 140, 0.1) 100%
  );
  height: 40vh;
  border-radius: 20px 0 0 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  margin-bottom: 10px;
}

.ContentBannerText {
  width: 60%;
  height: 100%;
}

.ContentBannerImg {
  width: 40%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

img {
  width: 50%;
  object-fit: cover;
  border-radius: 0 0 20px 0px;
}

.ContentBannerImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
