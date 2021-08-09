import { createContext, useEffect, useState } from "react";


export const PaletteContext = createContext()


export const PaleteProvider = ({children}) => {
    
    
    const [selectedPalette, setSelectedPalette] = useState()

    console.log(selectedPalette)
    return(
        <PaletteContext.Provider value={{setSelectedPalette, selectedPalette}}>
            {children}
        </PaletteContext.Provider>
    )
}