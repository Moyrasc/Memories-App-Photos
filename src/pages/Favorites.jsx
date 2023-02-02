import React from 'react'
import { useSelector } from 'react-redux'
import FilterButton from '../components/FilterButton/FilterButton'
import ImageLists from '../components/ImageList/ImageList'
import { selectFav } from '../features/favSlice/favSlice'

const Favorites = () => {
    // const favsImages = useSelector(state=> state.favSlice.favImages)
    const favsImages = useSelector(selectFav)
    console.log(favsImages);

  return (
    <>
    <FilterButton/>
    <ImageLists photos={favsImages}/>
    </>
  )
}

export default Favorites