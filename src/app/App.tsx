import { Navbar } from '@/widgets/Navbar';
import './styles/index.scss';
import AppRouter from "@/app/providers/router/ui/AppRouter";
import {StoreProvider} from "@/app/providers/storeProvider/ui/StoreProvider";

export function App() {

    return (
        <StoreProvider>
            <Navbar />
            <div className={'content-page'}>
                <AppRouter />
            </div>
        </StoreProvider>
    );
}
