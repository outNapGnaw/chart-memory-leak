import { h, Component } from 'preact'
import { Chart, Geom, Axis, Tooltip } from 'bizgoblin'
import p2r from 'p-to-r'
const pixelRatio = window.devicePixelRatio * 2

export default class BizgoblinChart extends Component {
  onShowTooltip = ev => {
    const items = ev.items
    items[0].value = `${items[0].value}`
    // hack
    // fix https://github.com/antvis/F2/issues/123
    items.splice(1)
  }

  render() {
    const {
      data,
      barWidth = 25,
      xLabelRoute = 0,
      padding = ['auto', 0, 'auto', 30]
    } = this.props
    const chartWidth = '100%'
    const xLabelColors = data.map(item => item.color)
    return (
      <section style={{ height: p2r(500) }}>
        <Chart
          padding={padding}
          width={chartWidth}
          height='100%'
          data={data}
          defs={[
            {
              dataKey: 'name'
            },
            {
              dataKey: 'value'
            }
          ]}
          pixelRatio={pixelRatio}
        >
          <Axis
            dataKey='name'
            label={{
              fontSize: 8,
              rotate: xLabelRoute,
              ...(xLabelRoute && {
                textAlign: 'end',
                textBaseline: 'middle'
              })
            }}
          />
          <Axis dataKey='value' />
          <Geom
            geom='interval'
            position='name*value'
            size={barWidth}
            color={['name', xLabelColors]}
          />
          <Tooltip
            showItemMarker={false}
            offsetY={75}
            onShow={this.onShowTooltip}
          />
        </Chart>
      </section>
    )
  }
}
