<template>
  <div class="command-list-container">
    <h2>
      {{ command.keyword }} <span class="argument">{{ command.argument }}</span>
    </h2>
    <p><strong>Description - </strong>{{ command.description }}</p>
    <p class="shorthand" v-if="command.shorthands">
      <strong>Shorthands - </strong>{{ command.shorthands }}
    </p>
    <p><strong>Example - </strong>{{ command.example }}</p>
  </div>
</template>

<script>
export default {
  name: "CommandList",
  props: {
    command: {
      type: Object,
    },
  },
};
</script>

<style scoped>
.command-list-container {
  padding: 2em;
  background-color: #252525;
  border-radius: 15px;
  transition: all 0.4s ease;
  user-select: none;
  color: rgb(175, 175, 175);
}
.command-list-container:hover {
  background-color: rgb(248, 184, 89);
  color: rgb(0, 0, 0);
}
.argument {
  color: #f13e3e;
}
</style>