
import axios from 'axios';


export const searchAlbums =  async (text='', limit=10) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_FM_API_URL}`
  const payload = {
    method: 'album.search',
    api_key: process.env.NEXT_PUBLIC_FM_API_KEY,
    format: 'json',
    album: text,
    limit: limit
  }
  try {
    const res = await axios.get(baseUrl, {params: payload})
    const data = res.data && res.data.results
    return data
  } catch (error) {
    console.error(error)
  }
  return null
}
