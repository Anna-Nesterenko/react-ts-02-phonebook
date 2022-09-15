import styled from "styled-components";

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;

  width: 40%;
`;

export const Field = styled.input`
  /* margin-left: 10px; */
  margin-bottom: 15px;
  margin-top: 15px;
  /* margin-right: 10px; */
  border: transparent;
  background-color: transparent;
  border-bottom: 1px solid white;
  outline: none;
  color: white;
  height: 20px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.56);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #00b2b2, 0 0 20px #008296, 0 0 30px #00b2b2,
      0 0 60px #008296;
  }
`;
