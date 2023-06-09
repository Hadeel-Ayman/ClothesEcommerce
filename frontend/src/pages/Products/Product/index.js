import './style.js'
import { Container, Icon, Image, Info } from './style.js';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

const Product = ({ src }) => {
    return (
        <Container>
            <Image src={src} />
            <Info>
                <Icon>
                    <AiOutlineShoppingCart />
                </Icon>
                <Icon>
                    <AiOutlineSearch />
                </Icon>
                <Icon>
                    <MdOutlineFavoriteBorder />
                </Icon>
            </Info>
        </Container>
    );
};

export default Product;
