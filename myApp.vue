<template>
  <div>
    <p>
      <b-input v-model="topMsg"/>
    </p>
    <App :message="topMsg"></App>
    <App></App>
    <App></App>
  </div>
</template>

<script>
import App from "./App";
export default {
  data() {
    return {
      topMsg: "",
      name: "myApp",
      show: true
    };
  },
  components: {
    App: App
  }
};
</script>