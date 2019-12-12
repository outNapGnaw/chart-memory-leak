import { h, Component, Fragment } from 'preact'
import WithNav from '@ruiyun/preact-m-nav'
import { RowView } from '@ruiyun/preact-layout-suite'
import Text from '@ruiyun/preact-text'
import Line from '@ruiyun/preact-line'
import Page from '../../components/Page'

const Item = ({ name, onClick }) => (
  <Fragment>
    <RowView height={120} padding={[0, 0, 0, 30]} onClick={onClick}>
      <Text>{name}</Text>
    </RowView>
    <Line />
  </Fragment>
)
@WithNav
export default class Index extends Component {
  demoList = [
    { name: 'f2', path: 'f2' },
    { name: 'echarts', path: 'echarts' },
    { name: 'bizgoblin', path: 'bizgoblin' }
  ]

  goto = path => {
    this.props.$nav.push(path)
  }

  render() {
    return (
      <Page>
        <Text>所有demo</Text>
        {this.demoList.map(demo => (
          <Item
            key={demo.path}
            name={demo.name}
            onClick={() => this.goto(demo.path)}
          />
        ))}
      </Page>
    )
  }
}
