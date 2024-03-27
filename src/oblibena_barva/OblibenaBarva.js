import Typography from '@mui/material/Typography';
import BarevneOkno from './BarevneOkno';

export default function OblibenaBarva(props) {

    const barva = props.barva;
    const nastavBarvu = props.nastavBarvu;

    return (
        <>
            <Typography variant="h3" gutterBottom>Jaká je vaše oblíbená barva?</Typography>
            <input type='color' value={barva} onChange={(e) => {
                let vybranaBarva = e.target.value
                nastavBarvu(vybranaBarva)
                localStorage.setItem('oblibenaBarva', vybranaBarva)
            }
            }
            ></input>

            <BarevneOkno oblibenaBarva={barva} />
        </>
    )
}