import { PigCorn } from './PigCorn';
import { UnicornLeft } from './UnicornLeft';
import { UnicornRight } from './UnicornRight';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
  /* transform: rotateY(var(--rotateY)) rotateX(var(--rotateX));
  transform-style: preserve-3d;
  touch-action: pinch-zoom; */

  * {
    /* border: 1px solid salmon; */
  }

  svg {
    position: absolute;
    width: 80%;
    height: 80%;
  }
`;

export function PigCornParty() {
  function handleMove(event) {
    let xAxis = window.innerWidth / 2 - event.pageX;
    let yAxis = window.innerHeight / 2 - event.pageY;

    document.body.style.setProperty('--rotateY', `${-xAxis / 20}deg`);
    // document.body.style.setProperty('--rotateX', `${yAxis / 20}deg`);
  }
  return (
    <Container>
      <PigCorn />
      <UnicornLeft />
      <UnicornRight />
    </Container>
  );
}
