import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import {initMetric} from "web-vitals/dist/modules/lib/initMetric";

export interface Card {
    id: string
    title: string
    text: string
    createdAt: string
}

const cardAdapter = createEntityAdapter<Card>({
    selectId: card => card.id,
    sortComparer: (a, b) => a.createdAt.localeCompare(b.createdAt)
})

export const CARD_SLICE = 'cards'

export const cardSlice = createSlice({
    name: CARD_SLICE,
    initialState: cardAdapter.getInitialState(),
    reducers: {
        addCard (state, action)  {
            console.log(action.payload)
            cardAdapter.setOne(state, action.payload)
        },
        editCard (state, action) {
            cardAdapter.updateOne(state, action.payload)
        },
        deleteCard (state, action) {
            cardAdapter.removeOne(state, action.payload)
        }
    }
})

export const { actions, reducer } = cardSlice

export const cardsSelectors = cardAdapter.getSelectors()

export const {
    addCard,
    editCard,
    deleteCard
} = actions

