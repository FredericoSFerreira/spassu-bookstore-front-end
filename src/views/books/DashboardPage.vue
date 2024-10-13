<template>
  <div>
    <b-row>
      <b-col lg="4">
        <b-card no-body>
          <b-card-body>
            <div class="d-flex justify-content-between">
              <div class="bg-soft-primary rounded p-3">
                <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M8.9 2H15.07C17.78 2 19.97 3.07 20 5.79V20.97C20 21.14 19.96 21.31 19.88 21.46C19.75 21.7 19.53 21.88 19.26 21.96C19 22.04 18.71 22 18.47 21.86L11.99 18.62L5.5 21.86C5.351 21.939 5.18 21.99 5.01 21.99C4.45 21.99 4 21.53 4 20.97V5.79C4 3.07 6.2 2 8.9 2ZM8.22 9.62H15.75C16.18 9.62 16.53 9.269 16.53 8.83C16.53 8.39 16.18 8.04 15.75 8.04H8.22C7.79 8.04 7.44 8.39 7.44 8.83C7.44 9.269 7.79 9.62 8.22 9.62Z"
                        fill="currentColor"></path>
                </svg>
              </div>
              <div>
              </div>
            </div>
            <div class="text-center">
              <h2>
                <Vue3autocounter ref="counter" :startAmount="0" :endAmount="payloadDash.livros" />
              </h2>
              <div>
                <span>Livros cadastrados</span>
              </div>
            </div>
          </b-card-body>
          <apexchart height="80" type="area" :series="chart1.series" :options="chart1.options" />
        </b-card>
      </b-col>

      <b-col lg="4">
        <b-card no-body>
          <b-card-body>
            <div class="d-flex justify-content-between">
              <div class="bg-soft-primary rounded p-3">
                <svg width="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M14.2124 7.76241C14.2124 10.4062 12.0489 12.5248 9.34933 12.5248C6.6507 12.5248 4.48631 10.4062 4.48631 7.76241C4.48631 5.11865 6.6507 3 9.34933 3C12.0489 3 14.2124 5.11865 14.2124 7.76241ZM2 17.9174C2 15.47 5.38553 14.8577 9.34933 14.8577C13.3347 14.8577 16.6987 15.4911 16.6987 17.9404C16.6987 20.3877 13.3131 21 9.34933 21C5.364 21 2 20.3666 2 17.9174ZM16.1734 7.84875C16.1734 9.19506 15.7605 10.4513 15.0364 11.4948C14.9611 11.6021 15.0276 11.7468 15.1587 11.7698C15.3407 11.7995 15.5276 11.8177 15.7184 11.8216C17.6167 11.8704 19.3202 10.6736 19.7908 8.87118C20.4885 6.19676 18.4415 3.79543 15.8339 3.79543C15.5511 3.79543 15.2801 3.82418 15.0159 3.87688C14.9797 3.88454 14.9405 3.90179 14.921 3.93246C14.8955 3.97174 14.9141 4.02253 14.9396 4.05607C15.7233 5.13216 16.1734 6.44206 16.1734 7.84875ZM19.3173 13.7023C20.5932 13.9466 21.4317 14.444 21.7791 15.1694C22.0736 15.7635 22.0736 16.4534 21.7791 17.0475C21.2478 18.1705 19.5335 18.5318 18.8672 18.6247C18.7292 18.6439 18.6186 18.5289 18.6333 18.3928C18.9738 15.2805 16.2664 13.8048 15.5658 13.4656C15.5364 13.4493 15.5296 13.4263 15.5325 13.411C15.5345 13.4014 15.5472 13.3861 15.5697 13.3832C17.0854 13.3545 18.7155 13.5586 19.3173 13.7023Z"
                        fill="currentColor"></path>
                </svg>
              </div>
              <div>
              </div>
            </div>
            <div class="text-center">
              <h2>
                <Vue3autocounter ref="counter" :startAmount="0" :endAmount="payloadDash.autores" />
              </h2>
              <div>
                <span>Autores cadastrados</span>
              </div>
            </div>
          </b-card-body>
          <apexchart height="80" type="area" :series="chart1.series" :options="chart1.options" />
        </b-card>
      </b-col>
      <b-col lg="4">
        <b-card no-body>
          <b-card-body>
            <div class="d-flex justify-content-between">
              <div class="bg-soft-primary rounded p-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div>
              </div>
            </div>
            <div class="text-center">
              <h2>
                <Vue3autocounter ref="counter" :startAmount="0" :endAmount="payloadDash.assunto" />
              </h2>
              <div>
                <span>Assuntos cadastrados</span>
              </div>
            </div>
          </b-card-body>
          <apexchart height="80" type="area" :series="chart1.series" :options="chart1.options" />
        </b-card>
      </b-col>
    </b-row>
    <b-row>
      <div class="col-md-6 col-xl-6">
        <div class="overflow-hidden card aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
          <div class="flex-wrap card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="mb-2 card-title">Autores</h4>
              <p class="mb-0">
                <svg class="me-2 text-primary" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                TOP 5 Autores com mais livros
              </p>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <b-table id="my-table" :items="payloadDash.autores_mais_livros" :fields="columnsAutores" hover
                       responsive="sm" show-empty
                       :sticky-header=true small>
              </b-table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-6">
        <div class="overflow-hidden card aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
          <div class="flex-wrap card-header d-flex justify-content-between">
            <div class="header-title">
              <h4 class="mb-2 card-title">Livros</h4>
              <p class="mb-0">
                <svg class="me-2 text-primary" width="24" height="24" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                </svg>
                TOP 5 livros mais caros
              </p>
            </div>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <b-table id="my-table" :items="payloadDash.livros_mais_caros" :fields="columnsLivros" hover
                       responsive="sm" show-empty
                       :sticky-header=true small>

                <template #cell(valor)="row">
                  R$ {{ row.item.valor }}
                </template>

              </b-table>
            </div>
          </div>
        </div>
      </div>
    </b-row>

  </div>
</template>
<script>
import Vue3autocounter from 'vue3-autocounter'

export default {
  components: {
    Vue3autocounter
  },
  name: 'WidgetChart',
  mounted() {
    this.getDashboard()
  },
  methods: {
    getDashboard() {
      this.$axios
        .get(`/dashboard`)
        .then(response => {
          console.log(response.data)
          this.payloadDash = response.data
        })
        .catch(error => {
          console.error(error)
        })
    }
  },
  data() {
    return {
      payloadDash: {},
      columnsLivros: [
        { key: 'titulo', label: 'Titulo', sortable: false },
        { key: 'valor', label: 'Valor' }
      ],
      columnsAutores: [
        { key: 'nome', label: 'Autor', sortable: false },
        { key: 'qtd', label: 'Quantidade de livros' }
      ],
      chart1: {
        series: [
          {
            name: 'series1',
            data: [60, 15, 50, 30, 70]
          }
        ],
        options: {
          chart: {
            height: 80,
            type: 'area',
            sparkline: {
              enabled: true
            },
            group: 'sparklines'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 3,
            curve: 'smooth'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.5,
              opacityTo: 0
            }
          },
          colors: ['#344ed1'],
          xaxis: {
            type: 'datetime',
            categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
            enabled: false
          }
        }
      },
      chart2: {
        series: [
          {
            name: 'series1',
            data: [70, 40, 60, 30, 60]
          }
        ],
        options: {
          chart: {
            height: 80,
            type: 'area',
            sparkline: {
              enabled: true
            },
            group: 'sparklines'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 3,
            curve: 'smooth'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.5,
              opacityTo: 0
            }
          },
          colors: ['#d48918'],
          xaxis: {
            type: 'datetime',
            categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
            enabled: false
          }
        }
      },
      chart3: {
        series: [
          {
            name: 'series1',
            data: [60, 40, 60, 40, 70]
          }
        ],
        options: {
          chart: {
            height: 80,
            type: 'area',
            sparkline: {
              enabled: true
            },
            group: 'sparklines'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 3,
            curve: 'smooth'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.5,
              opacityTo: 0
            }
          },
          colors: ['#07750b'],
          xaxis: {
            type: 'datetime',
            categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            }
          }
        }
      },
      chart4: {
        series: [
          {
            name: 'series1',
            data: [75, 30, 60, 35, 60]
          }
        ],
        options: {
          chart: {
            height: 80,
            type: 'area',
            sparkline: {
              enabled: true
            },
            group: 'sparklines'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            width: 3,
            curve: 'smooth'
          },
          fill: {
            type: 'gradient',
            gradient: {
              shadeIntensity: 1,
              opacityFrom: 0.5,
              opacityTo: 0
            }
          },
          colors: ['#b91d12'],
          xaxis: {
            type: 'datetime',
            categories: ['2018-08-19T00:00:00', '2018-09-19T01:30:00', '2018-10-19T02:30:00', '2018-11-19T01:30:00', '2018-12-19T01:30:00']
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            }
          }
        }
      },
      box1: {
        series: [
          {
            name: 'Total sales',
            data: [10, 10, 35, 10]
          }
        ],
        options: {
          colors: ['#344ed1'],
          chart: {
            height: 50,
            width: 100,
            type: 'line',
            sparkline: {
              enabled: true
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: '',
            align: 'left'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar']
          }
        }
      },
      box2: {
        series: [
          {
            name: 'Sale Today',
            data: [10, 10, 35, 10]
          }
        ],
        options: {
          colors: ['#b91d12'],
          chart: {
            height: 50,
            width: 100,
            type: 'line',
            sparkline: {
              enabled: true
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: '',
            align: 'left'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar']
          }
        }
      },
      box3: {
        series: [
          {
            name: 'Total Classon',
            data: [10, 10, 35, 10]
          }
        ],
        options: {
          colors: ['#07750b'],
          chart: {
            height: 50,
            width: 100,
            type: 'line',
            sparkline: {
              enabled: true
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: '',
            align: 'left'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar']
          }
        }
      },
      box4: {
        series: [
          {
            name: 'Total Profit',
            data: [10, 10, 35, 10]
          }
        ],
        options: {
          colors: ['#d48918'],
          chart: {
            height: 50,
            width: 100,
            type: 'line',
            sparkline: {
              enabled: true
            },
            zoom: {
              enabled: false
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'straight'
          },
          title: {
            text: '',
            align: 'left'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar']
          }
        }
      },
      service1: {
        series: [
          {
            name: 'series1',
            data: [25, 30, 22, 29]
          }
        ],
        options: {
          colors: ['#344ed1'],
          chart: {
            height: 65,
            width: 140,
            type: 'area',
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z']
          },
          tooltip: {
            enabled: false
          }
        }
      },
      service2: {
        series: [
          {
            name: 'series1',
            data: [25, 23, 28, 26]
          }
        ],
        options: {
          colors: ['#b91d12'],
          chart: {
            height: 65,
            width: 140,
            type: 'area',
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z']
          },
          tooltip: {
            enabled: false
          }
        }
      },
      service3: {
        series: [
          {
            name: 'series1',
            data: [25, 23, 28, 23]
          }
        ],
        options: {
          colors: ['#d48918'],
          chart: {
            height: 65,
            width: 140,
            type: 'area',
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z']
          },
          tooltip: {
            enabled: false
          }
        }
      },
      service4: {
        series: [
          {
            name: 'series1',
            data: [25, 27, 24, 26]
          }
        ],
        options: {
          colors: ['#07750b'],
          chart: {
            height: 65,
            width: 140,
            type: 'area',
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z']
          },
          tooltip: {
            enabled: false
          }
        }
      },
      ethernet1: {
        series: [
          {
            name: 'Desktops',
            data: [5, 30, 6, 20, 5, 18]
          }
        ],
        options: {
          colors: ['#344ed1'],
          chart: {
            height: 60,
            width: 100,
            type: 'line',
            zoom: {
              enabled: false
            },
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 3
          },
          title: {
            text: '',
            align: 'left'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          },
          tooltip: {
            enabled: false
          }
        }
      },
      ethernet2: {
        series: [
          {
            name: 'Desktops',
            data: [5, 20, 4, 18, 3, 10]
          }
        ],
        options: {
          colors: ['#07750b'],
          chart: {
            height: 60,
            width: 100,
            type: 'line',
            zoom: {
              enabled: false
            },
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 3
          },
          title: {
            text: '',
            align: 'left'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          },
          tooltip: {
            enabled: false
          }
        }
      },
      ethernet3: {
        series: [
          {
            name: 'Desktops',
            data: [5, 20, 6, 18, 15, 4]
          }
        ],
        options: {
          colors: ['#b91d12'],
          chart: {
            height: 60,
            width: 100,
            type: 'line',
            zoom: {
              enabled: false
            },
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 3
          },
          title: {
            text: '',
            align: 'left'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          },
          tooltip: {
            enabled: false
          }
        }
      },
      ethernet4: {
        series: [
          {
            name: 'Desktops',
            data: [5, 15, 3, 20, 18, 13]
          }
        ],
        options: {
          colors: ['#d48918'],
          chart: {
            height: 60,
            width: 100,
            type: 'line',
            zoom: {
              enabled: false
            },
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth',
            width: 3
          },
          title: {
            text: '',
            align: 'left'
          },
          xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
          },
          tooltip: {
            enabled: false
          }
        }
      },
      chart9: {
        series: [
          {
            name: 'series1',
            data: [25, 27, 24, 26]
          }
        ],
        options: {
          colors: ['#07750b'],
          chart: {
            height: 65,
            width: 140,
            type: 'area',
            sparkline: {
              enabled: true
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: ['2018-09-19T00:00:00.000Z', '2018-09-19T01:30:00.000Z', '2018-09-19T02:30:00.000Z', '2018-09-19T03:30:00.000Z']
          },
          tooltip: {
            enabled: false
          }
        }
      },
      extrachart: {
        series: [
          {
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58]
          },
          {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105]
          },
          {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48]
          }
        ],
        options: {
          chart: {
            type: 'bar',
            height: 250,
            sparkline: {
              enabled: true
            }
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: '55%',
              borderRadius: 5
            }
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            show: true,
            width: 2,
            curve: 'smooth',
            colors: ['transparent']
          },
          xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct']
          },
          yaxis: {
            title: {
              text: '$ (thousands)'
            }
          },
          fill: {
            opacity: 1,
            colors: ['#344ed1', '#b91d12', '#d48918']
          },
          tooltip: {
            y: {
              formatter: function(val) {
                return '$ ' + val + ' thousands'
              }
            }
          }
        }
      }
    }
  }
}
</script>
