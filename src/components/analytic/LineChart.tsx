import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import HC_more from "highcharts/highcharts-more";
import HC_exporting from "highcharts/modules/exporting";

HC_more(Highcharts);
HC_exporting(Highcharts);

const LineChart: React.FC = () => {
  const options: Highcharts.Options = {
    colors: ["#7CC7E8", "#01579B"],
    chart: {
      type: "line",
      borderRadius: 12,
      width: 660,
      height: 430,
      backgroundColor: "rgb(255, 255, 255, 0.8)",
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    title: {
      text: "월별 통계",
      style: {
        fontWeight: "semibold",
      },
    },
    xAxis: {
      categories: [
        "1월",
        "2월",
        "3월",
        "4월",
        "5월",
        "6월",
        "7월",
        "8월",
        "9월",
        "10월",
        "11월",
        "12월",
      ],
    },
    yAxis: {
      title: {
        text: "사용자 수",
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        type: "line",
        name: "나를 추가한 사용자 수",
        data: [16.0, 18, 16, 20, 18, 25, 30, 23, 34, 25, 27, 20],
      },
      {
        type: "line",
        name: "내가 추가한 사용자 수",
        data: [0, 5, 7, 4, 10, 14, 19, 16, 15, 20, 21, 23],
      },
    ],
  };

  return (
    <div className="rounded-xl w-[660px] h-[430px] bg-rgb(250, 250, 255, 1) shadow-md">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LineChart;
