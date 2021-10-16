import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.h1`
  margin: 20px;
`;

const Filter = styled.div`
  margin: 20px;
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const components = {
  FilterContainer,
  Filter,
  Title,
  FilterText,
  Select,
  Option
};

export default components;
