import { TransitState } from '../tracking/types'

export const arabicTransitState = (state: TransitState) => {
  switch (state) {
    case TransitState.DELIVERED:
      return 'تم التسليم'
    case TransitState.DELIVERED_TO_SENDER:
      return 'تم استلام الشحنة'
    case TransitState.NOT_YET_SHIPPED:
      return 'لم يتم الاستلام بعد'
    case TransitState.OUT_FOR_DELIVERY:
      return 'الشحنة خرجت للتسليم'
    case TransitState.PACKAGE_RECEIVED:
      return 'تم استلام الشحنة'
    case TransitState.TICKET_CREATED:
      return 'تم انشاء الشحنة'
    case TransitState.WAITING_FOR_CUSTOMER_ACTION:
      return 'انتظار رد العميل'
    case TransitState.IN_TRANSIT:
      return 'في الترانزيت'
    default:
      return state
  }
}
