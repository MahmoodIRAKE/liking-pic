import axios from "axios";

const baseUrl='https://dog.ceo/api/breeds/image/random'

export async function getDog(){
    let response=await axios.get(baseUrl);
    return response.data.message
} 