import { useEffect, useState } from "react";
import Kosik from "./Kosik";
import Polozka from "./Polozka";
import axios from "axios";
import Typography from "@mui/material/Typography";

export default function Eshop() {

    const [polozky, nastavPolozky] = useState([]);
    const [kosik, nastavKosik] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
        .then(res => {
          console.log("Response received")
          nastavPolozky(res.data);
        })
        .catch((err) => console.log(err.message))
    }, []);

    function odebratPolozku(odebranaPolozka) {
        nastavKosik(starePolozky => {
            return starePolozky.filter(polozka => polozka !== odebranaPolozka)
          })
    }

    return (
        <>
        <Typography variant="h4" gutterBottom>Můj eshop</Typography>
            <Kosik obsahKosiku={kosik} odebratPolozku={odebratPolozku}></Kosik>
            {
                polozky.map(polozka => (
                    <>
                    <Typography variant="h5" gutterBottom>{polozka.title}</Typography>
                    <button onClick={() => nastavKosik([...kosik, polozka])}>Přidat</button>
                    <Polozka data={polozka}/>
                    </>
                ))
            }
        </>
    );
}