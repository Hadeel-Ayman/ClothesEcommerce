import React from 'react'
import './style.js'
import { Container, H2, H3, P, Image, Content, Img } from './style.js'

const OneItem = ({ title, num, img, backgroundColor, color }) => {
    return (
        <Container backgroundColor={backgroundColor}>
            <Content>
                <H3>{title}</H3>
                <H2 color={color}>{num}</H2>
                <P>Explore Our Furniture & Home Furnishing Range</P>
            </Content>
            <Img>
                <Image src={img} />
            </Img>
        </Container>
    )
}

export default OneItem
