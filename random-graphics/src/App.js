import { useEffect, useState } from 'react';
import './App.css';
import { Area } from './Area';
import { ChartItem } from './ChartItem';

function App() {
  const getRandom = () =>{
    return Math.floor(Math.random() * 100 + 1)
  }
  const [data, setData] = useState([
    {
      id:1,
      title:"Facebook",
      color:"#3A98B9",
      value:getRandom(),
    },
    {
      id:2,
      title:"Whatsapp",
      color:"#539165",
      value:getRandom(),
    },
    {
      id:3,
      title:"chorume",
      color:"#F7C04A",
      value:getRandom(),
    },
    {
      id:4,
      title:"Esat",
      color:"#FF0303",
      value:getRandom(),
    }
  ])
  const findBigBarItem = (data) =>{
    return data.sort((val1,val2)=> val2.value-val1.value)[0].value
  }

  const [bigBarData, setBigBarData] = useState(findBigBarItem(data))

  const setBarData = () =>{
    let barData= [...data]
    barData.forEach((item)=>{
      item.value +=getRandom()
    })
    setBarData(barData);
  }

  const renderBarItem = (item) =>{
    let rate = item.value / bigBarData
    rate = rate * (1000 - 40);
    const percent = (rate * 100)/1040
    return <ChartItem 
    key={item.id}
    backgroundColor={item.color}
    width={percent+ '%'}
    text={item.title}
    count={item.value}
    />
  }

  useEffect(() =>{
    let timer;
    timer = setInterval(()=>{
      setBarData()
    }, 100)
  },[])
  return (
    <div>
      <h1 className='app'>Yarışan Grafikler</h1>
      <Area data={data}>{data.map((item)=>
        renderBarItem(item)
      )}</Area>
    </div>
  );
}

export default App;