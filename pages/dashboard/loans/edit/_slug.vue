<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="8">
      <v-card elevation="24">
        <EditLoanForm :id="slug" />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import EditLoanForm from "~/components/Forms/EditLoanForm.vue";

export default {
  async asyncData({ params }) {
    const slug = params.slug;
    return { slug };
  },
  components: {
    EditLoanForm,
  },
};
</script>
