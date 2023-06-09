import { IoIosAddCircleOutline, IoIosRemoveCircleOutline } from 'react-icons/io';
import {
    AddContainer, Amount, AmountContainer, Button, Container,
    Desc, Filter, FilterColor, FilterContainer, FilterSize,
    FilterSizeOption, FilterTitle, Image, ImgContainer, InfoContainer,
    Price, Title, Wrapper
} from "./style";
import Announcement from '../../components/Announcement';
import Newsletter from '../../components/Newsletter';


const SingleProduct = () => {
    return (
        <Container>
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Desc>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.
                    </Desc>
                    <Price>$ 20</Price>
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <IoIosAddCircleOutline style={{ fontSize: '25px', cursor: 'pointer' }} />
                            <Amount>1</Amount>
                            <IoIosRemoveCircleOutline style={{ fontSize: '25px', cursor: 'pointer' }} />
                        </AmountContainer>
                        <Button>ADD TO CART</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
        </Container>
    );
};

export default SingleProduct;
