import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;

export const Title = styled.h1`
  font-family: 'Sacramento', cursive;
  font-size: 3rem;
  letter-spacing: 4px;
  font-weight: 400;
`;

export const Image = styled.img`
  -moz-box-shadow: 0px 6px 5px #111;
  -webkit-box-shadow: 0px 6px 5px #111;
  box-shadow: 0px 2px 10px #111;
  -moz-border-radius: 190px;
  -webkit-border-radius: 190px;
  border-radius: 190px;
  object-fit: cover;

  width: 120px;
  height: 120px;
`;

export const Text = styled.p``;
