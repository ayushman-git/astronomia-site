<template>
  <div class="container">
    <Hero />
    <img src="../assets/curve.svg" />
    <div class="quote-container">
    <quote>“I looked and looked but I didn’t see God.” - Yuri Gagarin</quote>
    </div>
  </div>
</template>

<script>
import Hero from "../components/Hero";
export default {
  name: "App",
  components: {
    Hero
  }
};
</script>

<style scoped>
.quote-container {
  margin-top: 10em;
  display: flex;
  justify-content: center;
}
quote {
  font-size: 2em;
  font-weight: 600;
}
</style>
