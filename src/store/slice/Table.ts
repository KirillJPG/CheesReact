import { TableModel } from '@/model/TableModel'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TableState {
  table?:TableModel
}

const initialState: TableState = {
  table:undefined
}

export const tableSlice = createSlice({
  name: 'chessman',
  initialState,
  reducers: {
    newGame(state,undefined){
      state.table = new TableModel()
    },
    setGame(state,{payload}:PayloadAction<TableModel>){
      state.table = payload
    }
  },
})

export const {actions:actionsTable,reducer:reducerTable} = tableSlice 