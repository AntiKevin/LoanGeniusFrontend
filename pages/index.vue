<template>
  <v-app>
    <navigation :color="color" :flat="flat" />
    <v-main class="pt-0">
      <home />
      <about />
      <download />
    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
  </v-app>
</template>

<style scoped>
.v-main {
  background-image: url("~@/static/img/bgMain.png");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

<script>
import about from "~/components/landingpage/AboutSection";
import download from "~/components/landingpage/DownloadSection";
import home from "~/components/landingpage/HomeSection";
import navigation from "~/components/landingpage/Navigation";

export default {
  name: "IndexPage",
  layout: "Landing",
  auth: false,

  components: {
    navigation,
    home,
    about,
    download,
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  created() {
    if (process.client) {
      const top = window.pageYOffset || 0;
      if (top <= 60) {
        this.color = "transparent";
        this.flat = true;
      }
    }
  },

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
