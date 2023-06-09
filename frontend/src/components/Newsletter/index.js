import { Button, Container, Desc, Input, InputContainer, Title } from "./style";
import { BsFillSendFill } from 'react-icons/bs'

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products.</Desc>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <BsFillSendFill />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default Newsletter;
