import { h, Component } from 'preact'
import { RowView } from '@ruiyun/preact-layout-suite'
import F2 from '@antv/f2'
const pixelRatio = window.devicePixelRatio * 2
export default class F2Chart extends Component {
  componentDidMount() {
    this.initChart()
  }

  initChart = () => {
    const { data, id } = this.props
    const colors = data.map(item => item.color)
    const chart = new F2.Chart({
      id,
      pixelRatio
    })

    chart.source(data, {
      sales: {
        tickCount: 5
      }
    })
    chart.tooltip({
      showTooltipMarker: false,
      showItemMarker: false,
      onShow: function onShow(ev) {
        const items = ev.items
        items[0].value = `${items[0].value}`
      }
    })
    chart
      .interval()
      .position('name*value')
      .color(['name', colors])
    chart.render()
  }

  render() {
    const { id } = this.props
    return (
      <RowView width='100%'>
        <canvas id={id} style={{ width: '100%' }} />
      </RowView>
    )
  }
}
