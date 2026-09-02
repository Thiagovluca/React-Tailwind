import { useEffect, useState } from "react"
import Botao from "./components/Botao"
import Msn from "./components/Msn"

function App() {

  const [cont, setCont] = useState<number>(0)

  const aumentar = () => {
    setCont(cont + 1)
  }
  const diminuir = () => {
      setCont(cont - 1)
  }

  const[msn,SetMsn] = useState <boolean> (false)
    

// Reage Sempre que algo é atualizado!
  useEffect(()=>{
    console.log("Apareço Sempre Quando Algo Acontece!")
  })

  // Só reage quando o componente é criado!
  useEffect(()=>{
    console.log("Só Apareço dá Primeira Vez!")
  },[])

// Só Reage Quando o Valor For Alterado!
  useEffect(()=>{
    console.log(`Só Chama Quando o Cont: ${cont} For Alterado!`)
  },[cont])

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="2xl:bg-fuchsia-600 xl:bg-cyan-600 lg:bg-amber-500 md:bg-emerald-600 sm:bg-red-500 bg-gray-600 text-white text-center text-3xl p-5">Cabeçalho</div>
        <div className="grow">
          <h1 className="text-3xl text-center">Exemplo de Reaproveitamento</h1>
          <p className=" text-lg text-center">Contagem: {cont}</p>

          <div className="text-center">
            <Botao type={'action'} acao={aumentar}> Aumentar</Botao>
            <Botao type={'danger'} acao={diminuir}> Diminuir</Botao>
          </div>
          
          <button className="bg-amber-500" onClick={()=>SetMsn(!msn)}>Mensagem</button>
          {msn ? <Msn/> : ''}

        </div>
        <div className="bg-black text-white text-center text-xl p-3 ">Rodapé</div>
      </div>
    </>
  )
}

export default App
