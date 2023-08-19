<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card elevation="18">
          <v-card-title class="text-center">
            <h4>Login</h4>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="userLogin">
              <v-text-field
                v-model="login.username"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="login.password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary" block>Login</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "Auth",
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", { data: this.login });
        console.log(response);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
