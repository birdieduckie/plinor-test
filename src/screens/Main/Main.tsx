import { useState } from 'react'

import {DndContext} from "@dnd-kit/core";

import {Column} from "../../features/Column/Column";


import {Button} from "../../shared/ui/Button/Button";
import {Container} from './styled'

export const Main = () => {



 return (
     <Container>

    <DndContext>
       <Column />
    </DndContext>
         <Button variant='primary' >Добавить колонку</Button>

     </Container>)
}
