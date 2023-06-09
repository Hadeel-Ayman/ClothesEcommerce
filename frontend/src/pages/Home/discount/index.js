import React from "react";
import "./style.js";
import bag2 from '../../../assets/images/bag2.jpg'
import clothes from '../../../assets/images/clothes.jpg'
import shop from '../../../assets/images/shop.jpg'
import sofa from '../../../assets/images/sofa.jpg'
import OneItem from "./OneItem/index.js";
import { Container, Title, Flex } from "./style.js";

const Discount = () => {
    return (
        <Container>
            <Title>Get Up To 70% Off</Title>
            <Flex>
                <OneItem
                    title={"save"}
                    num={"$29"}
                    img={sofa}
                    color={"#CB9917"}
                    backgroundColor={"#F2E4D9"}
                />

                <OneItem
                    title={"save"}
                    num={"$70"}
                    img={shop}
                    color={"#961F1F"}
                    backgroundColor={"#F9DCDC"}
                />

                <OneItem
                    title={"save"}
                    num={"$50"}
                    img={clothes}
                    color={"#94623C"}
                    backgroundColor={"#F2E4D9"}
                />

                <OneItem
                    title={"save"}
                    num={"$100"}
                    color={"#003D29"}
                    img={bag2}
                    backgroundColor={"#D2F7EC"}
                />
            </Flex>
        </Container>
    );
};

export default Discount;
