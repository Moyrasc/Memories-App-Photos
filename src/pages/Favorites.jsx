import React from 'react'
import { useSelector } from 'react-redux'
import ImageLists from '../components/ImageList/ImageList'
import { selectFav } from '../features/favSlice/favSlice'

const Favorites = () => {
    // const favsImages = useSelector(state=> state.favSlice.favImages)
    const favsImages = useSelector(selectFav)
    console.log(favsImages);

  return (
    <ImageLists photos={favsImages}/>
 
  )
}

export default Favorites