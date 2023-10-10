import {FC, useEffect} from 'react'


import {Input} from "../../shared/ui/Input/Input";
import {Button} from "../../shared/ui/Button/Button";
import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from 'store/store'
import {addCard} from 'store/cards/cardSlice'



export const CardForm = () => {

    const dispatch = useAppDispatch()

    useEffect(() => {}, [dispatch])
    return (
        <form>
            <Input placeholder='Название карточки'></Input>
            <Input placeholder='Очень важный текст...'></Input>
            <Button type='submit' variant='primary'></Button>
        </form>
    )

}