<template>
  <v-flex xs12 sm10 md8 offset-sm1 offset-md2 class="pb-5 mt-5 mb-5">
    <v-layout v-scroll-reveal.reset="{delay:250}" row class="mb-4" align-end>
      <h2 class="display-2 white--text">Coding Stats</h2>
    </v-layout>
    <!-- Pake Card? -->
    <v-flex xs12 md8 lg6 offset-md2 offset-lg3>
      <!-- Languages -->
      <apexcharts width="100%" type="pie" :options="langOptions" :series="langSeries"/>
      <apexcharts width="100%" type="donut" :options="langOptions" :series="langSeries"/>
      <apexcharts width="100%" type="bar" :options="chartOptions" :series="series" />
      <!-- <div>
        <div>{{this.langOptions.labels}} {{this.langResponse}}</div>
      </div> -->
    </v-flex>
  </v-flex>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import axios from "axios";

export default {
  name: "CodingStats",
  components: {
    apexcharts: VueApexCharts
  },
  data: function() {
    return {
      series: [{data:[]}],
      
      langResponse: {},
      langSeries: []
    };
  },
  computed: {
    langOptions(){
      return {
        labels: [],
        dataLabels: {
            dropShadow: {
              blur: 3,
              opacity: 0.8
            },
            formatter: function (val) {
              return val.toFixed(2) + "%"
            },
          },
      }
    },

    chartOptions() {
      return {
        plotOptions: {
            bar: {
              horizontal: true,
            }
          },
        xaxis: {
          categories: []
        }
      }
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
        this.langOptions.labels = this.langResponse.map(item => item.name);

        this.series[0].data = this.langSeries
        this.chartOptions.xaxis.categories = this.langOptions.labels
      })
      .catch(err => {
        this.langResponse = err;
      });
  }
};
</script>
