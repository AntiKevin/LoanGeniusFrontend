<template>
  <v-app dark>
    <Nuxt />
    <v-footer absolute app dark>
      <span>Kevin Rodrigues &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
