import { ScrollContainer, Spacer } from './ScrollContainer';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import styled from 'styled-components';
import { Emily3d } from './Emily3d';

const GoodbyeMessage = styled(motion.h1)`
  position: fixed;
  top: 20vh;
  left: 5vw;
`;

const ScrollMessage = styled(motion.p)`
  margin-top: min(80vw, 960px);
`;

export function EmilyContainer() {
  const { scrollY } = useViewportScroll();

  const y1 = useTransform(scrollY, [0, 1000, 2000], [0, 0, 1], {
    clamp: false,
  });
  const y2 = useTransform(scrollY, [0, 200, 800], [0, 1, 1], {
    clamp: false,
  });
  return (
    <ScrollContainer>
      <Emily3d />
      <p>(wiggle me!)</p>
      <ScrollMessage style={{ opacity: y2 }}>...or scroll</ScrollMessage>
      <Spacer />
      <Spacer />
      <GoodbyeMessage style={{ opacity: y1 }}>
        Thanks for visiting!
      </GoodbyeMessage>
    </ScrollContainer>
  );
}
