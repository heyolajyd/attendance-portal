import styled, { keyframes } from 'styled-components';

const AppLogoFloat = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(5px)
  }
  100% {
    transform: translateY(0px)
  }
`;

export const StyledSection = styled.section`
  width: 100vw;
  height: 100vh;
  position: relative;
  padding-top: 20vh;
  background: #231a6b;
`;

export const StyledLogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 25px;

  img {
    width: 70px;
    animation: ${AppLogoFloat} infinite 3s ease-in-out;
    padding-right: 20px;
  }
`;

export const Divider = styled.div`
  height: 70px;
  border-right: 1px solid grey;
`;

export const StyledLogoTitle = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  margin-top: 10px;

  span {
    display: block;
    font-size: 20px;
    font-weight: bold;
    align-self: flex-start;
    line-height: 1.3;
  }
`;

export const Content = styled.section`
  width: 400px;
  margin: 0 auto;
`;

export const StyledFooter = styled.footer`
  position: absolute;
  width: 100%;
  bottom: 10px;
  text-align: center;
  color: white;
  font-size: 12px;
`;
