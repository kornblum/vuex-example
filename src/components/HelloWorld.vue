<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div v-for="(todo, idx) in getTodos" :key="idx">
      {{ todo }}
    </div>
    <button @click="addTodo('lernen')">Todo Lernen</button>
  </div>
</template>

<script>
/* eslint-disable */
import {mapGetters} from 'vuex';

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    this.$store.dispatch('GET_TODO');
  },
  computed: {
    ...mapGetters(['getTodos'])
  },
  methods: {
    addTodo(todo) {
      this.$store.dispatch('SAVE_TODO', todo);
    }
  }
};
/* eslint-disable */
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
