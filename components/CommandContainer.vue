<template>
  <article>
    <div class="command-main">
      <h1>Commands List</h1>
      <p>
        Universe started from a dot <strong>"."</strong> and thats our prefix
      </p>
      <div class="command-list-grid">
        <CommandList
          v-for="command in commands"
          :key="command.keyword"
          :command="command"
        />
      </div>
      <div class="extra-features">
        <p>
          For regular news and other features create a text channel with name
          <strong>astronomia</strong> on your server.
        </p>
      </div>
    </div>
  </article>
</template>

<script>
import CommandList from "./CommandList";
import importedCommands from "../assets/commands";
export default {
  name: "CommandContainer",
  components: {
    CommandList,
  },
  data() {
    return {
      commands: importedCommands,
    };
  },
};
</script>

<style scoped>
article {
  margin: 0;
  width: 100%;
  background-color: #ffe799;
  display: flex;
  justify-content: center;
}
.command-main {
  width: 80%;
  max-width: 1000px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding-bottom: 14em;
  padding-top: 4em;
}
.command-list-grid {
  margin-top: 3em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2em;
}
.extra-features {
  text-align: center;
  margin-top: 2em;
  padding: 2em;
  background-color: #f13e3e;
  border-radius: 15px;
  width: 100%;
  transition: all 0.4s ease;
  user-select: none;
  color: rgb(0, 0, 0);
}
.extra-features > p {
  z-index: 2;
  font-size: 1.2em;
}
</style>