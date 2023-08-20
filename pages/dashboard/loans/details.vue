<template>
  <v-container>
    <LoanTable />
  </v-container>
</template>

<script>
import LoanTable from "~/components/Tables/LoanTable.vue";

export default {
  name: "Details",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
  components: { LoanTable },
};
</script>

<style lang="scss" scoped></style>
