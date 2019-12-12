import { h, Component } from 'preact'
import { RowView } from '@ruiyun/preact-layout-suite'
import Highcharts from 'highcharts'
export default class Highchart extends Component {
  componentDidMount() {
    this.initChart()
  }

  initChart = () => {
    const { data, id } = this.props
    Highcharts.chart(id, {
      title: '',
      legend: '',
      chart: {
        type: 'column'
      },
      series: [{ data: data.map(item => ({ ...item, y: item.value })) }]
    })
  }

  render() {
    const { id } = this.props
    return (
      <RowView width='100%'>
        <div id={id} style={{ width: '100%' }} />
      </RowView>
    )
  }
}
