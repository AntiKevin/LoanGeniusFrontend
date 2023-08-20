<template>
  <v-app dark>
    <Nuxt />
    <alert-box />
    <v-footer absolute app dark>
      <span>Kevin Rodrigues &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AlertBox from "~/components/Alerts/AlertBox";
export default {
  name: "Test",
  components: {
    AlertBox,
  },
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
