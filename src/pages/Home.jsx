import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ImageLists from "../components/ImageList/ImageList";
import SearchBar from "../components/SearchBar/SearchBar";
import { apiGetPhotos, selectImage } from "../features/imgSlice/imgSlice";

const Home = () => {
const photos = useSelector(selectImage)
const dispatch = useDispatch()
useEffect(() => {
  dispatch(apiGetPhotos())
}, [dispatch])

  return (
    <>
      <SearchBar />
      <ImageLists photos={photos}/>
      
      </>
  );
};

export default Home;
