import {useEffect} from "react";

import {Card} from 'entities/Card/Card'
import {Button} from "../../shared/ui/Button/Button";

import {useAppDispatch} from "../../store/store";

export const Column = () => {


    return (
        <div>
            <Button variant='primary'>Создать карточку</Button>
            <Card />
        </div>
    )
}