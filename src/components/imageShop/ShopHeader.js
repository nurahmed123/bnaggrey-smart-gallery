import React from 'react'

export default function ShopHeader(props) {
  return (
    <div className="heading text-center my-5" style={{fontSize: "2rem", fontWeight: "600"}}>
      <h2>{props.title} <em style={{fontWeight: "100"}} >{props.searchValue}</em> </h2>
    </div>
  )
}
