import React, {useEffect, useState} from "react";
import CardJudulKitab from "../Components/CardJudulKitab";

export default function Home () {
  const [judulKitab, setJudul] = useState([])

  useEffect(() => {
    fetch('https://api.hadith.gading.dev/books')
    .then(res => res.json())
    .then(doc => {
      console.log(doc.data)
      setJudul(doc.data)
    })
  }, [])
  return (
    <div className="px-1 pt-20">
      {judulKitab.map((judul, key) => {
        return (
          <CardJudulKitab 
            Kitab={judul.name}
            Desc={judul.available + " "+ "Hadits"}
            idBook={judul.id}
            key={key}
          />
        )
      })}
    </div>
  )
}