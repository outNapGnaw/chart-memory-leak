import { h, Component } from 'preact'
import Tabs from '@ruiyun/preact-m-tabs-simple'
import BaiduEchart from './Chart'
import { data } from '../../constants/mock'
import Text from '@ruiyun/preact-text'
import Page from '../../components/Page'
export default class BaiduEcharts extends Component {
  state = {
    name: 'demo',
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
        <Text>BaiduEcharts{tabCount}</Text>
        {tabList.map(item => (
          <BaiduEchart key={item} data={data} />
        ))}
      </Page>
    )
  }
}
