import React from 'react'

const UserContext = React.createContext(false)

export const AppUserProvider = UserContext.Provider
export const AppUserConsumer = UserContext.Consumer
