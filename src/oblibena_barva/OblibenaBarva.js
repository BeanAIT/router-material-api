import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import BarevneOkno from './BarevneOkno';

export default function OblibenaBarva() {

    const [barva, nastavBarvu] = useState('');
    const [zobraz, nastavZobrazeni] = useState(false);

    return(
        <>
            <Typography variant="h3" gutterBottom>Jaká je vaše oblíbená barva?</Typography>
            <input type='color' value={barva} onChange={(e) => nastavBarvu(e.target.value)}></input>
            <Button onClick={() => nastavZobrazeni(!zobraz)}>OK</Button>

            {zobraz && <BarevneOkno oblibenaBarva={barva}/>}
        </>
    )
}