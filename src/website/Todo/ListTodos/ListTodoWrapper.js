import styled from "styled-components";

const ListTodoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  .flex {
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 45%;

    @media only screen and (max-width: 700px) {
      width: 100%;
    }
  }
`;

export default ListTodoWrapper;
