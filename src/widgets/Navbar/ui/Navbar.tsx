import { memo } from 'react';
import cls from './Navbar.module.scss';
import {useNavigate} from "react-router-dom";
import {RoutePath} from "@/shared/config/routeConfig";

export const Navbar = memo(() => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate(RoutePath["notes-list"])
    }
    return <nav className={cls.navbar}>
        <div className={cls.navbar__title} onClick={handleNavigate}>
            Notes app
        </div>
    </nav>;
});

Navbar.displayName = 'Navbar';
