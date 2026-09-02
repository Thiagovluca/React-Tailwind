type Props ={
    children : React.ReactNode;
    acao : ()=> void;
    type : string
}

export default function Botao({children, acao, type} : Props){
    
    if(type === "action"){
        return(
        <button 
        onClick={acao} className="bg-blue-600 text-white text-2xl px-2 rounded-md"> {children} 
        </button>
    ) 
    }else if (type === "danger"){
        return (
            <button
                onClick={acao} className="bg-red-600 text-white text-2xl px-2 rounded-md"> {children}
            </button>
            )
    }

   
}