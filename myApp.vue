<template>
  <div>
    <p>
      <b-input v-model="topMsg" placeholder="父级输入框内容"/>
    </p>

    <App v-for="(item,index) in list" :key="index" v-bind:index="item" v-bind:message="topMsg"></App>
    <!-- <App v-bind:message="topMsg"></App>
    <App v-bind:message="topMsg"></App>-->
  </div>
</template>

<script>
import App from "./App";
export default {
  data() {
    return {
      topMsg: "",
      name: "myApp",
      show: true,
      list: [1, 2, 3, 4, 5, 6]
    };
  },
  components: {
    App: App
  }
};
</script>