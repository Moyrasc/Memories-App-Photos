const APIKEY = process.env.API_KEY;
const URL = process.env.APP_URL;
const RANDOM = process.env.APP_RANDOM;

const getPhotos = (query) => {
    if(!query || query === ""){
        return fetch(`${RANDOM}?client_id=${APIKEY}&count=20`) 
        .then(response => response.json())
        .then(data => data)
    }else {
        return fetch(`${URL}&client_id=${APIKEY}&query=${query}&per_page=15`)
        .then (response => response.json())
        .then (data => data.results)
    }
}

export default getPhotos;