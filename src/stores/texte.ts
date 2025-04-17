import { defineStore } from "pinia";

export const useTexteStore = defineStore("texte", {
  state: () => ({
    text: "Hello Pinia ich bin nur ein Text",
    text2: "Lorem Ipsum Dolor What ever",
    myName: "Christian Möller",
    pictureLink: "https://picsum.photos/600/300",
  }),
});
