import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch, useSelector } from "react-redux";
import { addFav, selectFav } from "../../features/favSlice/favSlice";
import { apiGetPhotos, selectImage } from "../../features/imgSlice/imgSlice";

const ImageLists = () => {

const [selectedImg, setSelectedImg] = useState('')
const dispatch = useDispatch();
const photos = useSelector(selectImage)
const favImg = useSelector(selectFav)

useEffect(()=>{
    dispatch(apiGetPhotos())
},[dispatch])
// const iconColor = () => {
//     if(favImg.find(fav => fav.id === selectedImg.id)) return 'red'
//   } 

  return (
    <ImageList sx={{ width: 320, height: 600 }}>
      {photos.map((photo) => (
        <ImageListItem key={photo.id}>
          <img
            src={`${photo.urls.thumb}?w=248&fit=crop&auto=format`}
            srcSet={`${photo.urls.thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={photo.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={photo.title}
            actionIcon={
              <IconButton>
                <StarBorderIcon style={{color: "white"}}/>
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImageLists;

