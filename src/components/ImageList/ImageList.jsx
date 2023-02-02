import React, { useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useDispatch } from "react-redux";
import { toggleFav } from "../../features/favSlice/favSlice";
import DownloadIcon from '@mui/icons-material/Download';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { saveAs } from "file-saver";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};
const ImageLists = ({ photos, isFav }) => {
    const dispatch = useDispatch()
    const [open, setOpen] = useState(false);
    const [selectPhoto, setSelectPhoto] = useState("")
    const handleOpen = (photo) => {
    setOpen(true);
    setSelectPhoto(photo)
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleDownload = (url) => {
        saveAs(url);
    }
    const handleFavorite = (photo) => {
        const data = {
            id: photo.id,
            title:photo.title,
            description: photo.alt_description,
            width: photo.width,
            height: photo.height,
            likes: photo.likes,
            urls: {
                full: photo.urls.full,
                thumb: photo.urls.thumb
            },
            date: new Date().toGMTString()
        }

        dispatch(toggleFav(data))

    }

    return (
        <ImageList sx={{ width: 320, height: 600 }}>

            {photos.map((photo) => (

                <ImageListItem key={photo.id}>
                    <img
                        src={`${photo.urls.thumb}?w=248&fit=crop&auto=format`}
                        srcSet={`${photo.urls.thumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        alt={photo.alt_description}
                        loading="lazy"
                        onClick={()=>handleOpen(photo)}
                    />

                    <ImageListItemBar
                        title={photo.title}
                        actionIcon={
                            <div>
                                <IconButton onClick={()=> handleDownload(photo.urls.full)}>
                                    <DownloadIcon style={{ color: "white" }} />
                                </IconButton>
                                <IconButton onClick={() => handleFavorite(photo)}>

                                    <StarBorderIcon style={{ color: "white" }}  />
                                </IconButton>
                            </div>
                        }
                    />
                </ImageListItem>
            ))}

            <Modal
                open={open}
                photo={selectPhoto}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                className="modal"
            >
                <Box sx={{ ...style, width: 250, borderRadius: 5, bgcolor:'#F5DFC9'}} className="modal-container">
                    <h2 id="parent-modal-title">My memories...</h2>
                    <TextareaAutosize
                    placeholder={selectPhoto.description} className="modal-textarea" sx={{height: 50}}/>
                    <p><strong>Date: </strong> {selectPhoto.date}</p>
                    <p><strong>Likes:</strong>   {selectPhoto.likes}</p>
                    <p><strong>Width: </strong>{selectPhoto.width}</p>
                    <p><strong>Height: </strong> {selectPhoto.height}</p>
                    
                   
                </Box>
            </Modal>

        </ImageList>
    );
};

export default ImageLists;

