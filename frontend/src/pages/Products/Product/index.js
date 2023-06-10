import './style.js'
import { Container, Icon, Image, Info,H1 } from './style.js';
import { AiOutlineSearch, AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineFavoriteBorder } from 'react-icons/md'

const Product = ({ src }) => {
    return (
        <Container>
            {/* <H1>{src}</H1> */}
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
