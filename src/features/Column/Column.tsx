import {useEffect, useState} from "react";

import {Card} from 'entities/Card/Card'
import {CardForm} from "../../entities/CardForm/CardForm";
import {Button} from "../../shared/ui/Button/Button";

import {useAppDispatch} from "../../store/store";

export const Column = () => {


    const [formShown, setFormShown] = useState(false)

    const handleClick = () => setFormShown(prevState => !prevState)



    return (
        <div>
            {formShown && <CardForm ></CardForm>}
            <Card title='Я карточка' text='текст карточки'/>
            <Button variant='primary' onClick={handleClick}>Создать карточку</Button>
        </div>
    )
}