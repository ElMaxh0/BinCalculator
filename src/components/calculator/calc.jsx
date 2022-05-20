import React, { useState } from "react";
import { useNumber } from "../../hooks/number";
import { EmailButton } from "./styles";
function CalculatorData(){
    const [baseState, setBaseStates] = useState(2)
    const {Numberid, setNumberid} = useNumber();
    const changeSelected = (e) =>{
        const selected = e.target.value;
        console.log(e.target.value)
        setBaseStates(e.target.value)
}
    function Calc(database){
        var NumeroDecimal= Numberid;
        var binNumbers =[]
        var base= database;
        var TableData=[]
        var DeciNumber =[]
        var DeciNumberNotfloor =[]
        for (var i = NumeroDecimal; i > Number(0.5); i= Math.floor(i/base)) {
            if((i % base) == 10){
                binNumbers.push("A")
                DeciNumber.push(Math.floor(i/base))
                DeciNumberNotfloor.push((i/base))
                TableData.push([i, ("A"),(Math.floor(i/base)) , (i/base) , base ])
                console.log(binNumbers)
            }
            else if((i % base) == 11){
                binNumbers.push("B")
                DeciNumber.push(Math.floor(i/base))
                DeciNumberNotfloor.push((i/base))
                TableData.push([i, ("B"),(Math.floor(i/base)) , (i/base) , base ])
                console.log(binNumbers)
            }
            else if((i % base) == 12){
                binNumbers.push("C")
                DeciNumber.push(Math.floor(i/base))
                DeciNumberNotfloor.push((i/base))
                TableData.push([i, ("C"),(Math.floor(i/base)) , (i/base) , base ])
                console.log(binNumbers)
            }
            else if((i % base) == 13){
                binNumbers.push("D")
                DeciNumber.push(Math.floor(i/base))
                DeciNumberNotfloor.push((i/base))
                TableData.push([i, ("D"),(Math.floor(i/base)) , (i/base) , base ])
                console.log(binNumbers)
            }
            else if((i % base) == 14){
                binNumbers.push("E")
                DeciNumber.push(Math.floor(i/base))
                DeciNumberNotfloor.push((i/base))
                TableData.push([i, ("E"),(Math.floor(i/base)) , (i/base) , base ])
                console.log(binNumbers)
            }
            else if((i % base) == 15){
                binNumbers.push("F")
                DeciNumber.push(Math.floor(i/base))
                DeciNumberNotfloor.push((i/base))
                TableData.push([i, ("F"),(Math.floor(i/base)) , (i/base) , base ])
                console.log(binNumbers)
            }
            else{
                binNumbers.push(+i % base)
                DeciNumber.push(Math.floor(i/base))
                DeciNumberNotfloor.push((i/base))
                TableData.push([i, (+i % base),(Math.floor(i/base)) , (i/base) , base ])
                console.log(binNumbers)
            }
            if((i/base) == 1){
                //TableData.push([1, (1 % base),(Math.floor(1/base)) , (1/base) , base ])
                //console.log(TableData)
                //binNumbers.push(1%base);
            }
        }
        if(baseState == 2){
        }
        else{

        }

        //binNumbers.reverse()
        return {
            "binaryseq":binNumbers.reverse(),
            "binsequence":binNumbers.join,
            "binresults":binNumbers,
            "resultadosdiv2":DeciNumber,
            "tablemader":TableData
        }
    }
    
    //this.state = {value: '2'}

    return(
        <>
        <div>
            <div>
                <div>
                    <h1>Insira o Valor a ser Utilizado nos Calculos </h1>
                    <EmailButton type={"email"} autoComplete="off" placeholder={"Seu melhor Nome "} onChange={e => setNumberid(e.target.value)}/>
                    <select id={"i_want"} onChange={(e)=> {
                        changeSelected(e)
                    }}>
                        <option id="2">2</option>
                        <option id="8">8</option>
                        <option id="16">16</option>
                    </select>
                    <div>
                        <div style={{
                            width:'100%',
                            height:'60vh',
                            overflowY:"scroll",

                        }}>
                            <div alt={"binario"} >
                                <h1>Resultado em Base {baseState} :  {Calc(baseState)["binaryseq"]}</h1>
                                <table>
                                {Calc(baseState)["tablemader"].map((data) => <>
                                    <tr>
                                        <td>
                                            {
                                                `${data[0]} Divisão por \ ${data[4]} Igual a    `
                                            }
                                        </td>
                                        <td>
                                            {
                                                data[3]+"Valor Da Sobra"+ "   "
                                            }
                                        </td>
                                        <td>
                                            {
                                                data[1]+ "   "
                                            }
                                        </td>
                                    </tr>
                                </>)}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export{
    CalculatorData
}