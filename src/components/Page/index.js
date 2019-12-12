import { h } from 'preact'
import Scroller from '@ruiyun/preact-m-scroller'

const Page = ({ children, height = '100%' }) => (
  <Scroller height={height}>{children}</Scroller>
)

export default Page
