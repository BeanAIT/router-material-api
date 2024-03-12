import Typography from "@mui/material/Typography";
import Polozka from "./Polozka";

export default function Kosik(props) {

    const kosik = props.obsahKosiku;

    function cenaKosiku() {
        let soucet = 0;
        for (let polozka of kosik) {
            soucet += polozka.price;
        }
        return soucet;
    }

    return(
        <>
            <Typography variant="h5" gutterBottom>Cena košíku: {cenaKosiku()}</Typography>
            {
                kosik.map(polozka => (
                    <>
                    <Typography variant="h5" gutterBottom>{polozka.title}</Typography>
                    <button onClick={() => props.odebratPolozku(polozka)}>Odebrat</button>
                    <Polozka data={polozka}/>
                    </>
                ))
            }
        </>
    );
}