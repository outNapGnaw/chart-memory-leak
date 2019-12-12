import { h, Component } from 'preact'
import { RowView } from '@ruiyun/preact-layout-suite'
import Highchart from './Chart'
import { data } from '../../constants/mock'
import Text from '@ruiyun/preact-text'
import Page from '../../components/Page'
export default class Highcharts extends Component {
  state = {
    name: 'demo',
    count: 30
  }

  render() {
    const { count } = this.state
    return (
      <Page>
        <RowView>
          <Text>Highcharts</Text>
        </RowView>
        {[...new Array(count).keys()].map(item => (
          <Highchart key={item} id={`Highchart-${item}`} data={data} />
        ))}
      </Page>
    )
  }
}
