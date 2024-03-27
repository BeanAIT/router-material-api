import { Typography } from "@mui/material";

export default function Vtip(props) {

    const vtip = props.vtip;
    const barva = props.barva;

    return (
        <>
            {vtip != "" && <Typography variant='h6' style={{color:barva}}>{vtip}</Typography>}
        </>
    )
}