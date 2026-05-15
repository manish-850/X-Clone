import React, { useState } from 'react'

export const LoadingDataContext = React.createContext();
const LoadingContext = ({ children }) => {
    const [loading, setLoading] = useState(true)
  return (
    <LoadingDataContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoadingDataContext.Provider>
  )
}

export default LoadingContext