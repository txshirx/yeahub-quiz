import { Provider } from "react-redux"
import { store } from "../providers/store/store"

export const AppLayout = ({ children } : { children: React.ReactNode }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}