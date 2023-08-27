<template>
  <v-row justify="center" align="center">
    <v-col>
      <v-card elevation="10">
        <InstallmentsBarChart />
      </v-card>
    </v-col>
    <v-col>
      <v-card elevation="10">
        <AmountBarChart />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import AmountBarChart from "~/components/charts/AmountBarChart.vue";
import InstallmentsBarChart from "~/components/charts/InstallmentsBarChart.vue";

export default {
  name: "IndexPage",
  title: "Home page",
  components: { AmountBarChart, InstallmentsBarChart },
};
</script>
