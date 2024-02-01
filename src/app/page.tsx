'use client';
import Image from "next/image";
import logo from "@/assets/images/logo.svg"
import dollar from "@/assets/images/icon-dollar.svg"
import people from "@/assets/images/icon-person.svg"
import { useState } from "react";

export default function Home() {
  const tips = [5,10,15,25,50];
  const [bill,setBill] = useState(0);
  const [tipPercentage,setTipPercentage] = useState(0);
  const [nopeople,setNoPeople] = useState(0);

  const tipAmount = (bill*(tipPercentage/100)/nopeople) || 0 ;
  const totalAmt = ((bill/nopeople)+tipAmount) || 0;

  function handleReset(){
    setBill(0);
    setTipPercentage(0);
    setNoPeople(0);
  }
  return (
    
    <div className="min-h-screen w-full bg-[rgb(197,228,231)]
     flex justify-center  items-center flex-col gap-12 p-2">
    <Image src={logo} alt="logo"/>
    {/*main section*/}
    <main className="bg-white p-4 grid sm:grid-cols-2 grid-cols-1 rounded-2xl w-full max-w-[700px] gap-6 ">
      {/*left-section*/}
     <div className="flex flex-col gap-6 ">
      {/*bill*/}
      <section  >
      <Label >Bill</Label>
      <div className="relative flex">
      <input 
      onChange={(e)=>setBill(e.target.valueAsNumber)}
      className="text-very-dark font-semibold text-right outline-strong-cyan text-dark-cyan w-full 
      h-[32px] px-2 bg-light-cyan"  type="number" placeholder="0" value={bill} />
      
      <Image className="absolute top-2 left-2" src={dollar} alt="d-logo"/>
      </div>
      </section>
      {/*tip*/}
      <section className="grid grid-cols-2 sm:grid-cols-3 gap-2 ">
        {tips.map((d,index)=>(
          <TipsButton onClick={()=>setTipPercentage(d)} key={index}>{d} %</TipsButton>
        )

        )}
        <input
         value={tipPercentage}
         onChange={(e)=>setTipPercentage(e.target.valueAsNumber)}
        className="text-very-dark font-semibold text-right outline-strong-cyan text-dark-cyan w-[100px] 
      h-full px-2 bg-light-cyan" placeholder="Custom" type="number"/>
      </section>
     
      {/*noofpeople*/}
      <section >
      <Label >No of People</Label>
      <div className="relative flex">
      <input
      value={nopeople}
      onChange={(e)=>setNoPeople(e.target.valueAsNumber)}
      className="text-very-dark font-semibold text-right outline-strong-cyan text-dark-cyan w-full 
      h-[32px] px-2 bg-light-cyan"  type="number" placeholder="0"/>
      <Image className="absolute top-2 left-2" src={people} alt="people"/>
      </div>
      </section>
     </div>
      {/*right-section*/}
          <div className="bg-very-dark flex flex-col p-4 justify-between rounded-md gap-6">
            {/*top*/}
            <section className="flex flex-col gap-5">
            {/*tip section*/}
              <PersonBill label="Tips Amount" bill={tipAmount.toFixed(2)} />
              <PersonBill label="Total" bill={totalAmt.toFixed(2)}/>
            {/*amount section*/}

            </section>

          
                
           

            {/*bottom*/}
            <button
              onClick={handleReset}
            className="bg-strong-cyan text-very-dark 
             w-full h-[38px] hover:bg-very-light-gray rounded-sm font-bold">RESET</button>
          
            
          </div>
      
      </main>  
    </div>
  
  );
}

function Label(props:React.HtmlHTMLAttributes<HTMLLabelElement>){
  return <label {...props} className="text-sm text-gray-cyan font-semibold"/>
}

function TipsButton(props:React.HtmlHTMLAttributes<HTMLButtonElement>){
  return <button {...props} className="font-semibold bg-very-dark rounded hover:bg-very-light-gray hover:text-very-dark border text-white w-full h-[38px]"/>
}

type PersonBillType = {
  label: string;
  bill: string;
}

function PersonBill(props:PersonBillType) {
  return (
    <div className="flex items-center justify-between ">
               
                <div >
                   {/*left*/}
                  <p className="text-white text-sm">{props.label}</p>
                  <p className="text-gray-cyan text-sm">/ person</p>    
                </div>
                <div>
                  {/*right*/}
                  <p className="text-strong-cyan text-4xl">${props.bill}</p>
                </div>
              </div>
  )
}
