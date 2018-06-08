import React from 'react';
import echarts from 'echarts/lib/echarts' //必须
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'


import 'echarts/lib/chart/bar'//柱状图·
import 'echarts/lib/chart/pie'//饼图

// 引入提示框和标题组件
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';

class Index extends React.Component {
    constructor(props) {
        super(props)
        
    }
    showBar = () => {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(this.barNode);

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: '柱状图示例'
            },
            tooltip: {},
            legend: {
                data: ['销量']
            },
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

    showPie = () => {
        let pieChart = echarts.init(this.pieNode);
        // 饼状图
        let option = {
            title: {
                text: '饼状图示例'
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    data: [
                        { value: 235, name: '视频广告' },
                        { value: 274, name: '联盟广告' },
                        { value: 310, name: '邮件营销' },
                        { value: 335, name: '直接访问' },
                        { value: 400, name: '搜索引擎' }
                    ],
                    roseType: 'angle',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(0, 0, 0, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(0, 0, 0, 0.3)'
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        // 使用刚指定的配置项和数据显示图表。
        pieChart.setOption(option);
    }
    componentDidMount() {
        this.showBar();
        this.showPie();
    }
    go=()=>{
        debugger;
        this.props.history.go(-1);
    }
    render() {
        return (
            <div className="echart-page">
                <div><button onClick={()=>this.go()}>ceshi1</button></div>
                <div className="content-warp">
                    <div className="bar-warp warp" ref={ele => { this.barNode = ele }}></div>
                    <div className="pie-warp warp" ref={ele => { this.pieNode = ele }}></div>
                </div>
            </div>
        )
    }
}

export default Index;