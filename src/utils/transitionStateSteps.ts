import { TransitState } from '../tracking/types'

export const transitionStateSteps = (state: TransitState) => {
  switch (state) {
    case TransitState.DELIVERED:
      return 3
    case TransitState.DELIVERED_TO_SENDER:
      return 3
    case TransitState.NOT_YET_SHIPPED:
      return 0
    case TransitState.OUT_FOR_DELIVERY:
      return 2
    case TransitState.PACKAGE_RECEIVED:
      return 1
    case TransitState.TICKET_CREATED:
      return 0
    case TransitState.WAITING_FOR_CUSTOMER_ACTION:
      return 1
    case TransitState.IN_TRANSIT:
      return 1
    default:
      return 2
  }
}
