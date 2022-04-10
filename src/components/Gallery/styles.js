import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  padding: 1rem;
  max-width: 320px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-top: 2rem;
    margin-bottom: 3rem;
    font-weight: 400;
  }
`;

export const Back = styled.a`
  padding: 2rem;
  color: inherit;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  letter-spacing: 1px;
`;

export const Address = styled.div`
  background: #fff;
  max-width: 320px;
  padding: 0.5rem 1rem;
  width: 100%;
  color: #121212;
  /* padding: 0.5rem 3rem; */
  margin-top: 3rem;
  border-radius: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  /* font-weight: ; */

  img {
    height: 20px;
  }

  span {
    font-size: 0.9rem;
    margin-left: 1rem;
    font-weight: 400;
  }
`;
