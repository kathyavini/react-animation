import './styles/App.css';
import { HashRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import { PigContainer } from './components/PigContainer';
import { EmilyContainer } from './components/EmilyContainer';
import ScrollToTop from './components/ScrollToTop';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  color: var(--main);
  font-family: var(--mainFont);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  text-align: center;
  overflow: auto;
`;

function App() {
  return (
    <HashRouter>
      <ScrollToTop>
        <AppContainer>
          <AnimatePresence>
            <Routes>
              <Route key={1} path="/" element={<PigContainer />} />
              <Route key={2} path="/emily3d" element={<EmilyContainer />} />
            </Routes>
          </AnimatePresence>
        </AppContainer>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
