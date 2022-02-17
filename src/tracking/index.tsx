import { Steps } from 'antd'
import moment from 'moment'
import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { arabicTransitState } from '../utils/arabicTransitState'
import { fetchTrack, selectTrack } from './trackingSlice'
import { TransitTable } from './transit-table'
import {
  UserOutlined,
  SolutionOutlined,
  LoadingOutlined,
  SmileOutlined,
  RocketOutlined,
} from '@ant-design/icons'
import { transitionStateSteps } from '../utils/transitionStateSteps'
import { TransitState } from './types'

export const Tracking: React.FC = () => {
  const track = useAppSelector(selectTrack)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const trackNumber = urlParams.get('track_num')

    if (!trackNumber) return

    dispatch(fetchTrack(trackNumber))
  }, [dispatch])

  if (track.status === 'failed') return <div>something went wrong</div>
  if (track.status === 'loading') return <div>loading</div>
  if (!track.value) return null

  return (
    <div className='tracking'>
      <div className='details'>
        <div>
          <strong>رقم الشحنة {track.value.TrackingNumber}</strong>
          <div>{arabicTransitState(track.value.CurrentStatus.state)}</div>
        </div>
        <div>
          <strong> اخر تحديث</strong>
          <div>
            {moment(track.value.CurrentStatus.timestamp).format('LLLL')}
          </div>
        </div>
        <div>
          <strong>اسم التاجر</strong>
          <div>سوق</div>
        </div>
        <div>
          <strong>موعد التسليم خلال</strong>
          <div>{moment(track.value.PromisedDate).fromNow()}</div>
        </div>
      </div>

      <div>
        <Steps current={transitionStateSteps(track.value.CurrentStatus.state)}>
          <Steps.Step title='تم انشاء الشحنة' icon={<UserOutlined />} />
          <Steps.Step
            title='تم استلام الشحنة من التاجر'
            icon={<SolutionOutlined />}
          />
          <Steps.Step
            title='الشحنة خرجت للتسليم'
            icon={
              track.value.CurrentStatus.state ===
              TransitState.OUT_FOR_DELIVERY ? (
                <LoadingOutlined />
              ) : (
                <RocketOutlined />
              )
            }
          />
          <Steps.Step title='تم التسليم' icon={<SmileOutlined />} />
        </Steps>
      </div>
      <TransitTable transitEvents={track.value.TransitEvents} />
    </div>
  )
}
