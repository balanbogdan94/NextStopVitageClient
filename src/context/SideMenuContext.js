import {createContext} from 'react'
import React from 'react'

export const SideMenuContext = createContext();

const Test = ({ children }) => {  
    const [isOpen, setIsOpen] = React.useState(false)

    return <SideMenuContext.Provider value={{isOpen,setIsOpen}}>{children}</SideMenuContext.Provider>
  }

export default Test
