import './styles/App.css';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { PigCornParty } from './components/PigCornParty';
import { Rotate3d } from './components/Rotate3d';
import styledComponents from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  color: var(--main);
  font-size: var(--mainFont);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  scroll-snap-type: y mandatory;
  overflow: auto;
`;

const ScrollContainer = styled.div`
  scroll-snap-align: start;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-around;

  &:first-child {
    margin-top: 10vh;
    perspective: 1000px;
    perspective-origin: bottom;
  }

  h1:first-child {
    padding-bottom: 10vh;
  }
`;

const Spacer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  return (
    <AppContainer>
      <ScrollContainer>
        {/* <motion.h1 animate={{ y: 100 }}>Hello</motion.h1> */}
        <PigCornParty />
      </ScrollContainer>
      <ScrollContainer>
        <Rotate3d />
      </ScrollContainer>
      <ScrollContainer>
        <Spacer />
      </ScrollContainer>
    </AppContainer>
  );
}

export default App;
