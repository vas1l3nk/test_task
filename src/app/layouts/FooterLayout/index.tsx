import {Outlet} from "react-router-dom";
import {FC} from "react";
import Footer from "@/widgets/Footer/ui";
import './styles.scss'

const FooterLayout: FC = () => {
    return (
        <div className="layout">
            <div className="content">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}

export default FooterLayout