import Card from '@mui/material/Card';
import { Typography } from '@mui/material';
import CardContent from '@mui/material/CardContent';

export default function BarevneOkno(props) {
    return (
        <Card variant="outlined" style={{width:"300px", backgroundColor:props.oblibenaBarva}}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} gutterBottom>
                    Moje oblibena barva
                </Typography>
            </CardContent>
        </Card>
    )
};