<template>
  <div class="alertDiv">
    <v-expand-x-transition>
      <v-alert v-if="show" :type="type" dismissible @input="hideAlert">
        {{ message }}
      </v-alert>
    </v-expand-x-transition>
  </div>
</template>

<script>
export default {
  computed: {
    message() {
      return this.$store.state.components.alert.message;
    },
    type() {
      return this.$store.state.components.alert.type;
    },
    show() {
      return this.$store.state.components.alert.show;
    },
  },
  methods: {
    hideAlert() {
      this.$store.commit("components/alert/hideAlert");
    },
  },
};
</script>
<style>
.alertDiv {
  position: absolute;
  bottom: 30px;
  right: 20px;
}
</style>
