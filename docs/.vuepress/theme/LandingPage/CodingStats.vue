<template>
  <v-col
    cols="12"
    sm="10"
    md="8"
    offset-sm="1"
    offset-md="2"
    class="pb-5 mt-5 mb-5"
  >
    <v-row v-scroll-reveal="{ delay: 250 }" class="mb-4" align-end>
      <h2 class="display-2 white--text">Coding Stats</h2>
    </v-row>
    <v-row v-scroll-reveal="{ delay: 250 }">
      <!-- Languages -->
      <v-col cols="12" md="12" lg="6">
        <v-card class="pa-3">
          <v-card-title primary-title>
            <h2>Languages</h2>
          </v-card-title>
          <v-card-text>
            <ClientOnly>
              <apexcharts :options="langOptions" :series="langSeries" />
            </ClientOnly>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <span class="text-caption">Over last 7 days</span>
          </v-card-actions>
        </v-card>
      </v-col>
      <!-- Activity -->
      <v-col cols="12" md="12" lg="6">
        <v-card class="pa-3">
          <v-card-title primary-title>
            <h2>Activity</h2>
          </v-card-title>
          <v-card-text class="ma-2">
            <ClientOnly>
              <apexcharts :options="caOptions" :series="caSeries" />
            </ClientOnly>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <span class="text-caption">Over last 7 days</span>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
import axios from "axios";
import jsonp from "jsonp";

function timeConvert(n) {
  var num = n;
  var hours = num / 60;
  var rhours = Math.floor(hours);
  var minutes = (hours - rhours) * 60;
  var rminutes = Math.round(minutes);
  var result = "";
  if (rhours > 0) result += `${rhours} hrs `;
  result += rminutes + " mins";
  return result;
}

function toFixed(num, fixed) {
    fixed = fixed || 0;
    fixed = Math.pow(10, fixed);
    return Math.floor(num * fixed) / fixed;
}

export default {
  name: "CodingStats",
  data: function() {
    return {
      langResponse: {},
      langSeries: [],
      langLabels: [],
      langSeriesOther: 0.0,
      caResponse: {},
      caSeries: [
        {
          name: "Coding Mins",
          data: [],
        },
      ],
      caLabels: [],
    };
  },
  computed: {
    caOptions() {
      return {
        chart: {
          type: "bar",
        },
        colors: ["#fdd835"],
        labels: this.caLabels,
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "bottom",
            },
          },
        },
        dataLabels: {
          enabled: true,
          textAnchor: "center",
          formatter: function(val, opt) {
            return `${timeConvert(val)} (${val})`;
          },
          dropShadow: {
            enabled: false,
            opacity: 0.5,
          },
          style: {
            colors: ["#0a0a0a"],
          },
          offsetX: 0,
        },
      };
    },
    langOptions() {
      return {
        chart: {
          type: "donut",
        },
        plotOptions: {
          pie: {
            donut: {
              size: "60%",
            },
          },
        },
        labels: this.langLabels,
        legend: {
          show: true,
          position: "bottom",
          itemMargin: {
            horizontal: 3,
            vertical: 2,
          },
        },
        dataLabels: {
          enabled: true,
          style: {
            fontSize: "16px",
          },
        },
      };
    },
  },
  beforeMount() {
    // Languages
    jsonp(
      "https://wakatime.com/share/@hyuwah/9235ab47-5904-489c-9a70-2c141cbe079b.json",
      null,
      (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          this.langResponse = data.data;
          this.langSeries = this.langResponse.map((item) => {
            if (item.percent > 2) {
              return item.percent;
            } else {
              this.langSeriesOther = toFixed(this.langSeriesOther+item.percent, 2);
              return -1;
            }
          });
          this.langSeries = this.langSeries.filter((n) => n != -1);
          this.langSeries.push(this.langSeriesOther);
          this.langLabels = this.langResponse.map((item) => item.name);
          this.langLabels = this.langLabels.slice(0, this.langSeries.length-1);
          this.langLabels.push("Other")
          // console.log(this.langSeries);
          // console.log(this.langLabels);
        }
      }
    );

    // Coding Activities
    jsonp(
      "https://wakatime.com/share/@hyuwah/0c9861c2-73ad-4f05-9c82-abe115b163e1.json",
      null,
      (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          this.caResponse = data.data.reverse();
          this.caSeries[0].data = this.caResponse.map((item) =>
            Math.round(item.grand_total.total_seconds / 60)
          );
          this.caLabels = this.caResponse.map((item) => item.range.text);
          // console.log(this.caSeries);
          // console.log(this.caLabels)
        }
      }
    );
  },
};
</script>
