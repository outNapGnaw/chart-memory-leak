import { h, Component } from 'preact'
import ReactEcharts from 'echarts-for-react'
import p2r from 'p-to-r'

export default class BaiduEcharts extends Component {
  getOption = () => {
    const { data } = this.props
    return {
      title: {
        text: 'ECharts'
      },
      tooltip: {},
      xAxis: {
        data: data.map(item => item.name)
      },
      yAxis: {},
      series: [
        {
          name: '值',
          type: 'bar',
          data: data.map(item => ({
            ...item,
            itemStyle: {
              color: item.color
            }
          }))
        }
      ]
    }
  }

  render() {
    return (
      <ReactEcharts
        option={this.getOption()}
        style={{ height: p2r(500), width: '100%' }}
        className='react_for_echarts'
      />
    )
  }
}
