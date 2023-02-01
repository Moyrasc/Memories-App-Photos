const {REACT_APP_API_KEY, REACT_APP_URL, REACT_APP_RANDOM} = process.env;


const getPhotos = async (query) => {
    console.log(REACT_APP_API_KEY)
    if(!query || query === ""){
        const response = await fetch(`${REACT_APP_RANDOM}?client_id=${REACT_APP_API_KEY}&count=20`) 
        const data = await response.json()
        return [...data]
    }else {
        const response = await fetch(`${REACT_APP_URL}&client_id=${REACT_APP_API_KEY}&query=${query}&per_page=15`)
        const data = response.json()
        return [data.results]
    }
}

export default getPhotos;