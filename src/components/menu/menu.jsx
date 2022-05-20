import React from "react"
import { MenuTopoStyles } from "./styles"

export function Menu (){
    return (
        <MenuTopoStyles >
            <div id="imagem" className={"title"}>
                <h1>{"Bin Calculator"}  &copy;</h1>
                </div>
            <ul>
                <li>
                </li>
                <li><a onClick={() => console.log(1)}>Inicio</a></li>

                <li><a onClick={() => console.log(87)}>Sobre</a></li>
                
                <li><a onClick={() => console.log(98)}>Quem Sou</a></li>

                <li><a onClick={() => console.log(88)}>Bot </a></li>
                
                <li><a onClick={() => console.log(3)}>Acessar Projeto</a></li>
                
                <li><a onClick={() => console.log(748)}>Minha Conta </a></li>
            </ul>
    </MenuTopoStyles>
    )
}