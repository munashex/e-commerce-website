import {useContext, createContext, ReactNode} from 'react'

const shoppingCartContext = createContext({})

export function ShoppingCart() {
return  useContext(shoppingCartContext)
}

interface shoppingCartProviderProps {
    children: ReactNode
}


export  function ShoppingCartProvider({children}: shoppingCartProviderProps){
    return (
        <shoppingCartContext.Provider value={{}}>
            {children}
        </shoppingCartContext.Provider>
    )
}