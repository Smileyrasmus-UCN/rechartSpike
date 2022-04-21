import './App.css';
import {createContext, useState, useEffect} from "react"
import DataProvider from './logic/dataProvider';
import ExamplePieChart from './components/pieChart';

export const DataContext = createContext();

function App() {
  const [dataProvider, setDataProvider] = useState({})
  const [data, setData] = useState([])

  useEffect(() => {
    setDataProvider(new DataProvider()) // The DataProvider class constructor should reqiure a userid in our app.
  }, [])

  useEffect(() => {
    setData(dataProvider.data ?? []) // ensure that data is always an array
  }, [dataProvider])

  return (
    <div className="App">
      <h1>Recharts</h1>
      <DataContext.Provider value={data}>
        <ExamplePieChart/>
      </DataContext.Provider>
    </div>
  );
}

export default App;
