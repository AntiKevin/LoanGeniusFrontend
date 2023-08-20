<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="4">
        <v-card elevation="18">
          <v-card-title class="text-center">
            <h4>Registre-se</h4>
          </v-card-title>
          <v-card-text>
            <v-form @submit.prevent="userLogin" v-model="valid">
              <v-text-field
                v-model="register.username"
                :rules="rules"
                label="Username"
                :disabled="loading"
                required
              ></v-text-field>
              <v-text-field
                v-model="register.password"
                :rules="rulesPassword"
                :disabled="loading"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-text-field
                :rules="[...rulesConfirmationPassword, confirmationPasswordRule]"
                :disabled="loading"
                label="Confirm Password"
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
            <nuxt-link to="/login">
              <p class="mt-5">Já possui uma conta? Faça seu Login</p>
            </nuxt-link>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Test",
  layout: "Auth",
  auth: false,
  data: () => ({
    register: {
      username: "",
      password: "",
      role: "ADMIN",
    },
    loading: false,
    valid: false,
    rules: [(value) => !!value || "Obrigatório."],
    rulesPassword: [
      (value) => !!value || "Obrigatório.",
      (value) => (value && value.length >= 8) || "min 8 caracteres",
    ],
    rulesConfirmationPassword: [(value) => !!value || "Por favor confirme sua senha"],
  }),
  computed: {
    confirmationPasswordRule() {
      return (value) => value === this.register.password || "As senhas não batem";
    },
  },
  methods: {
    async userLogin() {
      this.loading = true;
      const data = this.register;
      await this.$axios
        .post("/auth/register", data)
        .then(({}) => {
          this.$router.push("/login");
          this.$store.dispatch("components/alert/show", {
            message: "Conta de usuário criada com sucesso",
            type: "success",
          });
          this.loading = false;
        })
        .catch(({ response }) => {
          if (response) {
            this.$store.dispatch("components/alert/show", {
              message: `Erro ao registrar: ${response.data}`,
              type: "error",
            });
            this.loading = false;
          } else {
            this.$store.dispatch("components/alert/show", {
              message: "Erro desconhecido ao registrar",
              type: "error",
            });
            this.loading = false;
          }
        });
    },
  },
};
</script>
