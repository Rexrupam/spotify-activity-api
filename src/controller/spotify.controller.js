import axios from "axios"
import querystring from "querystring"
const scope = 'user-read-private user-read-email'

const queryParams = querystring.stringify({
  response_type: 'code',
  client_id: process.env.client_id,
  scope: scope,
  redirect_uri: process.env.redirect_uri
})

export const login = async(req,res)=>{
 try {
   res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
 } catch (error) {
    return res.status(500).json({error})
 }
}

export const callback = async(req,res)=>{
 const code = req.query.code || null;
  try{
     const response = await axios.post('https://accounts.spotify.com/api/token',
      querystring.stringify({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: process.env.redirect_uri,
        client_id: process.env.client_id,
        client_secret: process.env.client_secret
      }),
       {
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    })
    return res.json({message: "Successfully login into spotify"})
  }catch(error){
     return res.status(500).json({error: error.message})
  }
}

const stopPlayback = async (accessToken) => {
  try {
    await axios.put('https://api.spotify.com/v1/me/player/pause', {}, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    console.log('Playback paused.');
  } catch (error) {
    console.error('Error pausing playback:', error.response?.data || error.message);
  }
};

export const healthCheck=async(req,res)=>{
  return res.json({message: 'ok'})
}

