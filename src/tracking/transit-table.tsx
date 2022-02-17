import { Table, TableColumnsType, Typography } from 'antd'
import moment from 'moment'
import React from 'react'
import { arabicTransitState } from '../utils/arabicTransitState'
import { Track } from './types'

type Props = {
  transitEvents: Track['TransitEvents']
}

const columns: TableColumnsType<object> = [
  {
    title: 'التاريخ',
    dataIndex: 'timestamp',
    key: 'التاريخ',
    render: date => <div>{moment(date).format('l')}</div>,
  },
  {
    title: 'الوقت',
    dataIndex: 'timestamp',
    key: 'الوقت',
    render: date => <div>{moment(date).format('h:mm a')}</div>,
  },
  {
    title: 'تفاصيل',
    dataIndex: 'state',
    key: 'تفاصيل',
    render: state => <div>{arabicTransitState(state)}</div>,
  },
]

export const TransitTable: React.FC<Props> = ({ transitEvents }) => {
  return (
    <div>
      <Typography.Title>تفاصيل الشحنة</Typography.Title>
      <Table
        columns={columns}
        dataSource={transitEvents.map(event => ({
          ...event,
          key: event.timestamp,
        }))}
      />
    </div>
  )
}
