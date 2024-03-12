import Typography from "@mui/material/Typography";

export default function Polozka(props) {

    const polozka = props.data;

    return(
        <>
            <Typography variant="h7" gutterBottom>Cena: {polozka.price}</Typography>
            <img src={polozka.image} style={{width:"100px"}}></img>
        </>
    );
}