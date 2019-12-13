import { h, Component } from 'preact'
import { RowView } from '@ruiyun/preact-layout-suite'
import Tabs from '@ruiyun/preact-m-tabs-simple'
import F2Chart from './Chart'
import { data } from '../../constants/mock'
import Text from '@ruiyun/preact-text'
import Page from '../../components/Page'
export default class F2 extends Component {
  state = {
    name: 'wenjun',
    count1: 30,
    count2: 10,
    tabIndex: 0
  }

  onTabsChange = index => {
    this.setState({
      tabIndex: index
    })
  }

  render() {
    const { count1, count2, tabIndex } = this.state
    const tabCount = tabIndex === 0 ? count1 : count2
    const tabList = [...new Array(tabCount).keys()]
    return (
      <Page>
        <Tabs
          index={tabIndex}
          items={['tab1', 'tab2']}
          onChange={this.onTabsChange}
        />
        <RowView>
          <Text>F2{tabCount}</Text>
        </RowView>
        {tabList.map(item => (
          <F2Chart key={item} id={`F2Chart-${item}`} data={data} />
        ))}
      </Page>
    )
  }
}
