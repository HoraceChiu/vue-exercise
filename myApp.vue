<template>
  <div>
    <App></App>
    <App></App>
  </div>
</template>

<script>
import App from "./App";
export default {
  data() {
    return {
      name: "myApp",
      show: true
    };
  },
  components: {
    App: App
  }
};
</script>