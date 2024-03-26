import { Link } from "react-router-dom";
import MuiLink from '@mui/material/Link';

export default function Navigation() {
  return (
    <>
      <nav>
        <MuiLink variant="h5" href='/router-material-api/#'>Home</MuiLink>
        <MuiLink variant="h5" href="/router-material-api/#/pocitadlo">Počítadlo</MuiLink>
        <MuiLink variant="h5" href='/router-material-api/#/eshop'>Eshop</MuiLink>
        <MuiLink variant="h5" href='/router-material-api/#/oblibena-barva'>Oblíbená barva</MuiLink>
        <Link to="/">Home</Link>
        <Link to="/pocitadlo">Počítadlo</Link>
        <Link to="/eshop">Eshop</Link>
        <Link to="/oblibena-barva">Oblíbená barva</Link>
      </nav>
    </>
  )
};