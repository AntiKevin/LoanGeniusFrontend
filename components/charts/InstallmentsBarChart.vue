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
    sortedPaymentsByMonth() {
      const loans = this.$store.state.api.loan.allLoans; // Assuming this is where your loans data is stored
      const paymentsByMonth = {};

      loans.forEach((loan) => {
        const createdAt = new Date(loan.createdAt);
        const totalPayments = loan.amount / loan.installments;

        for (let i = 0; i < loan.installments; i++) {
          const monthYear = `${createdAt.getMonth() + i + 1}-${createdAt.getFullYear()}`;
          if (!paymentsByMonth[monthYear]) {
            paymentsByMonth[monthYear] = 0;
          }
          paymentsByMonth[monthYear] += totalPayments;
        }
      });

      const sortedMonths = Object.keys(paymentsByMonth).sort();
      const sortedData = sortedMonths.map((monthYear) => ({
        monthYear,
        total: paymentsByMonth[monthYear],
      }));

      return sortedData;
    },
  },
  watch: {
    sortedPaymentsByMonth: {
      handler(sortedData) {
        this.chartData = {
          labels: sortedData.map((data) => data.monthYear),
          datasets: [
            {
              data: sortedData.map((data) => data.total),
              label: "Valor a Pagar por Mês (R$)",
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
