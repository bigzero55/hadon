import React, { useState, useEffect } from "react";
import CardHadits from "../Components/CardHadits";
import BottomBTN from "../Components/BottomBtn";
import AlertRange from "../Components/AlertRange";

export default function OpenKitab() {
  const [id, setID] = useState(localStorage.getItem("id-book"));
  const [jumlah, setJumlah] = useState("1000");
  const [judul, setJudul] = useState("bukhori");
  const [rangeMin, setRangeMin] = useState(1);
  const [rangeTo, setRangeTo] = useState(10);
  const [range, setRange] = useState("1-10");
  const [hadits, setHadits] = useState([]);
  const [aletRange, setAlertRange] = useState(false)

  useEffect(() => {
    getHadits(rangeMin + "-" + rangeTo);
  }, []);

  const getHadits = (rangew) => {
    setHadits([])
    fetch(`https://api.hadith.gading.dev/books/${id}?range=${rangew}`)
      .then((res) => res.json())
      .then((doc) => {
        const hadiths = doc.data;
        const hadithsArray = hadiths.hadiths;
        setHadits(hadithsArray);
        setJudul(hadiths.name);
        setJumlah(hadiths.available);
      });
  };

  function Next() {
    setRangeMin(rangeMin + 10);
    setRangeTo(rangeTo + 10);
    setRange(rangeMin + "-" + rangeTo);
    getHadits(rangeMin + "-" + rangeTo);
  }

  function Back() {
    setRangeMin(rangeMin - 10);
    setRangeTo(rangeTo - 10);
    setRange(rangeMin + "-" + rangeTo);
    getHadits(rangeMin + "-" + rangeTo);
  }

  function Search () {
    let rang = rangeTo - rangeMin
    if (rang <= 20) {
      getHadits(rangeMin + "-" + rangeTo);
      document.querySelector('#hideen').click()
    } else {
      setAlertRange(true)
    }
  }

  return (
    <div className="py-20 px-1">
      {hadits.map((hadits, key) => {
        return (
          <CardHadits
            nomor={hadits.number}
            textArab={hadits.arab}
            terjemahan={hadits.id}
            key={key}
          />
        );
      })}
      <BottomBTN 
        onBack={Back} 
        onNext={Next} 
        book={judul} 
        range={rangeMin + '-' + rangeTo} 
      />

      <input type="checkbox" id="search" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <AlertRange 
            show={aletRange} 
          />
          <h3 className="font-bold text-lg mt-2">{judul}</h3>
          <p className="py-4">Berjumlah {jumlah} hadits</p>
          <p>Cari berdasarkan nomor hadits</p>
          <div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Dari {rangeMin}</span>
                <span className="label-text-alt">Sampai {rangeTo}</span>
              </label>
              <span className="w-full">
                <input
                  type="number"
                  placeholder="dari"
                  className="input input-bordered w-32 max-w-xs float-right"
                  onChange={e => setRangeTo(Number(e.target.value))}
                  onFocus={() => setAlertRange(false)}
                />
                <input
                  type="number"
                  placeholder="sampai"
                  className="input input-bordered w-32 max-w-xs float-left"
                  onChange={e => setRangeMin(Number(e.target.value))}
                  onFocus={() => setAlertRange(false)}
                />
              </span>
            </div>
          </div>
          <div className="w-full mt-2.5">
            <label
              htmlFor="search"
              className="btn float-left"
              onClick={() => console.log("keuar")}
            >
              Tutup
            </label>
                <label
                  htmlFor="search"
                  className="btn btn-primary btn-ghost"
                  id="hideen"
                >
                </label>
            <label
              className="btn btn-primary float-right"
              onClick={Search}
            >
              Cari
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
