import styled from 'styled-components';

export const ScrollContainer = styled.div`
  overflow-x: hidden;
  width: 100vw;
  min-height: 100vh;
  height: 400vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: start;

  &:first-child {
    padding-top: 5vh;
  }

  p {
    color: var(--black);
  }
`;

export const Spacer = styled.div`
  width: 100vw;
  height: 100vh;
`;
