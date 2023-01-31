import React  from "react";
import { Link } from "react-router-dom";


export default function CardJudulKitab (props) {
  const {Kitab, Desc, img, idBook} = props;

  function GoTo(id){
    localStorage.setItem('id-book', id)
  }

  return (
    <div className="card bg-primary text-primary-content mb-2 h-45">
      <div className="card-body">
        <h2 className="card-title">{Kitab}</h2>
        <p>{Desc}</p>
        <div className="card-actions justify-end">
          <Link to="hadits" onClick={() => GoTo(idBook)}>
            <button className="btn">Buka</button>
          </Link>
        </div>
      </div>
    </div>
  )
}