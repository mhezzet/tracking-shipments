import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import trackingReducer from '../tracking/trackingSlice'

export const store = configureStore({
  reducer: {
    track: trackingReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
