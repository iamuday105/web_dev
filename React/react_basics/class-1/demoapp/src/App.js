import React from 'react'
import'./App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {

  const response = [
    {
     itemName : "rin",
     itemDate: "29",
     itemMonth: "June",
     itemYear: "1998"
  },
    {
     itemName : "Nirma1",
     itemDate: "21",
     itemMonth: "august",
     itemYear: "1999"
  },
    {
     itemName : "Nirma2",
     itemDate: "22",
     itemMonth: "may",
     itemYear: "2000"
  },
]
  const itemTwoName = "Surf Excel"
  return (
    <>
    <Card>
    <Item name ={response[0].itemName} >Hello ji main hun first item</Item>
    <ItemDate day={[response[0].itemDate]} month={[response[0].itemMonth]}  year={[response[0].itemYear]} />
   <Item name ="Nirma" />
   <ItemDate day="20" month="May" year="1998"/>
   <Item name = {itemTwoName} />
   <ItemDate day="21" month="Aprin" year="1999"/>
   <Item name ="555" />
   <ItemDate day="22" month="August" year="2000"/>
   <h3 className='App'>uday</h3>
   <ItemDate/>
    </Card>
  
  
   </>
  )
}

export default App