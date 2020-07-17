
import axios from 'axios';


export const searchArtist =  async (text='') => {
  const artistSearchUrl = `${process.env.FM_API_URL}`
  const payload = {
    method: 'artist.search',
    api_key: process.env.FM_API_KEY,
    format: 'json',
    artist: text,
    limit: 10
  }
  try {
    const res = await axios.get(artistSearchUrl, {params: payload})
    return res
  } catch (error) {
    console.error(error)
  }
  return null
//   return res.data.map(
//     ({id, login, avatar_url,}) => ({ id, login, avatar_url, } as UserEntity)
//   );
}
