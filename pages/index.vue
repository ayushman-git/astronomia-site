<template>
  <div class="container">
    <Hero />
    <img src="../assets/curve.svg" />
    <div class="quote-container">
      <blockquote>“I looked and looked but I didn’t see God.” - Yuri Gagarin</blockquote>
    </div>
    <img src="../assets/curve_2.svg" style="vertical-align: bottom; margin-bottom: -2px" />
    <CommandContainer />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import CommandContainer from "../components/CommandContainer";
export default {
  name: "App",
  components: {
    Hero,
  },
};
</script>

<style scoped>
.quote-container {
  margin: 20em 0em;
  display: flex;
  justify-content: center;
}
blockquote {
  font-family: "Dancing Script";
  font-size: 2em;
  font-weight: 600;
}
</style>
