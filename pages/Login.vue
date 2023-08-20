<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card elevation="18">
          <v-card-title class="text-center">
            <h4>Login</h4>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="userLogin" v-model="valid">
              <v-text-field
                v-model="login.username"
                :rules="rules"
                :disabled="loading"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="login.password"
                :rules="rulesPassword"
                :disabled="loading"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn
                type="submit"
                color="primary"
                :loading="loading"
                :disabled="!valid"
                block
                >Login</v-btn
              >
            </v-form>
            <nuxt-link to="/register">
              <p class="mt-5">Não possui uma conta? Registre-se</p>
            </nuxt-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: "Auth",
  data: () => ({
    login: {
      username: "",
      password: "",
    },
    loading: false,
    valid: false,
    rules: [(value) => !!value || "Required."],
    rulesPassword: [
      (value) => !!value || "Required.",
      (value) => (value && value.length >= 8) || "min 8 caracteres",
    ],
  }),
  methods: {
    async userLogin() {
      this.loading = true;
      try {
        await this.$auth.loginWith("local", { data: this.login });
        this.$router.push("/dashboard");
        this.loading = false;
        this.$store.dispatch("components/alert/show", {
          message: "Login bem sucedido: Bem vindo ao LoanGenius!",
          type: "success",
        });
      } catch (err) {
        this.$store.dispatch("components/alert/show", {
          message: "Erro de login: Verifique seu usuário e senha",
          type: "error",
        });
        this.loading = false;
      }
    },
  },
};
</script>
