import { ConfigProvider } from 'antd'
import { Tracking } from './tracking'
import ar_EG from 'antd/lib/locale/ar_EG'
import 'moment/locale/ar'

export const App = () => {
  return (
    <ConfigProvider direction='rtl' locale={ar_EG}>
      <Tracking />
    </ConfigProvider>
  )
}
