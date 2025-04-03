<script>
export default {
  name: "ContentBannerImgRight",
};
</script>
<template>
  <div class="banner-wrapper">
    <div class="banner-track">
      <img
        v-for="n in 10"
        :key="n"
        :src="`https://picsum.photos/300/300?random=${n}`"
        alt="Bild"
      />
      <!-- Dupliziere die Bilder für Endlos-Loop -->
      <img
        v-for="n in 10"
        :key="'dup' + n"
        :src="`https://picsum.photos/300/300?random=${n}`"
        alt="Bild"
      />
    </div>
  </div>
</template>

<style scoped>
.banner-wrapper {
  width: 100%;
  overflow: hidden;
  background-color: #000000;
  height: 300px;
  position: relative;
}

.banner-track {
  display: flex;
  width: max-content;
  animation: scroll-left 100s linear infinite;
}

.banner-track img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  margin-right: 10px;
  flex-shrink: 0;
  border-radius: 8px;
}

@keyframes scroll-left {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
