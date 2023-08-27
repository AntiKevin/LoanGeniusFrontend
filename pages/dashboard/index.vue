<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card elevation="10">
        <AmountBarChart />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AmountBarChart from "~/components/charts/AmountBarChart.vue";

export default {
  name: "IndexPage",
  title: "Home page",
  components: { AmountBarChart },
};
</script>
