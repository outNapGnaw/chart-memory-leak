import { h, Component } from 'preact'
import BizgoblinChart from './Chart'
import { data } from '../../constants/mock'
export default class Bizgoblin extends Component {
  state = {
    name: 'demo',
    count: 30
  }

  render() {
    const { count } = this.state
    return (
      <div>
        <p>Bizgoblin</p>
        {[...new Array(count).keys()].map(item => (
          <BizgoblinChart key={item} data={data} />
        ))}
      </div>
    )
  }
}
