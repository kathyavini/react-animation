import styled from 'styled-components';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const Container = styled.div`
  max-width: 1200px;
  width: 100%;

  position: absolute;
  top: 20vh;
  perspective: 2000px;
  perspective-origin: center;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;

const Container3d = styled.div`
  width: 100%;
  height: 100%;
  transform: rotateY(var(--emilyY)) rotateX(var(--emilyX));
  /* transform-origin: 50vw 40vh; */
  transform-style: preserve-3d;
  touch-action: pinch-zoom;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    transform-style: preserve-3d;
  }

  @media (min-width: 700px) {
    transform: rotateY(var(--emilySmY)) rotateX(var(--emilySmX));
  }
`;

export function Emily3d() {
  const { scrollY } = useViewportScroll();

  // useEffect(() => {
  //   return scrollY.onChange((v) => console.log(v));
  // }, [scrollY]);

  const falling = useTransform(scrollY, [0, 1], [0, 0.5], {
    clamp: false,
  });

  const rotating = useTransform(
    scrollY,
    [0, 10, 500, 580, 1050, 1110, 1600, 2000],
    [0, -10, 110, 110, 70, 70, 100, 100],
    {
      clamp: false,
    }
  );
  const fast = useTransform(scrollY, [0, 1], [0, -0.1], {
    clamp: false,
  });
  const middle = useTransform(scrollY, [0, 1], [0, -0.04], {
    clamp: false,
  });
  const slow = useTransform(scrollY, [0, 1], [0, -0.02], {
    clamp: false,
  });
  function handleMove(event) {
    let xAxis = window.innerWidth / 2 - event.pageX;
    let yAxis = window.innerHeight / 2 - event.pageY;

    // This seems to perform the same as using state and styled component props.
    document.body.style.setProperty('--emilyY', `${xAxis / 10}deg`);
    document.body.style.setProperty('--emilyX', `${yAxis / 20}deg`);

    document.body.style.setProperty('--emilySmY', `${xAxis / 60}deg`);
    document.body.style.setProperty('--emilySmX', `${yAxis / 90}deg`);
  }
  return (
    <Container>
      <Container3d onPointerMove={handleMove}>
        {/* <Container3d> */}
        <picture>
          <source srcSet={require('../assets/emily.webp')} type="image/webp" />
          <img
            alt="A watercolor painting of flowers"
            src={require('../assets/emily.png')}
            type="image/png"
          />
        </picture>

        <motion.img
          style={{ z: 15, y: falling, rotate: rotating }}
          src={require('../assets/emily1.png')}
          type="image/png"
        />
        <motion.img
          style={{ z: 10, y: fast }}
          src={require('../assets/emily2.png')}
          type="image/png"
        />

        <motion.img
          style={{ z: 7, y: middle }}
          src={require('../assets/emily3.png')}
          type="image/png"
        />

        <motion.img
          style={{ z: 2, y: slow }}
          src={require('../assets/emily4.png')}
          type="image/png"
        />
      </Container3d>
    </Container>
  );
}
