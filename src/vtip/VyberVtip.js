import axios from "axios";
import { useEffect, useState } from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from "@mui/material";


export default function VyberVtip(props) {

    const vyberVtip = props.vyberVtip;
    const [vtipy, nastavVtipy] = useState([]);

    useEffect(() => {
        axios.get('https://official-joke-api.appspot.com/jokes/ten')
            .then(res => {
                console.log("Response received")
                nastavVtipy(res.data);
            })
            .catch((err) => console.log(err.message))
    }, []);

    return (
        <>
        <Typography variant="h5">Výběr vtipu</Typography>
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Id</TableCell>
                        <TableCell align="right">Type</TableCell>
                        <TableCell align="right">Setup</TableCell>
                        <TableCell align="right">Punchline</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {vtipy.map((vtip) => (
                        <TableRow key={vtip.id} onClick={() => vyberVtip(vtip.setup + " " + vtip.punchline)}>
                            <TableCell align="right">{vtip.id}</TableCell>
                            <TableCell align="right">{vtip.type}</TableCell>
                            <TableCell align="right">{vtip.setup}</TableCell>
                            <TableCell align="right">{vtip.punchline}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    )
}