import { Navigation } from './components/Navigation';

function App({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>   
  );
}

export default App;
