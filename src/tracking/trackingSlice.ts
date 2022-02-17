import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { Track } from './types'

export interface TrackState {
  value: Track | null
  status: 'idle' | 'loading' | 'failed'
}

const initialState: TrackState = {
  value: null,
  status: 'idle',
}

export const fetchTrack = createAsyncThunk(
  'track/fetchTrack',
  async (trackNumber: string) => {
    const response = await fetch(
      `https://tracking.bosta.co/shipments/track/${trackNumber}`
    )

    return await response.json()
  }
)

export const trackSlice = createSlice({
  name: 'track',
  initialState,
  reducers: {
    setTrackValue: (state, action: PayloadAction<Track>) => {
      state.value = action.payload
    },
    setStatusValue: (state, action: PayloadAction<TrackState['status']>) => {
      state.status = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTrack.pending, state => {
        state.status = 'loading'
      })
      .addCase(fetchTrack.rejected, state => {
        state.status = 'failed'
      })
      .addCase(fetchTrack.fulfilled, (state, action) => {
        state.status = 'idle'
        state.value = action.payload
      })
  },
})

export const selectTrack = (state: RootState) => state.track

export default trackSlice.reducer
