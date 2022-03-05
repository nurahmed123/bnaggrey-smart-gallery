import React, { useEffect, useState, useRef } from 'react'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { debounce } from "lodash"
import ShopHeader from './ShopHeader';
import ShopGalleryView from './ShopGalleryView';
import Grid from "@material-ui/core/Grid";
import BounceLoader from "react-spinners/BounceLoader";
import Modal from 'react-modal';
import Nav from "../Nav";
import { saveAs } from 'file-saver';
import "./ImageShop.css"


export default function ImageShop(props) {
  const [searchValue, setSearchValue] = useState("")
  const searchValueRef = useRef(searchValue)
  const [photos, setPhotos] = useState([])
  const photosRef = useRef(photos)
  const [fetching, setFetching] = useState(false)
  const fetchingRef = useRef(fetching)
  const [title, setTitle] = useState("Welcome to Smart gallery - Bnnaggery")
  const [imagePreviewUrls, setImagePreviewUrls] = useState(null)
  const [imagePerCol, setImagePerCol] = useState(3)
  const [imageGap, setImageGap] = useState(10)
  Modal.setAppElement('#root');

  function checkMediaQuery() {
    console.log(window.innerWidth)
    if (window.innerWidth <= 460) {
      setImagePerCol(1)
    }
    if (window.innerWidth < 800 && 459 <= window.innerWidth ) {
      setImagePerCol(2)
    }
    if (window.innerWidth >= 800 && 800 <= window.innerWidth) {
      setImagePerCol(3)
    }
  }

  function fetchData(query, page = props.page) {
    checkMediaQuery()
    props.setProgress(35)
    setFetching(true);
    fetchingRef.current = true;
    return new Promise((resolve, reject) => {
      props.setProgress(45)
      props.unsplash.search.getPhotos({
        query,
        page,
        perPage: props.perPage,
      }).then(results => {
        setFetching(false);
        props.setProgress(75)
        fetchingRef.current = false;
        resolve(results.response.results.map(results => results));
        props.setProgress(100)
      })
    })
  }

  useEffect(() => {
    searchValueRef.current = searchValue;
    debounce(() => {
      setPhotos([])
      if (searchValue !== "") {
        if (photos.length === 0 || searchValue === "") {
          setTitle(`Nothing is found for `);
        } else {
          setTitle(`Results for `);
        }
      } else {
        setTitle("Welcome to Smart gallery - Bnnaggery");
      }
      fetchData(searchValue === "" ? "random" : searchValue, props.page).then(photos => {
        setPhotos(photos);
        photosRef.current = photos
      });
    }, 1000)();
  }, [searchValue])

  function handleScroll(event) {
    const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;
    const isBottom = scrollHeight - scrollTop <= clientHeight;
    if (isBottom && !fetchingRef.current) {
      fetchData(searchValueRef.current, photosRef.current.length / props.perPage + 1).then(newPhoto => {
        photosRef.current = [...photosRef.current, ...newPhoto]
        setPhotos(photosRef.current)
      })
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const showPopUpImage = (imageUrl) => {
    props.setProgress(75)
    setImagePreviewUrls(imageUrl);
    props.setProgress(100)
  }

  const popupModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      height: "90vh",
      width: "90vw",
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const previewClose = () =>{
    setImagePreviewUrls(null);
  }

  const downloadPreviewImaged = () =>{
    saveAs(imagePreviewUrls, `bong-programiz-image-${new Date().toUTCString()}.jpg`)
  }

  const previewImageLoading = () =>{

  }


  return (
    <>
      <Nav searchValue={searchValue} fetching={fetching} setSearchValue={setSearchValue} />
      <Container>
        <Modal isOpen={!!imagePreviewUrls} onRequestClose={() => setImagePreviewUrls(null)} style={popupModalStyles}>
          <div className="img-box">
            <div className="loadingPreviewImage">
              <img src={imagePreviewUrls} onLoad={previewImageLoading} alt="" />
            </div>
          </div>
          <Grid container justifyContent="center" className="mt-4 previewImageContainer">
            <a size="medium" variant="contained" href={imagePreviewUrls} target="_blank" rel="noreferrer noopener">Preview</a>
            <Button className="previewBtn" size="medium" variant="contained" onClick={downloadPreviewImaged} >Download</Button>
            <Button className="previewBtn" size="medium" onClick={previewClose} variant="contained">Ok</Button>
          </Grid>
        </Modal>
        <ShopHeader title={title} searchValue={searchValue} />
        <ShopGalleryView setImageGap = {setImageGap} photoList={photos} setTitle={setTitle} showPopUpImage={showPopUpImage} imagePerCol = {imagePerCol} imageGap = {imageGap} />

        <div>
          {
            fetching &&
            <div className="text-center flex justify-center items-center" style={{ height: "100px" }}>
              <BounceLoader
                color={"#36D7B7"}
                size={50}
              />
            </div>
          }
        </div>
      </Container>
    </>
  )
}
