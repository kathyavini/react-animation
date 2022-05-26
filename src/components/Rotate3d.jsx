import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 15vh;
  perspective: 1000px;
  perspective-origin: bottom;
`;

const Boxes = styled.div`
  transform-style: preserve-3d;
  background-color: mediumseagreen;
  width: 200px;
  height: 200px;
  border-radius: 20px;
  transform: rotateY(var(--rotateY)) rotateX(var(--rotateX));
  position: relative;
  padding: 50px;
  touch-action: pinch-zoom;
`;

const InnerBox = styled.div`
  transform-style: preserve-3d;
  width: 150px;
  height: 150px;
  border-radius: 20px;
  background-color: aquamarine;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate3D(25px, 75px, 50px);
`;

export function Rotate3d() {
  // const [mouseX, setMouseX] = useState(0);
  // const [mouseY, setMouseY] = useState(0);

  function handleMove(event) {
    let xAxis = window.innerWidth / 2 - event.pageX;
    let yAxis = window.innerHeight / 2 - event.pageY;

    // going to go with CSS variables instead of state. Didn't notice a difference in performance either way though and both worked
    document.body.style.setProperty('--rotateY', `${-xAxis / 2}deg`);
    document.body.style.setProperty('--rotateX', `${yAxis / 2}deg`);
    // setMouseX(-xAxis);
    // setMouseY(yAxis);
  }
  return (
    <Container>
      <Boxes onPointerMove={handleMove}>
        <InnerBox />
      </Boxes>
      <p>Rotate me!</p>
    </Container>
  );
}
