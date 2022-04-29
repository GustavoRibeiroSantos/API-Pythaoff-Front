import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ApexCharts from 'apexcharts'


Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')

const axios = require('axios');

axios.get('http://127.0.0.1:8090/extrator/acessos').then(resp => {

    resp.data.forEach(item => {
        var x = [item.date, item.id]
        options.series[0].data.push(x)
        console.log(x)
    })
    console.log(resp.data);
});

var options = {
    series: [{
        name: "Acessos",
        data: []

    }],
    chart: {
        id: 'area-datetime',
        type: 'area',
        height: 350,
        zoom: {
            autoScaleYaxis: true
        }
    },
    annotations: {
        yaxis: [{
            y: 30,
            borderColor: '#999',
            label: {
                show: true,
                text: 'Support',
                style: {
                    color: "#fff",
                    background: '#00E396'
                }
            }
        }],
        xaxis: [{
            x: new Date(2012, 11, 14),
            borderColor: '#999',
            yAxisIndex: 0,
            label: {
                show: true,
                text: 'Rally',
                style: {
                    color: "#fff",
                    background: '#775DD0'
                }
            }
        }]
    },
    dataLabels: {
        enabled: true
    },
    markers: {
        size: 0,
        style: 'hollow',
    },
    xaxis: {
        type: 'datetime',
        min: new Date('25 Sep 2021').getTime(),
        tickAmount: 6,
    },
    tooltip: {
        x: {
            format: 'dd MMM yyyy'
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 100]
        }
    },
};

var chart = new ApexCharts(document.querySelector("#chart-timeline"), options);
chart.render();


var resetCssClasses = function(activeEl) {
    var els = document.querySelectorAll('button')
    Array.prototype.forEach.call(els, function(el) {
        el.classList.remove('active')
    })

    activeEl.target.classList.add('active')
}

document
    .querySelector('#one_month')
    .addEventListener('click', function(e) {
        resetCssClasses(e)

        chart.zoomX(
            new Date('28 Sep 2021').getTime(),
            new Date('27 Sep 2021').getTime()
        )
    })

document
    .querySelector('#six_months')
    .addEventListener('click', function(e) {
        resetCssClasses(e)

        chart.zoomX(
            new Date('27 Sep 2021').getTime(),
            new Date('27 Feb 2022').getTime()
        )
    })

document
    .querySelector('#one_year')
    .addEventListener('click', function(e) {
        resetCssClasses(e)
        chart.zoomX(
            new Date('27 Feb 2021').getTime(),
            new Date('27 Feb 2022').getTime()
        )
    })

document.querySelector('#ytd').addEventListener('click', function(e) {
    resetCssClasses(e)

    chart.zoomX(
        new Date('01 Sep 2021').getTime(),
        new Date('27 Sep 2021').getTime()
    )
})

document.querySelector('#all').addEventListener('click', function(e) {
    resetCssClasses(e)

    chart.zoomX(
        new Date('23 Jan 2021').getTime(),
        new Date('27 Feb 2022').getTime()
    )
})