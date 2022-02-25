import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import axios from 'axios'
import ShopInput from './ShopInput';
import ShopGalleryView from './ShopGalleryView';
import ScaleLoader from "react-spinners/ScaleLoader";



export default function ImageShop(props) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true)

  const fetchData = async () => {
    setLoading(true)
    props.setProgress(15);
    const response = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=office&per_page=${props.pageItems}&client_id=${props.apiKey}`)
    const data = await response.data;
    setPhotos(data);
    console.log(data);
    setLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])
  

  return (
    <Container>
      <ShopInput />
      {loading
        ?
        <div className="text-center flex justify-center items-center" style={{ height: "100vh" }}>
          <ScaleLoader
            color={"#36D7B7"}
            size={50}
          />
        </div>
        :
        <ShopGalleryView/>
      }
    </Container>
  )
}
