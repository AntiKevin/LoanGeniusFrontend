<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      dark
    >
      <v-list-item v-if="!miniVariant">
        <v-list-item-content>
          <v-list-item-title class="text-h6" lg="hidden"
            ><img src="/loanicon.png" height="25rem" width="25rem" />
            LoanGenius
          </v-list-item-title>
          <v-list-item-subtitle> Calculadora de finanças </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="miniVariant">
        <v-list-item-content>
          <img src="/loanicon.png" height="25rem" width="25rem" style="max-width: 10rem"
        /></v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-if="!miniVariant" v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout"> Logout </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed dark dense app>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon>mdi-{{ `chevron-${miniVariant ? "right" : "left"}` }}</v-icon>
      </v-btn>
      <!--<v-toolbar-title>{{ title }}</v-toolbar-title>-->
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <alert-box />
    <v-footer :absolute="!fixed" app dark>
      <span>Kevin Rodrigues &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
import AlertBox from "~/components/Alerts/AlertBox";
export default {
  name: "DefaultLayout",
  components: {
    AlertBox,
  },
  data() {
    return {
      clipped: false,
      drawer: true,
      fixed: true,
      items: [
        {
          icon: "mdi-apps",
          title: "Dashboard",
          to: "/dashboard",
        },
        {
          icon: "mdi-cash-multiple",
          title: "Empréstimos",
          to: "/dashboard/loans/details",
        },
      ],
      miniVariant: true,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  methods: {
    async logout() {
      await this.$auth.logout();
      this.$router.push("/login");
    },
  },
};
</script>
