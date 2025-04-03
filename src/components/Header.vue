<script>
export default {
  name: "Header",
};
</script>
<template>
  <header>
    <div class="logo-header">
      <div class="profilbild">
        <img src="../assets/Löwe.png" />
        <p>Christian Möller</p>
      </div>
    </div>
    <div class="nav-header">
      <nav>
        <a href="#" class="link-wrapper">
          <div class="card">Home</div>
        </a>
        <a href="#" class="link-wrapper">
          <div class="card">Über mich</div>
        </a>
        <a href="#" class="link-wrapper">
          <div class="card">Kurse</div>
        </a>
        <a href="#" class="link-wrapper">
          <div class="card">Bilder</div>
        </a>

        <!-- <a href="#">Home</a>
        <a href="#">Über Mich</a>
        <a href="#">Kurse</a>
        <a href="#">Bilder</a> -->
      </nav>
    </div>
  </header>
</template>
<style scoped>
header {
  width: 100%;
  padding: 0;
  height: 60px;
  margin: 0;
  background-color: rgb(184, 184, 184);
  display: flex;
}
.link-wrapper {
  display: flex; /* damit der <a> wie ein Block funktioniert */
  text-decoration: none; /* optional: Unterstreichung entfernen */
  justify-content: center; /* Text im <a> zentrieren */
  align-items: center; /* Text im <a> zentrieren */
  color: black; /* Farben vom Text nicht verändern */
}
.link-wrapper:hover {
  background-color: rgba(255, 255, 255, 0.144);
}
nav {
  display: flex;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
a {
  font-size: 0.8rem;
  color: black;
  text-decoration: none;
  height: 100%;
  width: 100%;
}
.logo-header {
  width: 40%;
  display: flex;
  align-items: center;
}
.nav-header {
  width: 60%;
}
.profilbild {
  display: flex;
  align-items: center;
  width: 50px;
  height: 50px;
  margin-left: 30px;
}
img {
  width: 100%;
  border-radius: 50%;
}
.profilbild > p {
  margin: 0;
  padding-left: 10px;
  color: black;
}
</style>
