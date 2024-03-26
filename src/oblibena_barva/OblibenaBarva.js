import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import BarevneOkno from './BarevneOkno';

export default function OblibenaBarva() {

    const [barva, nastavBarvu] = useState('');

    return(
        <>
            <Typography variant="h3" gutterBottom>Jaká je vaše oblíbená barva?</Typography>
            <input type='color' value={barva} onChange={(e) => nastavBarvu(e.target.value)}></input>

            <BarevneOkno oblibenaBarva={barva}/>
        </>
    )
}