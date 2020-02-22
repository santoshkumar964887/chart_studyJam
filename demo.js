Highcharts.chart('container', {

    title: {
        text: 'It should show populations from the year 2005 – 2018'
    },

    subtitle: {
        text: 'Source: thesolarfoundation.com'
    },

    yAxis: {
        title: {
            text: 'Number of populations'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2005
        }
    },

    series: [{
        name: 'India',
        data: [1147609927,1165486291,1183209472,1200669765,1217726215,1234281170,1250288729,1265782790,1280846129,1295604184,1310152403,1324509589,1338658835,1352617328]
    }, {
        name: 'China',
        data: [1303720000,1311020000,	1317885000,	1324655000,	1331260000,	1337705000,	1344130000,	1350695000,	1357380000,	1364270000,	1371220000,	1378665000,	1386395000,	1392730000]
    },  {
        name: 'United States',
        data: [298379912,	301231207,	304093966,	306771529,	309326085,	311580009,	313874218,	316057727,	318386421,	320742673,	323071342,	325147121,	327167434,337167434]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


/********************** piechart****************************** */
Highcharts.chart('container1', {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            }
        }
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'India',
            y: 16.8,
            sliced: true,
            selected: true
        }, {
            name: 'China',
            y: 17.3
        }, {
            name: 'United States',
            y: 0.4064
        }, {
            name: 'other countries',
            y: 65.5
        }]
    }]
});
/********************************barchart********************************** */
Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Population in 2018'
    },
    subtitle: {
        text: 'Source: Greyatom'
    },
    xAxis: {
        type: 'category',
        labels: {
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Population in 2017: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['Pakistan', 21.2],
            ['Bulgaria', 0.70],
            ['Egypt', 9.8],
            ['Srilanka',0.21],
            ['Nigera', 19.5],
            ['South Africa', 5.7]
        ],
        dataLabels: {
            enabled: true,
            color: 'white',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});
/******************************************** */
Highcharts.chart('container3', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'World Population (All countries combined) for the years 2005-2018'
    },
    subtitle: {
        text: 'Greyatom'
    },
    xAxis: {
        type: 'category',
        labels: {
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'World Population from 2005 to 2018: <b>{point.y:.1f} millions</b>'
    },
    series: [{
        name: 'Population',
        data: [
            ['2005', 68362733890],
            ['2007', 70154352471],
            ['2008', 71064943108],
            ['2009', 71981554768],
            ['2010', 72899955224],
            ['2011', 73814823196],
            ['2012', 74745345076],
            ['2013', 75692396950],
            ['2014', 76648297996],
            ['2015', 77608276429],
            ['2016', 78576796964],
            ['2017', 79543069428],
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});