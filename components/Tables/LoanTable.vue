<template>
  <v-container>
    <v-toolbar dense>
      <v-toolbar-title>{{ navTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field v-model="search" label="Pesquisar" single-line hide-details>
      </v-text-field>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <nuxt-link :to="navAddLink">
          <v-icon>mdi-plus-box</v-icon>
        </nuxt-link>
      </v-btn>
    </v-toolbar>
    <v-data-table :headers="headers" :items="dados" :search="search" :loading="loading">
      <template v-slot:item.createdAt="{ item }">
        {{ formatDate(item.createdAt) }}
      </template>
      <template v-slot:item.amount="{ item }">
        {{ formatCurrency(item.amount) }}
      </template>
      <template v-slot:item.totalRepayment="{ item }">
        {{ formatCurrency(item.totalRepayment) }}
      </template>
      <template v-slot:item.installments="{ item }">
        {{ formatInstallments(item.installments) }}
      </template>
      <template v-slot:item.interest="{ item }">
        {{ formatPercentage(item.interest) }}
      </template>
      <template v-slot:item.edit="{ item }">
        <v-btn icon small @click="showAlert()">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
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
      navTitle: "Empréstimos",
      navAddLink: "new",
      loading: true,
      erro: false,
      headers: [
        { text: "Valor", value: "amount" },
        { text: "Parcelas", value: "installments" },
        { text: "taxa de juros", value: "interest" },
        { text: "Data de criação", value: "createdAt" },
        { text: "Valor total", value: "totalRepayment" },
        { text: "", value: "edit", sortable: false },
      ],
    };
  },
  computed: {
    dados() {
      return this.$store.state.api.loan.allLoans;
    },
  },
  mounted() {
    this.$store.dispatch("api/loan/fetchLoans").then((this.loading = false));
  },
  methods: {
    formatDate(date) {
      return new Date(date).toLocaleDateString();
    },
    formatCurrency(value) {
      return `R$ ${value}`;
    },
    formatInstallments(value) {
      return `${value}x`;
    },
    formatPercentage(value) {
      return `${value}%`;
    },
    onRowClick(item) {
      this.$router.push(`/loan/details/${item.id}`);
    },
    showAlert() {
      this.$store.dispatch("components/alert/show", {
        message: "Temporariamente indisponível",
        type: "info",
      });
    },
  },
};
</script>
