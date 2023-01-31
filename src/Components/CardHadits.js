import React from "react";

export default function CardHadits (props) {
  const {nomor, textArab, terjemahan} = props
  return (
      <div className="card bg-primary text-primary-content mb-2 h-45">
        <div className="card-body py-3 px-3">
          <h6 className="number-hadits">Nomor : {nomor}</h6>
          <p className="text-arab font-kitab">{textArab}</p>
          <hr/>
          <p>{terjemahan}</p>
        </div>
      </div>
  )
}