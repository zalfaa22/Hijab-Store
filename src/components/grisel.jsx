import React from 'react'
import Image from 'react-bootstrap'
import './css/grisel.css'

export default function grisel() {
  return (
      <>
          <div className='hero3 w-100 min-vh-100'>
        {/* <h1 className="mx-auto">Party like a sockstar with all of our Unisex Styles</h1> */}
        <div className='card-container'>
          {/* {jsonHero.map((item, index) => ( */}
            <a  className="group bg-info">
              <div className='card'>
                <img className='black' src="../assets/about/kecil-1.svg" />
                <img className='like'src='../../asset/icon.png' ></img>
                <div className='cover'>
                  <h1 className='p-3'>
                    Jetsetter Blacks : 16 - 20 mmHg
                  </h1>
                  <h2>
                    <div className='bungkus-card'>
                      <img className='star1' src='../../asset/star1.png'  />
                      <img className='star1' src='../../asset/star1.png' style={{ marginLeft: '5px' }} />
                      <img className='star1'src='../../asset/star1.png' style={{ marginLeft: '5px' }} />
                      <img className='star1' src='../../asset/star1.png' style={{ marginLeft: '5px' }} />
                      <img className='star1' src='../../asset/star2.png' astyle={{ marginLeft: '5px' }} />
                    </div>
                    <p>1,2k sold out</p>
                  </h2>
                  <h3>
                    <div className='bungkus-price'>
                      <p className='price1'>$25.99</p>
                      <p className='price2'>$25.99</p>
                    </div>
                    <button onClick={() => window.location.href = "/detailProduct"}>
                      SALE
                    </button>
                  </h3>
                </div>
              </div>
            </a>
            <a  className="group">
              <div className='card'>
                <img className='black' src="../assets/about/kecil-1.svg" />
                <img className='like'src='../../asset/icon.png' ></img>
                <div className='cover'>
                  <h1 className='p-3'>
                    Jetsetter Blacks : 16 - 20 mmHg
                  </h1>
                  <h2>
                    <div className='bungkus-card'>
                      <img className='star1' src='../../asset/star1.png'  />
                      <img className='star1' src='../../asset/star1.png' style={{ marginLeft: '5px' }} />
                      <img className='star1'src='../../asset/star1.png' style={{ marginLeft: '5px' }} />
                      <img className='star1' src='../../asset/star1.png' style={{ marginLeft: '5px' }} />
                      <img className='star1' src='../../asset/star2.png' astyle={{ marginLeft: '5px' }} />
                    </div>
                    <p>1,2k sold out</p>
                  </h2>
                  <h3>
                    <div className='bungkus-price'>
                      <p className='price1'>$25.99</p>
                      <p className='price2'>$25.99</p>
                    </div>
                    <button onClick={() => window.location.href = "/detailProduct"}>
                      SALE
                    </button>
                  </h3>
                </div>
              </div>
            </a>
            <a  className="group">
              <div className='card'>
                <img className='black' src="../assets/about/kecil-1.svg" />
                <img className='like'src='../../asset/icon.png' ></img>
                <div className='cover'>
                  <h1 className='p-3'>
                    Jetsetter Blacks : 16 - 20 mmHg
                  </h1>
                  <h2>
                    <div className='bungkus-card'>
                      <img className='star1' src='../../asset/star1.png'  />
                      <img className='star1' src='../../asset/star1.png' style={{ marginLeft: '5px' }} />
                      <img className='star1'src='../../asset/star1.png' style={{ marginLeft: '5px' }} />
                      <img className='star1' src='../../asset/star1.png' style={{ marginLeft: '5px' }} />
                      <img className='star1' src='../../asset/star2.png' astyle={{ marginLeft: '5px' }} />
                    </div>
                    <p>1,2k sold out</p>
                  </h2>
                  <h3>
                    <div className='bungkus-price'>
                      <p className='price1'>$25.99</p>
                      <p className='price2'>$25.99</p>
                    </div>
                    <button onClick={() => window.location.href = "/detailProduct"}>
                      SALE
                    </button>
                  </h3>
                </div>
              </div>
            </a>
          {/* ))} */}
        </div>

      </div>
      </>
  )
}
