import { h, Component } from 'preact'
import BaiduEchart from './Chart'
import { data } from '../../constants/mock'
export default class BaiduEcharts extends Component {
  state = {
    name: 'demo',
    count: 30
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <p>BaiduEcharts</p>
        {[...new Array(count).keys()].map(item => (
          <BaiduEchart key={item} data={data} />
        ))}
      </div>
    )
  }
}
