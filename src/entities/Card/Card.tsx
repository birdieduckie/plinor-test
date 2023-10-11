import { FC } from 'react'

import {useDraggable} from "@dnd-kit/core";

import {EditableText} from "../../shared/ui/EditableText/EditableText";

import { Container } from './styled'

interface CardProps {
    id: string
    title: string
    text: string
    createdAt: string
}

export const DraggableCard: FC<CardProps> = ({ id, title, text, createdAt}) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: 'draggable',
    });
    const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;
    return (
        <Container ref={setNodeRef} style={style} {...listeners} {...attributes}>
            <EditableText id={id} initialText={title}>{title}</EditableText>
            <EditableText id={id} initialText={text}>{text}</EditableText>
        </Container>)
}