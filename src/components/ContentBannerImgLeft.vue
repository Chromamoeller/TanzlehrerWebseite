<script>
import Tanzpaar from "../assets/Tanzpaar.png";
export default {
  data() {
    return {
      Tanzpaar, // 🔁 Bild in data verfügbar machen
    };
  },
  name: "ContentBannerImgLeft",
  props: {
    text: String,
  },
};
</script>
<template>
  <div class="ContentBannerContainer">
    <div class="ContentBannerImg">
      <img src="https://picsum.photos/600/300" alt="Zufallsbild" />
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
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(0, 212, 255, 0.3) 100%
  );
  height: 300px;
  border-radius: 0 0 20px 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
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
  border-radius: 0 0 0 10px;
}

.ContentBannerImg img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
</style>
