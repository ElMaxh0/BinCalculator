import React, { useState } from "react";
import { useNumber } from "../../hooks/number";
import { EmailButton } from "./styles";
function CalculatorReverseData(){
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
        var EncodeArray =[]
        for (var i = 0; i > Number(NumeroDecimal.length); i++) {
            console.log(NumeroDecimal[i])
            if(NumeroDecimal[i] == "A"){
                EncodeArray.push(10)
            }
            else if(NumeroDecimal[i] == "B"){
                EncodeArray.push(11)
            }
            else if(NumeroDecimal[i] == "C"){
                EncodeArray.push(12)
            }
            else if(NumeroDecimal[i] == "D"){
                EncodeArray.push(13)
            }
            else if(NumeroDecimal[i] == "E"){
                EncodeArray.push(14)
            }
            else if(NumeroDecimal[i] == "F"){
                EncodeArray.push(15)
            }
            else{
                EncodeArray.push(NumeroDecimal[i])
            }

        }
        console.log( EncodeArray)
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
    CalculatorReverseData
}