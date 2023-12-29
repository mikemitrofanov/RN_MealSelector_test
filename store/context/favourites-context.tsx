import {createContext, useState} from "react";

export const FavouritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {}
});

function FavouritesContextProvider({children}) {
  const [ids, setIds] = useState([]);
  
  const addId = id => setIds(current => [...current, id]);
  const removeId = id => setIds(current => current.filter(item => item !== id));
  
  const value = {
    ids,
    addFavourite: addId,
    removeFavourite: removeId
  }
  
  return (
    <FavouritesContext.Provider value={value}>{children}</FavouritesContext.Provider>
  )
}

export default FavouritesContextProvider;