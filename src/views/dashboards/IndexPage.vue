<template>
  <div class="row">
    <div class="col-md-12 col-lg-12">
      <div class="row row-cols-1" data-aos="fade-up" data-aos-delay="800">
        <div class="d-slider1 overflow-hidden swiper-container-initialized swiper-container-horizontal swiper-container-pointer-events">
          <Swiper
            class="p-0 m-0 mb-2 swiper-wrapper list-inline"
            :modules="modules"
            :slide-per-view="4"
            :space-between="32"
            :breakpoints="{
              320: { slidesPerView: 1 },
              550: { slidesPerView: 2 },
              991: { slidesPerView: 3 },
              1400: { slidesPerView: 3 },
              1500: { slidesPerView: 4 },
              1920: { slidesPerView: 4 },
              2040: { slidesPerView: 7 },
              2440: { slidesPerView: 8 }
            }"
            :navigation="{
              nextEl: '#blog-tranding-next',
              prevEl: '#blog-tranding-prev'
            }">
            <SwiperSlide class="swiper-slide card card-slide" v-for="(item, index) in swiperItems" :key="index">
              <b-card-body>
                <div class="progress-widget">
                  <analytics-widget :index="index" :title="item.title" :size="item.size" :sub-title="item.subTitle" :value="item.value" :color="item.color" :is-profit="item.isProfit">
                    <svg class="card-slie-arrow" width="24" height="24px" viewBox="0 0 24 24" v-if="index % 2">
                      <path fill="currentColor" d="M19,6.41L17.59,5L7,15.59V9H5V19H15V17H8.41L19,6.41Z"></path>
                    </svg>
                    <svg class="card-slie-arrow" width="24" height="24" viewBox="0 0 24 24" v-else>
                      <path fill="currentColor" d="M5,17.59L15.59,7H9V5H19V15H17V8.41L6.41,19L5,17.59Z"></path>
                    </svg>
                  </analytics-widget>
                  <div class="progress-detail">
                    <p class="mb-2">{{ item.subTitle }}</p>
                    <h4 class="counter">{{ item.amount }}</h4>
                  </div>
                </div>
              </b-card-body>
            </SwiperSlide>
          </Swiper>
          <div class="swiper-button swiper-button-next" id="blog-tranding-next"></div>
          <div class="swiper-button swiper-button-prev" id="blog-tranding-prev"></div>
          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-lg-8">
      <div class="row">
        <div class="col-md-12" data-aos="fade-up" data-aos-delay="800">
          <div class="card aos-init aos-animate">
            <div class="flex-wrap card-header d-flex justify-content-between align-items-center">
              <div class="header-title">
                <h4 class="card-title">$855.8K</h4>
                <p class="mb-0">Gross Sales</p>
              </div>
              <div class="d-flex align-items-center align-self-center">
                <div class="d-flex align-items-center text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                    <g>
                      <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                    </g>
                  </svg>
                  <div class="ms-2">
                    <span class="text-secondary">Sales</span>
                  </div>
                </div>
                <div class="d-flex align-items-center ms-3 text-info">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" viewBox="0 0 24 24" fill="currentColor">
                    <g>
                      <circle cx="12" cy="12" r="8" fill="currentColor"></circle>
                    </g>
                  </svg>
                  <div class="ms-2">
                    <span class="text-secondary">Cost</span>
                  </div>
                </div>
              </div>
              <div class="dropdown">
                <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton22" data-bs-toggle="dropdown" aria-expanded="false"> This Week </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton22">
                  <li><a class="dropdown-item" href="#">This Week</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <apexchart :height="245" type="area" id="d-main" :options="grossSaleChart.options" :series="grossSaleChart.series" />
            </div>
          </div>
        </div>
        <div class="col-md-12 col-xl-6">
          <div class="card" data-aos="fade-up" data-aos-delay="1000">
            <div class="card-header d-flex justify-content-between flex-wrap">
              <div class="header-title">
                <h4 class="card-title">Earnings</h4>
              </div>
              <div class="dropdown">
                <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"> This Week </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                  <li><a class="dropdown-item" href="#">This Week</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between">
                <apexchart :height="230" type="radialBar" class="col-md-8 col-lg-8" id="myChart1" :options="earningChart.options" :series="earningChart.series" />
                <div class="d-grid gap col-md-4 col-lg-4">
                  <div class="d-flex align-items-start">
                    <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="#3a57e8">
                      <g>
                        <circle cx="12" cy="12" r="8" fill="#3a57e8"></circle>
                      </g>
                    </svg>
                    <div class="ms-3">
                      <span class="text-secondary">Fashion</span>
                      <h6>251K</h6>
                    </div>
                  </div>
                  <div class="d-flex align-items-start">
                    <svg class="mt-2" xmlns="http://www.w3.org/2000/svg" width="14" viewBox="0 0 24 24" fill="#4bc7d2">
                      <g>
                        <circle cx="12" cy="12" r="8" fill="#4bc7d2"></circle>
                      </g>
                    </svg>
                    <div class="ms-3">
                      <span class="text-secondary">Accessories</span>
                      <h6>176K</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-12 col-xl-6">
          <div class="card" data-aos="fade-up" data-aos-delay="1200">
            <div class="card-header d-flex justify-content-between flex-wrap">
              <div class="header-title">
                <h4 class="card-title">Conversions</h4>
              </div>
              <div class="dropdown">
                <a href="#" class="text-secondary dropdown-toggle" id="dropdownMenuButton3" data-bs-toggle="dropdown" aria-expanded="false"> This Week </a>
                <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton3">
                  <li><a class="dropdown-item" href="#">This Week</a></li>
                  <li><a class="dropdown-item" href="#">This Month</a></li>
                  <li><a class="dropdown-item" href="#">This Year</a></li>
                </ul>
              </div>
            </div>
            <div class="card-body">
              <apexchart :height="195" type="bar" class="dactivity1" id="dactivity1" :options="conversionChart.options" :series="conversionChart.series" />
            </div>
          </div>
        </div>
        <div class="col-md-12 col-xl-12">
          <div class="overflow-hidden card aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
            <div class="flex-wrap card-header d-flex justify-content-between">
              <div class="header-title">
                <h4 class="mb-2 card-title">Enterprise Clients</h4>
                <p class="mb-0">
                  <svg class="me-2 text-primary" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"></path>
                  </svg>
                  15 new acquired this month
                </p>
              </div>
              <div class="dropdown">
                <span class="dropdown-toggle" id="dropdownMenuButton7" data-bs-toggle="dropdown" aria-expanded="false" role="button"> </span>
                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton7">
                  <a class="dropdown-item" href="javascript:void(0);">Action</a>
                  <a class="dropdown-item" href="javascript:void(0);">Another action</a>
                  <a class="dropdown-item" href="javascript:void(0);">Something else here</a>
                </div>
              </div>
            </div>
            <div class="p-0 card-body">
              <div class="mt-4 table-responsive">
                <table id="basic-table" class="table mb-0 table-striped" role="grid">
                  <thead>
                    <tr>
                      <th>COMPANIES</th>
                      <th>CONTACTS</th>
                      <th>ORDER</th>
                      <th>COMPLETION</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="@/assets/images/shapes/01.png" alt="profile" />
                          <h6>Addidis Sportwear</h6>
                        </div>
                      </td>
                      <td>
                        <div class="iq-media-group iq-media-group-1">
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                          </a>
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                          </a>
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                          </a>
                        </div>
                      </td>
                      <td>$14,000</td>
                      <td>
                        <div class="mb-2 d-flex align-items-center">
                          <h6>60%</h6>
                        </div>
                        <div class="shadow-none progress bg-soft-primary w-100" style="height: 4px">
                          <div class="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%; transition: width 2s ease 0s"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="@/assets/images/shapes/05.png" alt="profile" />
                          <h6>Netflixer Platforms</h6>
                        </div>
                      </td>
                      <td>
                        <div class="iq-media-group iq-media-group-1">
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                          </a>
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                          </a>
                        </div>
                      </td>
                      <td>$30,000</td>
                      <td>
                        <div class="mb-2 d-flex align-items-center">
                          <h6>25%</h6>
                        </div>
                        <div class="shadow-none progress bg-soft-primary w-100" style="height: 4px">
                          <div class="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%; transition: width 2s ease 0s"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="@/assets/images/shapes/02.png" alt="profile" />
                          <h6>Shopifi Stores</h6>
                        </div>
                      </td>
                      <td>
                        <div class="iq-media-group iq-media-group-1">
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                          </a>
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">TP</div>
                          </a>
                        </div>
                      </td>
                      <td>$8,500</td>
                      <td>
                        <div class="mb-2 d-flex align-items-center">
                          <h6>100%</h6>
                        </div>
                        <div class="shadow-none progress bg-soft-success w-100" style="height: 4px">
                          <div class="progress-bar bg-success" data-toggle="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%; transition: width 2s ease 0s"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="@/assets/images/shapes/03.png" alt="profile" />
                          <h6>Bootstrap Technologies</h6>
                        </div>
                      </td>
                      <td>
                        <div class="iq-media-group iq-media-group-1">
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">SP</div>
                          </a>
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">PP</div>
                          </a>
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                          </a>
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">TP</div>
                          </a>
                        </div>
                      </td>
                      <td>$20,500</td>
                      <td>
                        <div class="mb-2 d-flex align-items-center">
                          <h6>100%</h6>
                        </div>
                        <div class="shadow-none progress bg-soft-success w-100" style="height: 4px">
                          <div class="progress-bar bg-success" data-toggle="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%; transition: width 2s ease 0s"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div class="d-flex align-items-center">
                          <img class="rounded bg-soft-primary img-fluid avatar-40 me-3" src="@/assets/images/shapes/04.png" alt="profile" />
                          <h6>Community First</h6>
                        </div>
                      </td>
                      <td>
                        <div class="iq-media-group iq-media-group-1">
                          <a href="#" class="iq-media-1">
                            <div class="icon iq-icon-box-3 rounded-pill">MM</div>
                          </a>
                        </div>
                      </td>
                      <td>$9,800</td>
                      <td>
                        <div class="mb-2 d-flex align-items-center">
                          <h6>75%</h6>
                        </div>
                        <div class="shadow-none progress bg-soft-primary w-100" style="height: 4px">
                          <div class="progress-bar bg-primary" data-toggle="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style="width: 75%; transition: width 2s ease 0s"></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-12 col-lg-4">
      <div class="row">
        <div class="col-md-12 col-lg-12">
          <div class="card aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
            <div class="flex-wrap card-header d-flex justify-content-between">
              <div class="header-title">
                <h4 class="mb-2 card-title">Activity overview</h4>
                <p class="mb-0">
                  <svg class="me-2" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#17904b" d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z"></path>
                  </svg>
                  16% this month
                </p>
              </div>
            </div>
            <div class="card-body">
              <div class="mb-2 d-flex profile-media align-items-top">
                <div class="mt-1 profile-dots-pills border-primary"></div>
                <div class="ms-4">
                  <h6 class="mb-1">$2400, Purchase</h6>
                  <span class="mb-0">11 JUL 8:10 PM</span>
                </div>
              </div>
              <div class="mb-2 d-flex profile-media align-items-top">
                <div class="mt-1 profile-dots-pills border-primary"></div>
                <div class="ms-4">
                  <h6 class="mb-1">New order #8744152</h6>
                  <span class="mb-0">11 JUL 11 PM</span>
                </div>
              </div>
              <div class="mb-2 d-flex profile-media align-items-top">
                <div class="mt-1 profile-dots-pills border-primary"></div>
                <div class="ms-4">
                  <h6 class="mb-1">Affiliate Payout</h6>
                  <span class="mb-0">11 JUL 7:64 PM</span>
                </div>
              </div>
              <div class="mb-2 d-flex profile-media align-items-top">
                <div class="mt-1 profile-dots-pills border-primary"></div>
                <div class="ms-4">
                  <h6 class="mb-1">New user added</h6>
                  <span class="mb-0">11 JUL 1:21 AM</span>
                </div>
              </div>
              <div class="mb-1 d-flex profile-media align-items-top">
                <div class="mt-1 profile-dots-pills border-primary"></div>
                <div class="ms-4">
                  <h6 class="mb-1">Product added</h6>
                  <span class="mb-0">11 JUL 4:50 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import AnalyticsWidget from '@/components/widgets/AnalyticsWidget.vue'
import AOS from 'aos'
export default {
  components: {
    Swiper,
    SwiperSlide,
    AnalyticsWidget
  },
  setup() {
    const modules = [Navigation]
    const grossSaleChart = ref({
      series: [
        {
          name: 'total',
          data: [94, 80, 94, 80, 94, 80, 94]
        },
        {
          name: 'pipline',
          data: [72, 60, 84, 60, 74, 60, 78]
        }
      ],
      options: {
        chart: {
          fontFamily: '"Inter", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
          height: 245,
          type: 'area',
          toolbar: {
            show: false
          },
          sparkline: {
            enabled: false
          }
        },
        colors: ['#3a57e8', '#079aa2'],
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 3
        },
        yaxis: {
          show: true,
          labels: {
            show: true,
            minWidth: 19,
            maxWidth: 19,
            style: {
              colors: '#8A92A6'
            },
            offsetX: -5
          }
        },
        legend: {
          show: false
        },
        xaxis: {
          labels: {
            minHeight: 22,
            maxHeight: 22,
            show: true,
            style: {
              colors: '#8A92A6'
            }
          },
          lines: {
            show: false // or just here to disable only x axis grids
          },
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug']
        },
        grid: {
          show: false
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            type: 'vertical',
            shadeIntensity: 0,
            gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
            inverseColors: true,
            opacityFrom: 0.4,
            opacityTo: 0.1,
            stops: [0, 50, 80],
            colors: ['#3a57e8', '#4bc7d2']
          }
        },
        tooltip: {
          enabled: true
        }
      }
    })
    const earningChart = ref({
      series: [55, 75],
      options: {
        chart: {
          height: 260,
          type: 'radialBar'
        },
        colors: ['#4bc7d2', '#3a57e8'],
        plotOptions: {
          radialBar: {
            hollow: {
              margin: 10,
              size: '50%'
            },
            track: {
              margin: 10,
              strokeWidth: '50%'
            },
            dataLabels: {
              show: false
            }
          }
        }
      }
    })
    const conversionChart = ref({
      series: [
        {
          name: 'Successful deals',
          data: [30, 50, 35, 60, 40, 60, 60, 30, 50, 35]
        },
        {
          name: 'Failed deals',
          data: [40, 50, 55, 50, 30, 80, 30, 40, 50, 55]
        }
      ],
      options: {
        chart: {
          type: 'bar',
          height: 230,
          stacked: true,
          toolbar: {
            show: false
          }
        },
        colors: ['#3a57e8', '#4bc7d2'],
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '28%',
            endingShape: 'rounded',
            borderRadius: 5
          }
        },
        legend: {
          show: false
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        xaxis: {
          categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S', 'M', 'T', 'W'],
          labels: {
            minHeight: 20,
            maxHeight: 20,
            style: {
              colors: '#8A92A6'
            }
          }
        },
        yaxis: {
          title: {
            text: ''
          },
          labels: {
            minWidth: 19,
            maxWidth: 19,
            style: {
              colors: '#8A92A6'
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return '$ ' + val + ' thousands'
            }
          }
        }
      }
    })
    const swiperItems = ref([
      {
        size: 90,
        amount: '560K',
        subTitle: 'Total Sales',
        color: 'primary'
      },
      {
        size: 80,
        amount: '185K',
        subTitle: 'Total Profit',
        color: 'info'
      },
      {
        size: 70,
        amount: '375K',
        subTitle: 'Total Cost',
        color: 'primary'
      },
      {
        size: 60,
        amount: '742K',
        subTitle: 'Revenue',
        color: 'info'
      },
      {
        size: 50,
        amount: '150K',
        subTitle: 'Net Income',
        color: 'primary'
      },
      {
        size: 40,
        amount: '4600',
        subTitle: 'Today',
        color: 'info'
      },
      {
        size: 30,
        amount: '11.2M',
        subTitle: 'Members',
        color: 'primary'
      }
    ])
    onMounted(() => {
      AOS.init({
        disable: function () {
          var maxWidth = 996
          return window.innerWidth < maxWidth
        },
        once: true,
        duration: 800
      })
    })
    return { modules, grossSaleChart, earningChart, conversionChart, swiperItems }
  }
}
</script>
