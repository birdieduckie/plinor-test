import { FC, useState, useEffect } from 'react'

import { Container } from './styled'

interface CardProps {
    title: string
    text: string
}

export const Card: FC<CardProps> = ({ title, text}) => {

    const [fieldShown, setFieldShown] = useState(false)
    return (<Container>
        <h2>{title}</h2>
        <p>{text}</p>
    </Container>)
}