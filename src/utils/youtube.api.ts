import axios from 'axios'

export async function requestVideosApi(url){
    return await axios.get(url)
        .then(response => {
            if(response.status == 200)
                return response.data
            else
                return ''
        })
        .catch(err => {
            throw new Error(err)
        })
    
}