import React from "react";

const BottomBTN = (props) => {
  const {onBack, onNext, book, range} = props 

  return (
    <div className="bottom">
      <div className="btn-group btn-group-vertical lg:btn-group-horizontal justify-center">
        <button className="btn btn-sm" onClick={onBack}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="20px" height="20px" viewBox="0 0 16 16" id="arrow-left-16px">
            <path id="Path_172" data-name="Path 172" d="M-7.5,8H-21.293l6.647-6.646a.5.5,0,0,0,0-.708.5.5,0,0,0-.708,0l-7.5,7.5a.518.518,0,0,0-.109.163.505.505,0,0,0,0,.382.518.518,0,0,0,.109.163l7.5,7.5A.5.5,0,0,0-15,16.5a.5.5,0,0,0,.354-.146.5.5,0,0,0,0-.708L-21.293,9H-7.5A.5.5,0,0,0-7,8.5.5.5,0,0,0-7.5,8Z" transform="translate(23 -0.5)"/>
          </svg>
        </button>
        <label className="btn btn-active d-inline btn-sm" htmlFor="search">
          <small className=""></small>
        </label>
        <button className="btn btn-sm" onClick={onNext}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="#ffffff" width="20px" height="20px" viewBox="0 0 16 16" id="arrow-right-16px">
            <path id="Path_171" data-name="Path 171" d="M35.962,8.691a.505.505,0,0,0,0-.382.518.518,0,0,0-.109-.163l-7.5-7.5a.5.5,0,0,0-.708.708L34.293,8H20.5a.5.5,0,0,0,0,1H34.293l-6.647,6.646a.5.5,0,0,0,.708.708l7.5-7.5A.518.518,0,0,0,35.962,8.691Z" transform="translate(-20 -0.5)"/>
          </svg>
        </button>
      </div>
    </div>
    
  )
}

export default BottomBTN