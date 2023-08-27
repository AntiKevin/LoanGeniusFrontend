<template>
  <v-dialog v-model="modalOpen" max-width="500">
    <v-card>
      <v-card-title>
        <span class="headline">Tem certeza?</span>
      </v-card-title>
      <v-card-text>
        Ao remover esse item todos os dados presentes nele serão removidos!
      </v-card-text>
      <v-card-actions>
        <v-btn color="secondary" small @click="closeModal">Fechar</v-btn>
        <v-btn color="error" small @click="RemoveLoan">Remover</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    showModal: Boolean,
    id: String,
  },
  data() {
    return {
      modalOpen: this.showModal,
    };
  },
  watch: {
    showModal(newVal) {
      this.modalOpen = newVal;
    },
  },
  methods: {
    closeModal() {
      this.modalOpen = false;
      this.$emit("update:showModal", false);
    },
    async RemoveLoan() {
      try {
        await this.$store.dispatch("api/loan/deleteLoan", this.id);
        this.$router.push("/dashboard/loans/details");
        this.$store.dispatch("components/alert/show", {
          message: "Empréstimo removido com sucesso",
          type: "success",
        });
      } catch {
        this.$store.dispatch("components/alert/show", {
          message: "Erro ao remover o empréstimo",
          type: "error",
        });
      }
    },
  },
};
</script>
