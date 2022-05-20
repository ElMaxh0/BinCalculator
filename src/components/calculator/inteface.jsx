import react, { lazy } from "react";
import { ContentBoxStyle } from "./contentbox";
import BannerSexyCalc from '../../assents/banner/sexyCalcBannerId.png'
import { CalculatorData } from "./calc";
import { CalculatorReverseData } from "./calcReverse";
export default function Main(){
    return(
    <>
        <div>
            <ContentBoxStyle className={'bgimage bg'+"1"} style={{
                backgroundImage:"url("+BannerSexyCalc+")",
                backgroundSize:"100%"
            }}>
                <div className='container pensamento'>
                    <div id='Container'>
                        <CalculatorData />
                    </div>
                </div>
            </ContentBoxStyle>
        </div>
    </>
    )
}