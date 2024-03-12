import { Outlet, Link } from "react-router-dom";
import MuiLink from '@mui/material/Link';

export default function Navigation() {
  return (
    <>
      <nav>
        <MuiLink variant="h5" href='/'>Home</MuiLink>
        <MuiLink variant="h5" href='/pocitadlo'>Počítadlo</MuiLink>
        <MuiLink variant="h5" href='/eshop'>Eshop</MuiLink>
      </nav>
      <Outlet />
    </>
  )
};