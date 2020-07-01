<template>
  <v-col
    cols="12"
    sm="10"
    md="8"
    offset-sm="1"
    offset-md="2"
    class="pb-5 mt-5 mb-5"
  >
    <v-row class="mb-4" align-end>
      <h2 class="display-2 white--text">Coding Stats</h2>
    </v-row>
    <v-row>
      <!-- Languages -->
      <v-col cols="12" md="12" lg="6">
        <v-card>
          <v-card-title primary-title>
            <h2>Languages</h2>
          </v-card-title>
          <v-card-text>
            <ClientOnly>
              <apexcharts :options="chartOptions" :series="langSeries" />
            </ClientOnly>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Activity -->
      <v-col cols="12" md="12" lg="6">
        <v-card>
          <v-card-title primary-title>
            <h2>Activity</h2>
          </v-card-title>
          <v-card-text class="ma-2">
            <v-row v-for="caItem in caResponse" :key="caItem.range.date">
              <div>{{ caItem.range.text }} : {{ caItem.grand_total.text }}</div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import axios from "axios";

export default {
  name: "CodingStats",
  data: function() {
    return {
      langResponse: {},
      langSeries: [],
      langLabels: [],
      caResponse: {},
      caSeries: []
    };
  },
  computed: {
    langOptions() {
      return {
        labels: [],
        dataLabels: {
          formatter: function(val) {
            return val.toFixed(2) + "%";
          }
        }
      };
    },
    chartOptions() {
      return {
        chart: {
          type: "pie"
        },
        labels: this.langLabels,
          legend: {
          show: true,
          position: "bottom",
          itemMargin: {
            horizontal: 3,
            vertical: 2
          }
        },
      };
    }
  },
  beforeMount() {
    // Enable cors chrome addon dulu biar ga network error (tapi nanti ga bisa youtube)
    // Languages
    axios
      .get(
        "https://wakatime.com/share/@hyuwah/9235ab47-5904-489c-9a70-2c141cbe079b.json"
      )
      .then(res => {
        this.langResponse = res.data.data;
        this.langSeries = this.langResponse.map(item => item.percent);
        this.langLabels = this.langResponse.map(item => item.name);
      })
      .catch(err => {
        this.langResponse = err;
      });

    // Coding Activity
    axios
      .get(
        "https://wakatime.com/share/@hyuwah/0c9861c2-73ad-4f05-9c82-abe115b163e1.json"
      )
      .then(res => {
        this.caResponse = res.data.data.reverse();
      })
      .catch(err => {
        this.caResponse = err;
      });
  }
};
</script>
