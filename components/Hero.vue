<template>
  <main>
    <div class="hero-container">
      <img class="profile-img" src="../assets/profile.png" />
      <h1>Astronomia</h1>
      <p class="tagline">
        An open source Discord bot for <strong>Space Enthusiasts.</strong>
      </p>
      <div class="button-holder">
        <button class="add-btn" @click="openURL">
          <img class="discord-logo" src="../assets/discord.png" />
          <p>Add to Discord</p>
        </button>
        <button class="secondary-btn">Commands</button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "Hero",
  methods: {
    openURL() {
      window.open("https://top.gg/bot/765063751208402944/invite", "_blank", "noopener");
    }
  }
};
</script>

<style scoped>
main {
  color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}
.hero-container {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.button-holder {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 3em;
}
button {
  border-radius: 30px;
  outline: none;
  border: none;
  padding: 0.8em;
  font-size: 1rem;
  cursor: pointer;
  margin: 0em 1em;
}
.discord-logo {
  height: 2rem;
  margin-right: 0.4em;
}
.add-btn {
  position: relative;
  background: linear-gradient(45deg, #f0386b, #a01940);
  display: flex;
  align-items: center;
  transition: 0.5s all ease;
  z-index: 1;
}
.add-btn::before {
  position: absolute;
  content: "";
  background: linear-gradient(-45deg, #f0386b, #a01940);
  border-radius: 30px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  transition: opacity 0.2s linear;
  opacity: 0;
}
.add-btn:hover::before {
  opacity: 1;
}
.secondary-btn {
  background-color: transparent;
  border: 3px solid #f0386b;
  color: #f0386b;
}
.profile-img {
  height: 120px;
  margin-bottom: 1.5em;
}
h1 {
  margin: 0.2em 0em;
  font-size: 3em;
}
.tagline {
  font-size: 1.5em;
  font-weight: 300;
}
</style>