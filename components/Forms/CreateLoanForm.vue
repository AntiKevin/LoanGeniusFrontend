<template>
  <v-form @submit.prevent="submitForm" v-model="valid" class="px-10 py-10">
    <v-icon @click="$router.push('/dashboard/loans/details')" class="mb-5"
      >mdi-arrow-left</v-icon
    >
    <h1>Calcular Empréstimos</h1>
    <v-row cols="12" sm="8" md="8">
      <v-col>
        <v-text-field
          v-model="amount"
          :rules="rulesDecimalNumField"
          label="Valor"
          required
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="interest"
          :rules="rulesDecimalNumField"
          label="Taxa de Juros"
          required
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="installments"
          :rules="rulesDecimalNumField"
          label="Parcelas"
          required
        />
      </v-col>
    </v-row>
    <v-row>
      <v-btn
        :loading="loading"
        @click="calculateLoan"
        :disabled="!valid"
        class="mt-5"
        color="success"
        >calcular</v-btn
      >
      <v-btn :loading="loading" outlined class="mt-5 ml-2" color="success">{{
        loanCalculated.totalRepayment
          ? `total do empréstimo: ${loanCalculated.totalRepayment}`
          : "..."
      }}</v-btn>
    </v-row>
    <v-btn
      :loading="loading"
      :disabled="!valid"
      block
      type="submit"
      class="mt-10"
      color="primary"
    >
      Salvar
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: "Contratos",
  data() {
    return {
      amount: "",
      interest: "",
      installments: "",
      loading: false,
      valid: false,
      rulesDecimalNumField: [
        (value) => {
          const regex = /^\d+(\.\d{2})?$/;
          if (regex.test(value)) {
            return true; // O campo contém apenas dígitos
          }
          return "O campo deve conter apenas dígitos e não pode estar vazio.";
        },
      ],
    };
  },
  computed: {
    loanCalculated() {
      return this.$store.state.api.loan.calculatedLoan;
    },
  },
  methods: {
    async calculateLoan() {
      const dados = {
        amount: this.amount,
        interest: this.interest,
        installments: this.installments,
      };
      this.loading = true;
      try {
        this.$store.dispatch("api/loan/calculateLoan", dados);
        this.loading = false;
        this.$store.dispatch("components/alert/show", {
          message: "Valor total do empréstimo calculado com sucesso!",
          type: "success",
        });
      } catch (error) {
        this.$store.dispatch("components/alert/show", {
          message: "Erro ao calcular o valor",
          type: "error",
        });
        this.loading = false;
      }
    },
  },
};
</script>
