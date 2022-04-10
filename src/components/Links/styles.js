import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 3rem;
`;

export const Link = styled.div`
  text-align: center;
  width: 100%;
  padding: 1rem;

  border: 1px solid #fff;
  transition: all 0.3s;

  & + div {
    margin-top: 2rem;
  }

  &:hover {
    background: #fff;
    a {
      color: #121214;
    }
  }

  cursor: pointer;
`;

export const Info = styled.a`
  color: inherit;
  text-decoration: none;
  padding: 1rem;
  width: 100%;

  &:hover {
    color: #121214;
  }
`;
