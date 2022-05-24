import { PigCorn } from './PigCorn';
import { UnicornLeft } from './UnicornLeft';
import { UnicornRight } from './UnicornRight';
import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const Container = styled.div`
  max-width: 600px;
  width: 100%;
  height: 50vh;
  /* transform: rotateY(var(--pigCornY)) rotateX(var(--pigCornX));
  transform-style: preserve-3d;
  touch-action: pinch-zoom;
  position: fixed; */

  * {
    /* border: 1px solid salmon; */
  }

  svg {
    position: fixed;
    top: 5%;
    width: 80%;
    height: 80%;
  }
`;

export function PigCornParty() {
  const { scrollY } = useViewportScroll();

  // useEffect(() => {
  //   return scrollY.onChange((v) => console.log(v));
  // }, [scrollY]);

  const yPig = useTransform(scrollY, [0, 0, 1700, 3000], [0, 0, 0, 1], {
    clamp: false,
  });
  const yLeft = useTransform(scrollY, [0, 200, 600, 1200], [0, 0, 0.1, 1], {
    clamp: false,
  });
  const yRight = useTransform(scrollY, [0, 350, 750, 1350], [0, 0, 0.1, 1], {
    clamp: false,
  });
  function handleMove(event) {
    let xAxis = window.innerWidth / 2 - event.pageX;
    let yAxis = window.innerHeight / 2 - event.pageY;

    document.body.style.setProperty('--pigCornY', `${-xAxis / 20}deg`);
    // document.body.style.setProperty('--pigCornX', `${yAxis / 20}deg`);
  }
  return (
    // <Container onPointerMove={handleMove}>
    <Container>
      <PigCorn yPig={yPig} />
      <UnicornLeft yLeft={yLeft} />
      <UnicornRight yRight={yRight} />
    </Container>
  );
}
