<template>
  <div>
    <h2>CheckoutForm-Component</h2>
    <input @input="checkForm" v-model="name" placeholder="Name" type="text" />
    <input @input="checkForm" v-model="password" placeholder="Passwort" type="password" />

    <div>isFormValid: {{ getIsFormValid }}</div>
  </div>
</template>

<script>
/* eslint-disable */
import {mapGetters} from 'vuex';

export default {
  name: "CheckoutForm",
  data() {
    return {
      name: '',
      password: ''
    }
  },
  mounted() {
  },
  computed: {
    ...mapGetters(['getIsFormValid'])
  },
  methods: {
    checkForm() {
      const isFormValid = this.name.length > 0 && this.password.length > 0;
      this.$store.dispatch('FORMVALID', isFormValid);
    }
  }
};
/* eslint-disable */
</script>

<style scoped>
</style>
