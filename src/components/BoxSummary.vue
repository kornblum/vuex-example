<template>
  <div>
    <h2>BoxSummary-Component</h2>
    <button :disabled="!getIsFormValid">Weiter</button>
    <div>isFormValid: {{ getIsFormValid }}</div>
  </div>
</template>

<script>
/* eslint-disable */
import {mapGetters} from 'vuex';

export default {
  name: "BoxSummary",
  computed: {
      ...mapGetters(['getIsFormValid'])
  }
};
/* eslint-disable */
</script>

<style scoped>
    button {
        background-color: #003764;
        color: #fff;
    }

    button:disabled {
        opacity: 0.4;
    }
</style>
