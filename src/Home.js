import React from "react";
import "./Home.css";
import Product from "./Product";
import { useStateValue } from "./StateProvider";

function Home() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="home">
      <div className="home__container">
        <div className="home__imageSlider">
          <div className="home__images">
            <img
              className="home__image1"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt=""
            />
          </div>
        </div>

        <div className="home__row">
          <Product
            id={63125732}
            title="KitchenCraft World of Flavours Mexican Mortar and Pestle Set, Granite, 20 cm Molcajete"
            price={20.24}
            image="https://m.media-amazon.com/images/I/81Z1kyiUPHL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            id={74236843}
            title="Bunny Lamp for Kids, LED Eye Protection Reading Lamp, Rechargeable Energy Saving Bedside Lamp, Lovely Lamp, Feeding Light, Night Light, Dimmable Touch Sensor Table Lamp, Cartoon Style (Pink)"
            price={17.99}
            image="https://m.media-amazon.com/images/I/51OK+azVsmS._AC_SY200_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={85455245}
            title="Mini Solid Wood Table Lights Retro Wooden Base Desk Lamps for Bedroom, Living Room,Baby Room, College Dorm,Bookcase"
            price={19.99}
            image="https://m.media-amazon.com/images/I/51aIjvlO8zL._AC_SY175_.jpg"
            rating={4}
          />
          <Product
            id={34455353}
            title="APIEU A'Pieu Pure Block Natural Sun Cream, Spf45/Pa+++, 50ml"
            price={14.9}
            image="https://m.media-amazon.com/images/I/51E5cI-R0HL._AC_SY175_.jpg"
            rating={4}
          />
          <Product
            id={74932743}
            title="Ring Alarm 5 Piece Kit (2nd Generation) by Amazon – home security system with optional Assisted Monitoring - No long-term commitments - Works with Alexa"
            price={159.99}
            image={
              "https://images-eu.ssl-images-amazon.com/images/I/51cGODjZ4oL._AC_UL160_SR160,160_.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={42170831}
            title="HP Envy Photo 6230 All-in-One Wi-Fi Photo Printer with 4 Months of Instant Ink Included, Black"
            price={179.99}
            image="https://images-eu.ssl-images-amazon.com/images/I/81VI5P+toKL._AC_UL160_SR160,160_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
