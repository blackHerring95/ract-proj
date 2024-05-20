import { Outlet } from "react-router-dom"
import Header2 from "./header2"

const Layout = () => {
    return <>
        <Header2 name="Damir" tagline="D." />
        <Outlet />
    </>
}

export default Layout;