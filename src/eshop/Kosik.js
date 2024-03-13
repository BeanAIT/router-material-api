import Typography from "@mui/material/Typography";
import Polozka from "./Polozka";
import { Grid, Paper } from "@mui/material";

export default function Kosik(props) {

    const kosik = props.obsahKosiku;

    function cenaKosiku() {
        let soucet = 0;
        for (let zbozi of kosik) {
            soucet += zbozi.polozka.price * zbozi.mnozstvi;
        }
        return soucet;
    }

    return (
        <>
            <Typography variant="h5" gutterBottom>Cena košíku: {cenaKosiku()}</Typography>
            <Grid container spacing={4}>
                {
                    kosik.map(zbozi => (
                        <Grid item xs={3} key={zbozi.id}>
                            <Paper style={{padding: "10px"}}>
                                <Typography variant="h5" gutterBottom>Název: {zbozi.polozka.title}</Typography>
                                <Typography variant="h5" gutterBottom>Množství: {zbozi.mnozstvi}</Typography>
                                <button onClick={() => props.odebratPolozku(zbozi)}>Odebrat</button>
                                <Polozka data={zbozi.polozka}></Polozka>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </>
    );
}