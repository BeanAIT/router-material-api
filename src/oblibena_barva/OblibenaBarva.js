import Typography from '@mui/material/Typography';
import BarevneOkno from './BarevneOkno';

export default function OblibenaBarva(props) {

    const barva = props.barva;
    const nastavBarvu = props.nastavBarvu;

    return(
        <>
            <Typography variant="h3" gutterBottom>Jaká je vaše oblíbená barva?</Typography>
            <input type='color' value={barva} onChange={(e) => nastavBarvu(e.target.value)}></input>

            <BarevneOkno oblibenaBarva={barva}/>
        </>
    )
}