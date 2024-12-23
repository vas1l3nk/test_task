import {Outlet} from "react-router-dom";
import {FC} from "react";

const MainLayout: FC = () => {
    return (
        <div className="layout">
            <div className="content">
                <Outlet/>
            </div>
        </div>
    )
}

export default MainLayout