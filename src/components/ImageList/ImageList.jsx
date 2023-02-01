import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";


const ImageLists = ({photos}) => {
 

    // const addMyFavorite = (photo) => {
    //     const data = {
    //         id: photo.id,
    //         description: photo.alt_description,
    //         width: photo.width,
    //         height: photo.height,
    //         likes: photo.likes,
    //         urls: {
    //             full: photo.urls.full,
    //             thumb: photo.urls.thumb
    //         },
    //         date: new Date().getTime().toString()
    //     }
    //     dispatch(addFav(data))

    // }
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

                            <IconButton onClick={()=>console.log(photo)}>
                                <StarBorderIcon style={{ color: "white" }} />
                            </IconButton>
                        }
                    />
                </ImageListItem>
            ))}



        </ImageList>
    );
};

export default ImageLists;

