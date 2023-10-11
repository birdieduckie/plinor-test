import { useState } from "react";
import {useDroppable} from "@dnd-kit/core";


import {DraggableCard as Card} from 'entities/Card/Card'
import {CardForm} from "../../entities/CardForm/CardForm";
import {Button} from "../../shared/ui/Button/Button";

import { useAppSelector } from 'store/store'

import { cardsSelectors} from "../../store/cards/cardSlice";


export const Column = () => {

    const {isOver, setNodeRef} = useDroppable({
        id: 'droppable',
    });
    const style = {
        color: isOver ? 'green' : undefined,
    };
    const cards = useAppSelector(state => cardsSelectors.selectAll(state))
    console.log(cards)
    const [formShown, setFormShown] = useState(false)

    const handleClick = () => {
        console.log("создаем....")
        setFormShown(prevState => !prevState)}

    return (
        <div ref={setNodeRef} style={style}>
            {formShown && <CardForm ></CardForm>}
            {cards && cards.map((item) =>
                <Card
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    text={item.text}
                    createdAt={item.createdAt}
                />)}
            <Button variant='primary' onClick={handleClick}>Создать карточку</Button>
        </div>
    )
}