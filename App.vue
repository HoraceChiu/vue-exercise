<template>
  <div>
    <b-button size="sm" @click="toggle">{{getAlertButtonMessage}}</b-button>
    <b-input v-model="msg"/>
    <b-alert v-model="show" class="mt-3" dismissible @dismissed="dismissed">{{getAlertText}}</b-alert>
  </div>
</template>

<style>
body {
  padding: 1rem;
}
</style>

<script>
export default {
  data() {
    return {
      name: "BootstrapVue",
      show: true,
      msg: ""
    };
  },
  props: {
    message: ""
  },
  watch: {
    show(newVal) {
      console.log("Alert is now " + (newVal ? "visible" : "hidden"));
    }
  },
  methods: {
    toggle() {
      console.log("Toggle button clicked");
      this.show = !this.show;
    },
    dismissed() {
      console.log("Alert dismissed");
    }
  },
  computed: {
    // 使用计算字段去管理按钮上的文案, 方便管理
    getAlertButtonMessage() {
      return (this.show ? "Hide" : "Show") + "    Alert";
    },
    getAlertText() {
      return "Hello " + this.name + " !" + this.msg;
    }
  }
};
</script>