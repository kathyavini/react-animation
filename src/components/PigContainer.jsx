import { ScrollContainer, Spacer } from './ScrollContainer';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { PigCornParty } from './PigCornParty';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled(ScrollContainer)`
  background-color: var(--background);
  height: 500vh;

  button {
    position: absolute;
    bottom: 5vh;
    left: 0;
    right: 0;
    margin: auto;
  }

  p {
    color: var(--main);
  }
`;

const StyledButton = styled(motion.button)`
  width: fit-content;

  padding: 0.7rem 2rem;
  background: ${(props) => (props.filled ? 'var(--main)' : 'transparent')};
  color: ${(props) => (props.filled ? 'var(--white)' : 'var(--main)')};
  border: 2px solid var(--main);
  border-radius: 10px;

  font-family: var(--mainFont);
  font-size: 1rem;
  text-transform: uppercase;

  &:hover {
    background: ${(props) =>
      props.filled ? 'var(--contrast)' : 'transparent'};
    color: ${(props) => (props.filled ? 'var(--white)' : 'var(--contrast)')};
    border: 2px solid
      ${(props) => (props.filled ? 'var(--contrast)' : 'var(--contrast)')};
  }

  &:active {
    filter: brightness(1.1);
  }
`;

export function PigContainer() {
  const { scrollY } = useViewportScroll();

  const y1 = useTransform(scrollY, [0, 1], [0, 0.1], {
    clamp: false,
  });
  const y2 = useTransform(scrollY, [0, 1], [0, 0.5], {
    clamp: false,
  });
  return (
    <Container>
      <PigCornParty />
      <motion.h1 style={{ y: y1 }}>Art</motion.h1>
      <motion.p style={{ y: y2 }}>(Scroll down)</motion.p>

      <Spacer />
      <Spacer />
      <Spacer />

      <Link to="/emily3d">
        <StyledButton>More art</StyledButton>
      </Link>
    </Container>
  );
}
