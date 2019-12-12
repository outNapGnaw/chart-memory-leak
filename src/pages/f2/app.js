import { h, Component } from 'preact'
import { RowView } from '@ruiyun/preact-layout-suite'
import F2Chart from './Chart'
import { data } from '../../constants/mock'
import Text from '@ruiyun/preact-text'
import Page from '../../components/Page'
export default class F2 extends Component {
  state = {
    name: 'wenjun',
    count: 30
  }

  render() {
    const { count } = this.state
    return (
      <Page>
        <RowView>
          <Text>F2</Text>
        </RowView>
        {[...new Array(count).keys()].map(item => (
          <F2Chart key={item} id={`F2Chart-${item}`} data={data} />
        ))}
      </Page>
    )
  }
}
