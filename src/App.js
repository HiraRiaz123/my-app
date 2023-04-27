import './App.css';
import Hy from './practice/Hy';
import Usestate from './practice/Usestate';
import { createContext } from 'react';
import First from './practice/First';
import Form from './practice/ConForm';
import UnForm from './practice/UnForm';
const data = createContext();
const data1 = createContext();
const data2 = createContext();
function App() {
  const name = 'Hira Riaz'
  const age = "22"
  const weight = "70"
  return (
    <div className="App">
      <Usestate />
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <data2.Provider value={weight}>
            <First />
          </data2.Provider>
        </data1.Provider>
      </data.Provider>
      <Hy name="Areeba" age="28" weight="74" gender="Female" imageUrl='20180131_114936.jpg' />
      <Hy name="Rida" age="26" weight="72" gender="Female" imageUrl='B612_20180217_223147.jpg' />
      <Hy name="Hira" age="24" weight="70" gender="Female" imageUrl='B612_20190406_201535_698.jpg' />
      <Hy name="Hamayun" age="20" weight="65" gender="Male" imageUrl='B612_20190419_141830_371.jpg' />
      <Form />
      <UnForm />
    </div>
  );
}
export default App;
export { data, data1, data2 };
