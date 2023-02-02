import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch } from 'react-redux'
import { orderFavorites, searchDescription } from '../../features/favSlice/favSlice'

const FilterButton =() => {
    const [inputValue, setInputValue] = useState("")
    const [orderByValue,setOrderByValue] = useState("")
    const dispatch = useDispatch()

    const handleChangeValue = (e) =>{
        setInputValue(e.target.value)
        dispatch(searchDescription(e.target.value))
    }
    const handleChangeSelect = (e) => {
        setOrderByValue(e.target.value)
        if (e.target.value === 'orderBy'){
            setInputValue('')
        }
        dispatch(orderFavorites(e.target.value))
    }
  return (
    <>
      <Box sx={{display: 'flex', justifyContent: 'center', gap: '24px', width: '100%', mt: 3}}>
          <input style={{width: '40%'}}  type="text" placeholder='Find your photos...' value={inputValue} onChange={handleChangeValue} className="input-search"/>
          <Box sx={{ width: '25%' }}>
            <FormControl sx={{width: '90%'}}>
                <InputLabel>Order By</InputLabel>
                <Select
                value={orderByValue}
                label="orderBy"
                onChange={handleChangeSelect}
                >
                <MenuItem value="orderBy">Order By...</MenuItem>
                <MenuItem value="width">Width</MenuItem>
                <MenuItem value="height">Height</MenuItem>
                <MenuItem value="likes">Likes</MenuItem>
                <MenuItem value="date">Date</MenuItem>
                </Select>
            </FormControl>
          </Box>
        </Box>
    </>
  )
}

export default FilterButton
