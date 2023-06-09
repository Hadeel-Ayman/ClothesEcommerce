import styled from "styled-components";
const Container = styled.div`
  margin-top: 54px;
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  border-radius:20px;
  outline: none;
  margin-right: 20px;
`;
const Option = styled.option`
`;

export {
  FilterContainer,
  Filter,
  FilterText,
  Select,
  Option,
  Title,
  Container,
};
