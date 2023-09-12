import axios from 'axios';
import React, { createContext, useState } from 'react'

export const AppContext = createContext() ;

function AppContextProvider({children}) {
    const [randomGifUrl , setRandomGifUrl] = useState('https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1') ; 
    const [searchedGif , setSearchedGif] = useState('https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1');
    const [randomLoading , setRandomLoading ] = useState(false ) ;
    const [searchLoading , setSearchLoading ] = useState(false ) ;
    

    const randomGifGenerator = async()=>{
      setRandomLoading(true ) ;
      await axios.get('https://api.giphy.com/v1/gifs/random?api_key=Srmk8yKELNkpaoYLivHDaM6hwjxBHhCR&tag=&rating=g')
      .then((response) => setRandomGifUrl(response.data.data.images.original.url) )
      setRandomLoading(false) ;
      
      
    }


    const searchedGifGenerator = async(tag) =>{
      if(!tag){ alert('Search something ') ; return ;}
      setSearchLoading(true) ;
      let i = Math.floor(Math.random() * 25) ;
      await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=Srmk8yKELNkpaoYLivHDaM6hwjxBHhCR&q=${tag}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`)
                  .then(response => setSearchedGif(response.data.data[i].images.original.url)) ;

                  setSearchLoading(false ) ;

    }
    
    const value ={randomGifUrl , randomGifGenerator , searchedGif , searchedGifGenerator  , randomLoading , searchLoading }
    
  return (
    <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
  )
}

export default AppContextProvider ;