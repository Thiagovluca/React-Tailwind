import { useEffect } from "react"

export default function Msn(){

    useEffect(()=>{

        return()=>console.log('A Mensagem Foi Apagada!')

    },[])

    return(
        <div className="border-2 border-red-400 p-2">
            <p className="text-2xl">Mensagem Enviada!</p>
        </div>
    )
}