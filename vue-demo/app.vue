<template>
    <div>
        <v-title title="Vue Component"></v-title>
        <v-button @click="handleClick">Click</v-button>
        <p>
            <img src="./images/Vue.js_Logo.svg.png" alt="">
        </p>
    </div>
</template>
<script>
import vTitle from "./title.vue";
import vButton from "./button.vue";
export default {
  components: {
    vTitle,
    vButton
  },
  methods: {
    handleClick(e) {
      console.log(e);
    }
  }
};
</script>
<style scoped>
div {
  color: #f60;
  font-size: 24px;
}
</style>