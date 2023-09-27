import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";

HC_more(Highcharts);
HC_exporting(Highcharts);

const PieChart = () => {
  const options = {
    colors: [
      "rgba(147, 197, 253, 0.8)",
      "rgba(3, 169, 244, 0.8)",
      "rgba(225, 245, 254, 0.8)",
      "rgba(1, 87, 155, 0.8)",
      "rgba(179, 229, 252, 0.8)",
      "rgba(41, 182, 246, 0.8)",
      "rgba(79, 195, 247, 0.8)",
      "rgba(3, 155, 229, 0.8)",
      "rgba(2, 136, 209, 0.8)",
    ],
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      width: 350,
      height: 330,
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
      text: "내 관계별 통계",
      align: "center",
      style: {
        fontWeight: "semibold",
      },
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: false,
        },
        showInLegend: true,
      },
    },
    series: [
      {
        name: "Relationships",
        colorByPoint: true,
        data: [
          {
            name: "직장 동료",
            y: 74.77,
            sliced: true,
            selected: true,
          },
          {
            name: "대학 동기",
            y: 12.82,
          },
          {
            name: "지인",
            y: 4.63,
          },
          {
            name: "팀장님",
            y: 2.44,
          },
          {
            name: "대표님",
            y: 2.02,
          },
          {
            name: "친구",
            y: 3.28,
          },
        ],
      },
    ],
  };

  return (
    <div className="rounded-lg w-[350px] h-[330px] bg-rgb(255, 255, 255, 1) shadow-md ">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default PieChart;
