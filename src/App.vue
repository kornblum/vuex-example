<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to a Vuex-Example" />

    <div class="flex">
      <CheckoutForm />
      <BoxSummary />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import CheckoutForm from "./components/CheckoutForm.vue";
import BoxSummary from "./components/BoxSummary.vue";

export default {
  name: "app",
  components: {
    HelloWorld,
    CheckoutForm,
    BoxSummary
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.flex {
  display: flex;
  margin-top: 50px;
}

.flex > div {
  flex: 1;
}
</style>
