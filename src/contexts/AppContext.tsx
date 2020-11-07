import React, { createContext, useState, useContext, useEffect } from 'react'
import { noOp } from 'libs/utils'
import constants from 'libs/constants'

export interface AppContextProps extends Record<any, any> {
  firstName?: string
  lastName?: string
  country?: string
  email?: string
  phoneNumber?: string
  passport?: string
  nationality?: string
  terms?: string
  flightNumber?: string
  acceptTerms?: boolean
  residence_address?: string
  residence_city?: string
  residence_country?: string
  passport_expiry_date?: string
  birth_date?: string
  birth_place?: string
  passport_date_issue?: string
  passport_location_issue?: string
}

export const initialAppData: AppContextProps = {}

export const AppDataContext = createContext<{
  appData: AppContextProps
  setAppData: React.Dispatch<React.SetStateAction<AppContextProps>>
  resetAppData: Function
}>({
  setAppData: noOp,
  appData: initialAppData,
  resetAppData: noOp,
})

const getStorageData = () => {
  const storedData = localStorage.getItem(constants.storageKey.appData)
  return storedData && JSON.parse(storedData)
}

export const AppDataProvider: React.FC = ({ children }) => {
  const [appData, setAppData] = useState<AppContextProps>(
    getStorageData() || initialAppData
  )

  useEffect(() => {
    if (appData.flightNumber) {
      localStorage.setItem(
        constants.storageKey.appData,
        JSON.stringify(appData)
      )
    }
  }, [appData])

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
        resetAppData: () => {
          setAppData({})
          // clear the persisted data in local storage
          localStorage.removeItem(constants.storageKey.appData)
        },
      }}
    >
      {children}
    </AppDataContext.Provider>
  )
}

export const useAppData = () => {
  return useContext(AppDataContext)
}
