import React from "react";
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
            className='home_img'
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/LiveEvent/M51_tallhero_1500x600_3._CB405530656_.jpg"
            alt=""
        />
        <div className='home_row'>
            <Product id={1} title='The lean startup' price={19.99} rating={4} image='http://4.bp.blogspot.com/-YIMcWtDCIo8/ThT0l_2IisI/AAAAAAAAA70/36mkMo3o-fw/s400/ERIES_Enso_in_Blue_Master.png'/>
            <Product id={2} title='Apple iPhone 11 (64GB) - (Product) RED' price={699.99} rating={5} image='https://m.media-amazon.com/images/I/41c2gS6Z+LL.__AC_SY200_.jpg'/>
        </div>
        <div className='home_row'>
            <Product id={3} title='OnePlus 138.8 cm (55 inches) Q1 Series 4K Certified Android QLED TV 55Q1IN Pro (Black)' price={1359.67} rating={4} image='https://images-eu.ssl-images-amazon.com/images/I/41S2RLFJpUL._AC_US160_FMwebp_QL70_.jpg'/>
            <Product id={4} title="Men's Air Max Infuriate Iii Low Basketball Shoes" price={75.17} rating={4} image='https://m.media-amazon.com/images/I/51CBT4C5vzL._AC_UL320_.jpg'/>
            <Product id={5} title='DELL XPS 9300 13.3-inch UHD Laptop (10th Gen Core i7-1065G7/16GB/1TB SSD/Windows 10 Home Plus & MS Office/Intel HD Graphics), White' price={2871.79} rating={3} image='https://m.media-amazon.com/images/I/51W3tGYMKPL._AC_UY218_.jpg'/>
        
        </div>
        <div className='home_row'>
            <Product id={6} title='Samsung CJ890 Series 49 inch 3840x1080 Super Ultra-Wide Desktop Monitor for Business, 144 Hz, USB-C, HDMI, DisplayPort, 3-Year Warranty (C49J890DKN)' price={1,321.55} rating={4} image='https://m.media-amazon.com/images/I/61Hh-0F7AbL._AC_UY218_.jpg'/>
        </div>
      </div>
    </div>
  );
}

export default Home;
