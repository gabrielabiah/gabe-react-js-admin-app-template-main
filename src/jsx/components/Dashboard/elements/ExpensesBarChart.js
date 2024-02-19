import React from "react";

import ReactApexChart from "react-apexcharts";


const   series = [
    {
        name: 'Running',
        data: [40, 80, 70],            
    }, 
    {
      name: 'Cycling',
      data: [60, 30, 70]
    },         
];
const  options = {
    chart: {
      type: "bar",
      height: 120,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        orizontal: false,
        columnWidth: '100%',
        endingShape: "rounded",
        borderRadius: 8,            
      },
    },
    states: {
        hover: {
          filter: 'none',
        }
    },
    colors:['#FFFFFF', '#222B40'],
    dataLabels: {
        enabled: false,
        offsetY: -30
    },
      
    legend: {
        show: false,
        fontSize: '12px',
        labels: {
            colors: '#000000',                  
        },
        markers: {
            width: 18,
            height: 18,
            strokeWidth: 8,
            strokeColor: '#fff',
            fillColors: undefined,
            radius: 12,	
        }
    },
    stroke: {
        show: true,
        width:14,
        curve: 'smooth',
        lineCap: 'round',
        colors: ['transparent']
      },
      grid: {
          show: false,
          xaxis: {
              lines: {
                  show: false,
              }
          },
           yaxis: {
                  lines: {
                      show: false
                  }
              },  				
      },
      xaxis: {
        categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY'],
        labels: {
            show: false,
            style: {
                colors: '#A5AAB4',
                fontSize: '14px',
                fontWeight: '500',
                fontFamily: 'poppins',
                cssClass: 'apexcharts-xaxis-label',
            },
        },
        crosshairs: {
            show: false,
        },
        axisBorder: {
            show: false,
        },
        axisTicks: {
            show: false,
        }, 			
    },
    yaxis: {
        labels: {
        show: false,
            offsetX:-16,
           style: {
              colors: '#000000',
              fontSize: '13px',
               fontFamily: 'poppins',
              fontWeight: 100,
              cssClass: 'apexcharts-xaxis-label',
          },
      },
    },
  
} 
const  RevenueChart = () => {
    
    
    return (
        <div id="expensesChart" className="chartBar">
            <ReactApexChart
                options={options}
                series={series}
                type="bar"
                height={120}
            />
        </div>
    );
  
}
export default RevenueChart;
