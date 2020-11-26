<template>
  <div class="container">
    <Hero />
    <img src="../assets/curve.svg" />
    <div class="quote-container">
      <blockquote>
        “I looked and looked but I didn’t see God.” - Yuri Gagarin
      </blockquote>
    </div>
    <img
      src="../assets/curve_2.svg"
      style="vertical-align: bottom; margin-bottom: -2px"
      aria-hidden="true"
    />
    <CommandContainer id="command-container" />
    <div class="curve-three">
      <img src="../assets/curve_3.svg" aria-hidden="true" />
    </div>
    <footer>
      <div class="footer-container">
        <img src="../assets/profile.png" alt="astronomia profile" />
        <h2>
          You can help me by
          <a
            href="https://top.gg/bot/765063751208402944/vote"
            target="_blank"
            rel="noreferrer"
            ><span><u>voting</u></span></a
          >
          or
          <a
            href="https://github.com/ayushman-git/astronomia-bot"
            target="_blank"
            rel="noreferrer"
            ><span><u>contributing</u></span></a
          >.
        </h2>
      </div>
    </footer>
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
  font-size: clamp(1.8em, 2.6vw, 2.6vw);
  font-weight: 600;
  text-align: center;
  margin: 0 2em;
}
footer {
  width: 100%;
  background-color: black;
  height: 400px;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer-container {
  width: 80%;
  max-width: 800px;
  display: flex;
  justify-content: space-around;
  flex-flow: row wrap;
  align-items: center;
}
.footer-container h2 {
  margin: 2em;
  text-align: center;
}
footer a {
  color: #f13e3e;
}
footer img {
  height: 100px;
}
.curve-three {
  width: 100%;
  background-color: #ffe799;
  vertical-align: bottom;
  margin-bottom: -5px;
}
</style>
