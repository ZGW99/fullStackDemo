import { useEffect } from "react";
import * as echarts from 'echarts';


function LineCharts(props: { id: any, width: number, height: number }) {
    const { id = 'main', width = 400, height = 400 } = props;

    const initChart = () => {
        let chartDom: any = document.getElementById(id)
        let myChart = echarts.init(chartDom);
        let option: any = null
        option = {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    areaStyle: {}
                }
            ]
        };

        myChart.resize()
        option && myChart.setOption(option);

    }

    useEffect(() => {
        initChart()
    }, [props]);

    return (
        <div id={id} style={{ width: width, height: height }}></div>
    )
}
export default LineCharts;