import React, { createContext, useState, useContext } from 'react'
import { noOp } from 'libs/utils'

export interface AppContextProps {
  firstName?: string
  lastName?: string
  country?: string
  email?: string
  phoneNumber?: string
  passport?: string
  nationality?: string
  terms?: string
  flightNumber?: string
}

export const initialAppData: AppContextProps = {}

export const AppDataContext = createContext<{
  appData?: AppContextProps
  setAppData: React.Dispatch<React.SetStateAction<AppContextProps>>
}>({
  setAppData: noOp,
  appData: initialAppData,
})

export const AppDataProvider: React.FC = ({ children }) => {
  const [appData, setAppData] = useState(initialAppData)

  return (
    <AppDataContext.Provider
      value={{
        setAppData: (params) => {
          setAppData({
            ...appData,
            ...params,
          })
        },
        appData,
      }}
    >
      {children}
    </AppDataContext.Provider>
  )
}

export const useAppData = () => {
  return useContext(AppDataContext)
}
