import {FC, useState, useEffect, ChangeEvent} from 'react'

import {Input} from "../../shared/ui/Input/Input";
import {Button} from "../../shared/ui/Button/Button";
import { useAppDispatch } from 'store/store'
import {addCard} from 'store/cards/cardSlice'



export const CardForm = () => {
    const [titleValue, setTitleValue] = useState('')
    const [textValue, setTextValue] = useState('')

    const dispatch = useAppDispatch()

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'title') {
            setTitleValue(prevState => prevState = e.target.value)
        }
        setTextValue(prevState => prevState = e.target.value)

    }

    const createdAt = Date().toString()
    const id = Math.random()*100

    const handleClick = () => {
        console.log(id, titleValue)
        dispatch(addCard( { id, createdAt, title: titleValue, text: textValue}))
    }



    // useEffect(() => {}, [dispatch])
    return (
        <form onSubmit={(event => event.preventDefault())}>
            <Input placeholder='Название карточки' name='title' onChange={handleChange}></Input>
            <Input placeholder='Очень важный текст...' name='text' onChange={handleChange}></Input>
            <Button type='submit' variant='primary' onClick={handleClick}></Button>
        </form>
    )

}