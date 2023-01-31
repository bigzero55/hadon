import React from "react";
import IconWa from "../Icons/IconWA";

function About () {
  return (
    <div className="pt-20 px-3 bg-gray-500 abot">
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="https://1.bp.blogspot.com/-bFRiwXuHN6s/WU04yCZtuFI/AAAAAAAAAfs/h18igfEIcEwHhkxeq-vP_jdEI5bXBIJqwCLcBGAs/s1600/Pembagian-Lemari-yang-Benar.jpg" alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Hadits Online</h2>
          <p>Berisi kumpulan kitab - kitab hadits versi online diantaranya Imam Muslim, 
            Imam Bukhori, Abu Dawud, At Tirmidzi, Imam Ahmad, Imam Darimi, Ibnu Majah, Imam Malik,
            dan Imam Nasa'i
          </p>
          <hr></hr>
          <p>Sumber Penyedia Back End : SUTAN GADING F NASUTION</p>
          <p>Front End: ABDUL ROJAK</p>
          <div className="card-actions">
            <div className="w-full items-center">
              <a href="https://abdulrojak.web.app" className="btn btn-primary btn-sm">Profil Developer</a>
            </div>
            <div className="w-full items-center"> 
            <a href="https://wa.me/+6283811514761" className="btn btn-primary btn-sm">
              <IconWa />  Hubungi
            </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;