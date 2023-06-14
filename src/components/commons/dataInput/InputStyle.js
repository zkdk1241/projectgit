import styled from "styled-components";

export const DataInputStyle = styled.input`
  width: 322px;
  height: 48px;
  font-size: 16px;
  background-color: none;
  border: none;
  padding-bottom: 0px;
  border-bottom: 1px solid #dbdbdb;
  outline: none;

  ::placeholder {
    color: #dbdbdb;
  }

  :focus {
    outline: none;
    border-bottom: 1px #b51215 solid;
  }
`;
export const Cont = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const InpLabel = styled.label`
  font-size: 16px;
  color: #767676;
  font-weight: 500;
  margin-bottom: 5px;
  display: block;
  margin-top: 40px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
