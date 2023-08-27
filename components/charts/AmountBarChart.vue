<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>

<script>
import {
BarElement,
CategoryScale,
Chart as ChartJS,
Legend,
LinearScale,
Title,
Tooltip,
} from "chart.js";
import { Bar } from "vue-chartjs";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {},
      chartOptions: {
        responsive: true,
      },
    };
  },
  async mounted() {
    await this.$store.dispatch("api/loan/fetchLoans");
  },
  computed: {
    sortedLoansByMonth() {
      const loans = this.$store.state.api.loan.allLoans; // Assuming this is where your loans data is stored
      const totalsByMonth = {};

      loans.forEach((loan) => {
        const createdAt = new Date(loan.createdAt);
        const monthYear = `${createdAt.getMonth() + 1}-${createdAt.getFullYear()}`;
        if (!totalsByMonth[monthYear]) {
          totalsByMonth[monthYear] = 0;
        }
        totalsByMonth[monthYear] += loan.amount;
      });

      const sortedMonths = Object.keys(totalsByMonth).sort();
      const sortedData = sortedMonths.map((monthYear) => ({
        monthYear,
        total: totalsByMonth[monthYear],
      }));

      return sortedData;
    },
  },
  watch: {
    sortedLoansByMonth: {
      handler(sortedData) {
        this.chartData = {
          labels: sortedData.map((data) => data.monthYear),
          datasets: [
            {
              data: sortedData.map((data) => data.total),
              label: "Total em empréstimos feitos por mês (R$)",
              backgroundColor: "#1976d2",
            },
          ],
        };
      },
      immediate: true,
    },
  },
};
</script>
