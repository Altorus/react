import './App.css';
import {Main} from "./Main"
import {useState, useEffect} from "react";
import axios from "axios";

function App() {

    const [array, setArray] = useState(
        [{name: "Ivan", age: 18}, {name: "Maria", age: 12}, {name: "Vova", age: 19},{name: "Slava", age: 20}]
    )
    const [count, setCount] = useState(0)
    const [usd, setUsd] = useState(0)

    const setNumber=()=>{
        setCount(state => state + 1)
        setCount(state => state + 1)
    }

    useEffect(()=>{
        const getUSD = async () =>{
            const {data} = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
            console.log(data.Valute.USD.Value)
            setUsd(data.Valute.USD.Value)
        }
        getUSD()
    }, [count])

    const deleteUser = () =>{
        let filterUser = array.filter(item => item.age<20)
        setArray(filterUser)
    }

  return (
    <div className="App">
        {array.map(item=>(
            <Main name={item.name} age={item.age}/>
            )
        )}
        {/*<Main usd={usd}/>*/}
        <button  onClick={deleteUser} className="buton__main">Удалить самого старшего</button>
        <span className="span__main">{count}</span>
    </div>
  );
}

export default App;
