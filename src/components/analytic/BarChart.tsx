import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";

HC_more(Highcharts);
HC_exporting(Highcharts);

const BarChart = () => {
  const options = {
    colors: ["rgba(41, 182, 246, 0.6)", "rgba(1, 87, 155, 0.9)"],
    chart: {
      type: "column",
      width: 350,
      height: 250,
      borderRadius: 12,
      backgroundColor: "rgb(255, 255, 255, 0.8)",
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false, // 내보내기 버튼 활성화 여부
    },
    title: {
      text: "주간별 통계",
      align: "center",
      style: {
        fontWeight: "semibold",
      },
    },
    xAxis: {
      categories: ["일", "월", "화", "수", "목", "금", "토"],
      crosshair: true,
      accessibility: {
        description: "Countries",
      },
    },
    yAxis: {
      min: 0,
      max: 40,
      title: {
        text: "사용자 수",
      },
    },
    tooltip: {
      valueSuffix: " (1000 MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.1,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "나를 추가한 사용자 수",
        data: [10, 20, 17, 6, 20, 15, 20],
      },
      {
        name: "내가 추가한 사용자 수",
        data: [7, 12, 5, 8, 20, 15, 17],
      },
    ],
  };

  return (
    <div className="rounded-lg w-[350px] h-[250px] bg-rgb(255, 255, 255, 1) shadow-md ">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BarChart;
