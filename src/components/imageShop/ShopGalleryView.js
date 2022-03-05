import React from 'react';
import "./ImageShop.css"
/* for masonry library 
import Masonry from 'react-masonry-component';
*/

// for materialIi

import GridList from '@material-ui/core/GridList';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ShopGalleryView(props) {
  // const masonryOptions = {
  //   fitWidth: true,
  //   columnWidth: 400,
  //   gutter: 30,
  //   itemSelector: ".photo-item",
  // };

  return (
    <GridList cellHeight={400} >
      {
        props.photoList.length > 0 &&
        <div className="image-container" style={{width: "auto", height: "auto"}}>
          <ImageList variant="masonry" cols={props.imagePerCol} gap={props.imageGap}>
            {
              props.photoList.map((displayImage) => (
                <ImageListItem className = "photo-item-ui" key={displayImage.id}>
                  <img
                    src={`${displayImage.urls.regular}?w=248&fit=crop&auto=format`}
                    srcSet={`${displayImage.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={displayImage.alt_description}
                    loading="fast"
                    onClick={() => props.showPopUpImage(displayImage.urls.regular)}
                  />
                </ImageListItem>
              ))
            }
          </ImageList>
        </div>
      }

    </GridList>


    // <Masonry
    //   className={"photo-list"}
    //   elementType={"ul"}
    //   options={masonryOptions}
    //   disableImagesLoaded={false}
    //   updateOnEachImageLoad={false}
    // >
    //   {
    //     props.photoList.length > 0 &&
    //     <div className="image-container" style={{ width: "auto", height: "auto" }}>
    //       {
    //         props.photoList.map((displayImage) => (
    //           <li className={`photo-item`}>
    //             <img
    //               src={`${displayImage.urls.regular}?w=248&fit=crop&auto=format`}
    //               srcSet={`${displayImage.urls.regular}?w=248&fit=crop&auto=format&dpr=2 2x`}
    //               alt={displayImage.alt_description}
    //               loading="fast"
    //             />
    //           </li>
    //         ))
    //       }
    //     </div>
    //   }
    // </Masonry>
  )
}