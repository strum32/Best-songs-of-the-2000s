import React from 'react'
import { Carousel, Image } from 'react-bootstrap'
import { Player } from "video-react";
import './SongCarousel.css'

export default function songCarousel() {
  return (
    <Carousel fade pause="false">
    <Carousel.Item className="img-size">
      <Player
          url="https://www.youtube.com/watch?v=4m1EFMoRFvY&list=RD4m1EFMoRFvY&start_radio=1&t=10"
          onReady='true'
          height="90vh"
          width="100vw"
        />
    </Carousel.Item>
    <Carousel.Item className="img-size">
      <img
      className="img-size"
      src="https://media.pitchfork.com/photos/5e3857d8252de300089028fa/2:1/w_2560%2Cc_limit/Shakira-Jennifer-Lopez.jpg"
      alt="photo 2"
    />
    </Carousel.Item>
    <Carousel.Item className="img-size">
      <img
      className="img-size"
      src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2020%2F07%2Fusher-i-cry-single-track-song-music-video-black-lives-matter-racism-donation-release-watch-stream-0tw.jpg?w=960&cbr=1&q=90&fit=max"
      alt="photo 3"
    />
    </Carousel.Item>
    <Carousel.Item className="img-size">
      <img
      className="img-size"
      src="https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3456,w_5184,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/justin-timberlake_wa5gc8.jpg"
      alt="photo 4"
    />
    </Carousel.Item>
    <Carousel.Item className="img-size">
    <img
      className="img-size"
      src=""
      alt="photo 5"
    />
    </Carousel.Item>
  </Carousel>
    // https://api.time.com/wp-content/uploads/2017/07/kids-singing-beyonce.jpg
  );
}
