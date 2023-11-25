import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import Highcharts3D from 'highcharts/highcharts-3d'
import HighchartsReact from 'highcharts-react-official'
// Initialize the 3D module for Highcharts
Highcharts3D(Highcharts)

type PieChartPropsType = {
  data: [string, number][]
}

const ThreeDPieChart: React.FC<PieChartPropsType> = ({ data }) => {
  const chartOptions: Highcharts.Options = {
    colors: [
      '#E1F5FE',
      '#03A9F4',
      '#81D4FA',
      '#01579B',
      '#B3E5FC',
      '#29B6F6',
      '#4FC3F7',
      '#039BE5',
      '#0288D1',
    ],
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false, // 내보내기 버튼 활성화 여부
    },
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45,
        beta: 0,
      },
      backgroundColor: 'rgb(2 35 84)',
      width: 700,
      height: 500,
    },
    title: {
      text: '직업 비율',
      style: {
        color: 'white',
      },
      align: 'center',
    },
    accessibility: {
      point: {
        valueSuffix: '%',
      },
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        depth: 85,
        dataLabels: {
          enabled: true,
          format: '{point.name}',
        },
      },
    },
    series: [
      {
        type: 'pie',
        name: 'Share',
        data: data,
      },
    ],
  }

  useEffect(() => {
    // Clean up the chart on unmount
    return () => {
      const chart = Highcharts.charts[0]
      if (chart) {
        chart.destroy()
      }
    }
  }, [])

  return <HighchartsReact style highcharts={Highcharts} options={chartOptions} />
}
export default ThreeDPieChart
