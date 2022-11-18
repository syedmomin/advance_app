import './App.css';
import {Difference,PropsDes,PropsType} from './components/basic/Basic'

function App() {
  return (
    <>
      <h1>hello</h1>
      <Difference/>
      <PropsDes name="Syed" />
      <PropsDes name="Momin" />
      <PropsType name="momin" desi="developer" age={21} />
    </>
  );
}

export default App;
