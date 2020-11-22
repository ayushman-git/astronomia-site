<template>
  <article>
    <div class="command-main">
      <h1>Command List</h1>
      <p>Every command starts with prefix <strong>"."</strong></p>
      <CommandList />
    </div>
  </article>
</template>

<script>
import CommandList from "./CommandList";
export default {
  name: "CommandContainer",
  components: {
    CommandList,
  },
};
</script>

<style scoped>
article {
  margin: 0;
  width: 100%;
  height: 800px;
  background-color: black;
  color: white;
}
.command-main {
  width: calc(100% - 5em);
  display: flex;
  flex-flow: column;
}
</style>