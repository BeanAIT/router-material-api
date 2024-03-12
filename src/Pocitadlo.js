import { useEffect, useState } from "react";

function Pocitadlo() {

    // let pocitadlo = 5;
    const [pocitadlo, nastavPocitadlo] = useState(parseInt(localStorage.getItem("pocitadlo") || 0));
   
    function zvysPocitadlo() {
        nastavPocitadlo(pocitadlo + 1);
    }

    useEffect(() => {
        nastavPocitadlo(parseInt(localStorage.getItem("pocitadlo") || 0))
    }, []) // efekt se provede pouze při prvním renderování komponent

    useEffect(() => {
        localStorage.setItem("pocitadlo", pocitadlo);
    }, [pocitadlo]) // efekt se provede při změně stavu proměnné pocitadlo

    return (
        <>
            <h1>Tady je mé počítadlo</h1>
            <div id="content">
                <button onClick={zvysPocitadlo}>+</button>
                <span>{pocitadlo}</span>
                <button onClick={() => nastavPocitadlo(pocitadlo - 1)}>-</button>
            </div>
        </>
    )
}

export default Pocitadlo;