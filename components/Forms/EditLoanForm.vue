<template>
  <v-form @submit.prevent="updateLoan" v-model="valid" class="px-10 py-10 mt-5">
    <v-icon @click="$router.push('/dashboard/loans/details')" class="mb-5"
      >mdi-arrow-left</v-icon
    >
    <h1>Calcular Empréstimos</h1>
    <v-row cols="12" sm="8" md="8">
      <v-col>
        <v-text-field
          v-model="loan.amount"
          :rules="rulesDecimalNumField"
          label="Valor"
          required
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="loan.interest"
          :rules="rulesDecimalNumField"
          label="Taxa de Juros"
          required
        />
      </v-col>
      <v-col>
        <v-text-field
          v-model="loan.installments"
          :rules="rulesDecimalNumField"
          label="Parcelas"
          required
        />
      </v-col>
    </v-row>
    <v-btn
      :loading="loading"
      :disabled="!valid"
      type="submit"
      class="mt-10"
      color="warning"
    >
      Atualizar
    </v-btn>
    <v-btn
      :loading="loading"
      :disabled="!valid"
      @click="openModal"
      class="mt-10"
      outlined
      color="error"
    >
      <v-icon>mdi-trash-can-outline</v-icon>
    </v-btn>
    <RemoveLoanModal :show-modal.sync="isModalOpen" :id="id" />
  </v-form>
</template>

<script>
import RemoveLoanModal from "../Modals/RemoveLoanModal.vue";
export default {
  name: "edit-loan",
  props: {
    id: String,
  },
  components: {
    RemoveLoanModal,
  },
  data() {
    return {
      loan: {
        amount: "",
        interest: "",
        installments: "",
      },
      isModalOpen: false,
      loading: false,
      valid: false,
      rulesDecimalNumField: [
        (value) => {
          const regex = /^\d+(\.\d*)?$/;
          if (regex.test(value)) {
            return true;
          }
          return "O campo não pode estar vazio e deve conter apenas dígitos, e pontos em caso de numeros decimais.";
        },
      ],
    };
  },
  computed: {
    loanUpdated() {
      return this.$store.state.api.loan.loan;
    },
  },
  async mounted() {
    await this.$store.dispatch("api/loan/fetchLoan", this.id);
    this.loan.amount = this.loanUpdated.amount;
    this.loan.interest = this.loanUpdated.interest;
    this.loan.installments = this.loanUpdated.installments;
  },
  methods: {
    async updateLoan() {
      const dados = this.loan;
      this.$store.commit("api/loan/defineLoan", dados);
      this.loading = true;
      try {
        this.$store.dispatch("api/loan/updateLoan", this.id);
        this.loading = false;
        this.$store.dispatch("components/alert/show", {
          message: "Empréstimo atualizado com sucesso",
          type: "success",
        });
      } catch (error) {
        this.$store.dispatch("components/alert/show", {
          message: "Erro ao atualizar o valor",
          type: "error",
        });
        this.loading = false;
      }
    },
    openModal() {
      this.isModalOpen = true;
    },
  },
};
</script>
