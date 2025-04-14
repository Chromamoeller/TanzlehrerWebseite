<script setup>
import Tanzpaar from "../assets/Tanzpaar.png";
import ContentBannerImgLeft from "./ContentBannerImgLeft.vue";
import ContentBannerImgRight from "./ContentBannerImgRight.vue";
import { useTexteStore } from "../stores/texte.ts";

const texteStore = useTexteStore();
</script>

<template>
  <ContentBannerImgLeft :text="texteStore.text" />

  <ContentBannerImgRight :text="texteStore.text2" />

  <ContentBannerImgLeft :text="texteStore.text" />

  <ContentBannerImgRight :text="texteStore.text2" />
</template>
