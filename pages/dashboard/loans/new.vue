<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card elevation="24">
        <CreateLoanForm />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import CreateLoanForm from "~/components/Forms/CreateLoanForm.vue";

export default {
  components: {
    CreateLoanForm,
  },
};
</script>
