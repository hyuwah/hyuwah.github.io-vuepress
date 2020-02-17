<template>
  <v-flex xs12 sm10 md8 offset-sm1 offset-md2 class="pb-5 mt-5 mb-5">
    <v-layout v-scroll-reveal.reset="{ delay: 250 }" row class="mb-4" align-end>
      <h2 class="display-2 white--text">Coding Stats</h2>
    </v-layout>
    <!-- Pake Card? -->
    <v-layout row wrap>
      <!-- Languages -->
      <v-flex xs12 md8 lg5 ma-1>
        <v-card>
          <v-card-title primary-title>
            <h1>Languages</h1>
          </v-card-title>
          <v-card-text>
            <apexcharts
              type="radialBar"
              :options="chartOptions"
              :series="langSeries"
            />
          </v-card-text>
        </v-card>
      </v-flex>
      <!-- Activity -->
      <v-flex xs12 md8 lg5 ma-1>
        <v-card>
          <v-card-title primary-title>
            <h1>Activity</h1>
          </v-card-title>
          <v-card-text>
            <v-layout column text-xs-center>
              <v-flex
                xs4
                sm2
                v-for="caItem in caResponse"
                :key="caItem.range.date"
              >
                <div>
                  {{ caItem.range.text }} : {{ caItem.grand_total.text }}
                </div>
              </v-flex>
            </v-layout>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
          type: "radialBar"
        },
        plotOptions: {
          radialBar: {
            offsetY: 0,
            startAngle: 0,
            endAngle: 270,
            hollow: {
              margin: 5,
              size: "30%",
              background: "transparent",
              image: undefined
            },
            dataLabels: {
              name: {
                show: false
              },
              value: {
                show: false
              }
            }
          }
        },
        labels: this.langLabels,
        legend: {
          show: true,
          floating: true,
          fontSize: "14px",
          position: "left",
          offsetX: 64,
          offsetY: 0,
          labels: {
            useSeriesColors: true
          },
          markers: {
            size: 0
          },
          formatter: function(seriesName, opts) {
            return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex];
          },
          itemMargin: {
            horizontal: 3
          }
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                show: true,
                floating: true,
                fontSize: "9px",
                position: "left",
                offsetX: -10,
                offsetY: -20
              }
            }
          }
        ]
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
