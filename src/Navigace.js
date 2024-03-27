import { Link } from "react-router-dom";
import MuiLink from '@mui/material/Link';
import Button from "@mui/material/Button";

export default function Navigation(props) {

  return (
    <>
      <nav style={{color:props.barva}}>
      <Button color='inherit' variant="outlined" href='/router-material-api/#'>Home</Button>
        <Button color='inherit' variant="outlined" href="/router-material-api/#/pocitadlo">Počítadlo</Button>
        <Button color='inherit' variant="outlined" href='/router-material-api/#/eshop'>Eshop</Button>
        <Button color='inherit' variant="outlined" href='/router-material-api/#/oblibena-barva'>Oblíbená barva</Button>
        <Button color='inherit' variant="outlined" href='/router-material-api/#/vyber-vtip'>Vyber vtip</Button>
        <Button color='inherit' variant="outlined" href='/router-material-api/#/hra'>Hra s medvědem</Button>
        {/* <MuiLink variant="h5" href='/router-material-api/#'>Home</MuiLink>
        <MuiLink variant="h5" href="/router-material-api/#/pocitadlo">Počítadlo</MuiLink>
        <MuiLink variant="h5" href='/router-material-api/#/eshop'>Eshop</MuiLink>
        <MuiLink variant="h5" href='/router-material-api/#/oblibena-barva'>Oblíbená barva</MuiLink> */}
        {/* 
        <Link to="/">Home</Link>
        <Link to="/pocitadlo">Počítadlo</Link>
        <Link to="/eshop">Eshop</Link>
        <Link to="/oblibena-barva">Oblíbená barva</Link> 
        */}
      </nav>
    </>
  )
};