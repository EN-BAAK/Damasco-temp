import React, { createContext, useContext, useState } from 'react'
import ImageViewer from '../layout/ImageViewer'

interface Props {
  children: React.ReactNode
}

type AppContext = {
  showImage: (img: string) => void
}

const AppContext = createContext<AppContext | undefined>(undefined)

const AppContextProvider = ({ children }: Props): React.JSX.Element => {
  const [img, setImage] = useState<string>("")

  return (
    <AppContext.Provider
      value={{
        showImage: (img) => {
          console.log("Enter")
          setImage(img)
        }
      }}
    >
      {img && (
        <ImageViewer img={img} onClose={() => setImage("")} />
      )}
      {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
