import './styles/App.css';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';
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
  /* scroll-snap-type: y mandatory; */
  overflow: auto;
`;

const ScrollContainer = styled.div`
  /* scroll-snap-align: start; */
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

  h2 {
    padding-bottom: 5vh;
  }
`;

const Spacer = styled.div`
  width: 100vw;
  height: 100vh;
`;

function App() {
  const { scrollY } = useViewportScroll();

  const y1 = useTransform(scrollY, [0, 1], [0, 0.1], {
    clamp: false,
  });
  const y2 = useTransform(scrollY, [0, 1], [0, 0.5], {
    clamp: false,
  });

  return (
    <AppContainer>
      {/* <ScrollContainer> */}

      <PigCornParty />
      <motion.h1 style={{ y: y1 }}>Unicorn Party</motion.h1>
      <motion.p style={{ y: y2 }}>(Scroll down)</motion.p>
      {/* </ScrollContainer> */}
      <ScrollContainer>
        {/* <Rotate3d /> */}
        <Spacer />
        <Spacer />
      </ScrollContainer>
      <ScrollContainer>
        <Spacer />
        <Spacer />
      </ScrollContainer>
    </AppContainer>
  );
}

export default App;
