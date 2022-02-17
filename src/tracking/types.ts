export enum TransitState {
  TICKET_CREATED = 'TICKET_CREATED',
  PACKAGE_RECEIVED = 'PACKAGE_RECEIVED',
  NOT_YET_SHIPPED = 'NOT_YET_SHIPPED',
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  WAITING_FOR_CUSTOMER_ACTION = 'WAITING_FOR_CUSTOMER_ACTION',
  DELIVERED = 'DELIVERED',
  DELIVERED_TO_SENDER = 'DELIVERED_TO_SENDER',
  IN_TRANSIT = 'IN_TRANSIT',
}

export type Transit = {
  state: TransitState
  timestamp: string
}

export type Track = {
  CreateDate: string
  PromisedDate: string
  CurrentStatus: Transit
  SupportPhoneNumbers: string[]
  TrackingNumber: string
  TrackingURL: string
  TransitEvents: Transit[]
}
