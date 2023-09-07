<template>
  <v-container class="mt-5">
    <v-toolbar dense>
      <v-toolbar-title>{{ navTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-toolbar>
    <v-data-table
      :headers="headers"
      :items="dados.sacDetailsList"
      :search="search"
      :loading="loading"
    >
      <template v-slot:item.principalPayment="{ item }">
        {{ formatCurrency(item.principalPayment) }}
      </template>
      <template v-slot:item.amortization="{ item }">
        {{ formatCurrency(item.amortization) }}
      </template>
      <template v-slot:item.interestPayment="{ item }">
        {{ formatCurrency(item.interestPayment) }}
      </template>
      <template v-slot:item.debitBalance="{ item }">
        {{ formatCurrency(item.debitBalance) }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: "contratos-table",
  data() {
    return {
      search: "",
      navTitle: "Tabela SAC",
      navAddLink: "new",
      loading: true,
      erro: false,
      headers: [
        { text: "Parcela", value: "installmentNumber" },
        { text: "Valor", value: "principalPayment" },
        { text: "Amortização", value: "amortization" },
        { text: "Juros", value: "interestPayment" },
        { text: "Saldo Devedor", value: "debitBalance" },
      ],
    };
  },
  computed: {
    dados() {
      return this.$store.state.api.loan.loan;
    },
  },
  props: {
    id: String,
  },
  async mounted() {
    await this.$store.dispatch("api/loan/fetchLoans").then((this.loading = false));
  },
  methods: {
    formatCurrency(value) {
      return `R$ ${value}`;
    },
  },
};
</script>
