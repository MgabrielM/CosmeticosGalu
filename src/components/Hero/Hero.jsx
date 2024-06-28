import React from 'react'
import heroAvon from "../../../public/images/hero-avon.jpg"
import heroNaturaUno from "../../../public/images/hero-natura-uno.jpg"
import heroNaturaDos from "../../../public/images/hero-natura-dos.jpg"
import heroSaphirus from "../../../public/images/hero-saphirus.jpg"

export const Hero = () => {
  return (
    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={heroNaturaUno} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={heroNaturaDos} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={heroAvon} class="d-block w-100" alt="..." />
        </div>
        <div class="carousel-item">
          <img src={heroSaphirus} class="d-block w-100" alt="..." />
        </div>
    </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}
