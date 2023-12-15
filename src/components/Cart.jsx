
import React, {useEffect, useState, useRef} from "react";
import "./css/cart.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Cart() {
    const [qty, setQty] = useState(1);
    var enlargedImage = document.getElementById('enlarged-image');

  return (
    <>
      {/* <div className="">
        <div className="image-container">
          <div className="image-column">
            <img src="assets/Cart/image1.png" class="image" alt="..."></img>
            <img src="assets/Cart/image1.png" class="image" alt="..."></img>
            <img src="assets/Cart/image1.png" class="image" alt="..."></img>
            <img src="assets/Cart/image1.png" class="image" alt="..."></img>
          </div>
          <div className="image-column">
            <img src="assets/Cart/image2.png" class="image2" alt="..."></img>

            <div class="row">
              <div class="col ">
                <button class="box box-1"></button>
                <button class="box box-2"></button>
                <button class="box box-3"></button>
                <button class="box box-4"></button>
                <button class="box box-5"></button>
              </div>
            </div>
          </div>

          <div className="content" style={{ width: "30rem" }}>
            <h1 className="fs-4 fw-medium text-start pt-3">Zada Kheir</h1>
            <h1 className="fs-4 fw-bold text-start pt-3">
              DRESS FELISIA PURPLE - SERIES B
            </h1>
            <h1 className="fs-5 fw-medium text-start pt-3">Description</h1>
            <p className="fs-5 fw-medium text-start pt-3">
              Material: Premium Valerie interlock, bahan nya nyaman, jahitan nya
              rapi, model nya simple dan elegan.. tetep cantik dan menawan.
            </p>

            <div
              class=" d-flex justify-content-between align-items-center bg-white py-2"
              id="price"
            >
              <div class="col-md-5 col-5 text-start ps-3">Rp 195.000</div>
              <div class="col-md-2 col-2">
                <img class="img-fluid" src="assets/Cart/line.png" />
              </div>
              <div class="col-md-5 col-5 text-center">
                <i
                  class="bi bi-star-fill mx-1"
                  style={{ color: "#EDB600" }}
                ></i>
                <i
                  class="bi bi-star-fill mx-1"
                  style={{ color: "#EDB600" }}
                ></i>
                <i
                  class="bi bi-star-fill mx-1"
                  style={{ color: "#EDB600" }}
                ></i>
                <i
                  class="bi bi-star-fill mx-1"
                  style={{ color: "#EDB600" }}
                ></i>
                <i
                  class="bi bi-star-fill mx-1"
                  style={{ color: "#F2E3D5" }}
                ></i>
              </div>
            </div>
            <h1 className="fs-5 fw-bold text-start pt-3">slect hijab size</h1>

            <div class="col m-0 p-0 text-start">
              <button class="box-size"></button>
              <button class="box-size"></button>
              <button class="box-size"></button>
              <button class="box-size"></button>
              <button class="box-size"></button>
            </div>
          </div>
        </div>
      </div> */}

<div className="tittle fs-1 fw-semibold mt-5 lh-sm">We Offer You <br/>
The Best Seller</div>
      <div class="cart">
        <div class="container">
          <div class="row d-flex justify-content-between ">
            <div class="col-lg-2 col-md-3 col-12 ">
              <img class="img-fluid mb-3 " src="assets/Cart/image1.png" />
              <img class="img-fluid mb-3" src="assets/Cart/image1.png" />
              <img class="img-fluid mb-3" src="assets/Cart/image1.png" />
              <img class="img-fluid mb-3" src="assets/Cart/image1.png" />
            </div>
            <div class="col-lg-5 col-md-9">
              <img class="img-fluid " src="assets/Cart/image2.png" />
              <div class="row justify-content-between mt-4">

              {/* <div class="col">
              <button class="img-fluid box-size p-4"></button>
              </div>
              <div class="col">
              <button class="box-size p-4"></button>
              </div>
              <div class="col">
              <button class="box-size p-4"></button>
              </div>
              <div class="col">
              <button class="box-size p-4"></button>
              </div>
              <div class="col">
              <button class="box-size p-4"></button>
              </div> */}
            

                <div class="col color ">
                  <button className="buttonimg">
                  <img class="img-fluid " src="assets/cart/color1.svg" />
                  </button>
                </div>
                <div class="col color">
                <button className="buttonimg">
                  <img class="img-fluid" src="assets/cart/color2.svg" />
                  </button>
                </div>
                <div class="col color">
                <button className="buttonimg">
                  <img class="img-fluid" src="assets/cart/color3.svg" />
                  </button>
                </div>
                <div class="col color">
                <button className="buttonimg">
                  <img class="img-fluid" src="assets/cart/color4.svg" />
                  </button>
                </div>
                <div class="col color">
                <button className="buttonimg">
                  <img class="img-fluid" src="assets/cart/color5.svg" />
                  </button>
                </div>

              </div>
            </div>
            <div class="col-lg-5 col-md-12 text-start" style={{ color: "#774C29" }}>
              <h1 className="fs-4 fw-medium text-start pt-5 pt-lg-0">Zada Kheir</h1>
              <h1 className="fs-4 fw-bold text-start pt-3">
                DRESS FELISIA PURPLE - SERIES B
              </h1>
              <h1 className="fs-5 fw-medium text-start pt-3">Description</h1>
              <p className="fs-5 fw-medium text-start pt-3 pb-3">
                Material: Premium Valerie interlock, bahan nya nyaman, jahitan
                nya rapi, model nya simple dan elegan.. tetep cantik dan
                menawan.
              </p>
              <div class=" d-flex justify-content-between align-items-center  py-2 " style={{backgroundColor: "#FFCDA6"}}>
                <div class="col-md-5 col-5 fw-bold text-start ps-3">Rp 195.000</div>
                <div class="col-md-2 col-2">
                  <img class="img-fluid" src="assets/Cart/line.png" />
                </div>
                <div class="col-md-5 col-5 text-start ">
                  <i
                    class="bi bi-star-fill mx-1"
                    style={{ color: "#EDB600" }}
                  ></i>
                  <i
                    class="bi bi-star-fill mx-1"
                    style={{ color: "#EDB600" }}
                  ></i>
                  <i
                    class="bi bi-star-fill mx-1"
                    style={{ color: "#EDB600" }}
                  ></i>
                  <i
                    class="bi bi-star-fill mx-1"
                    style={{ color: "#EDB600" }}
                  ></i>
                  <i
                    class="bi bi-star-fill mx-1"
                    style={{ color: "#F2E3D5" }}
                  ></i>
                </div>
              </div>

              <h6 className="pt-5 pb-2" style={{ color: "#774C29" }}>
                Select Hijab Size
              </h6>
              <div class="row size d-flex">
                <div class="col-2 col-size">
                  <img class="img-fluid"src="assets/cart/size1.svg" />
                </div>
                <div class="col-2 col-size">
                  <img class="img-fluid" src="assets/cart/size2.svg" />
                </div>
                <div class="col-2 col-size">
                  <img class="img-fluid" src="assets/cart/size3.svg" />
                </div>
                <div class="col-2 col-size">
                  <img class="img-fluid" src="assets/cart/size4.svg" />
                </div>
                <div class="col-2 col-size">
                  <img class="img-fluid" src="assets/cart/size5.svg" />
                </div>
              </div>
              <h6 className="pt-4" style={{ color: "#774C29" }}>Select Hijab Size</h6>

              <div class="mt-4 d-flex align-items-center gap-3">
              <button
                  onClick={() => setQty(prev => prev - 1)}
                  disabled={qty <= 1}
                  className="btn-minus rounded justify-content-center align-items-center"
                >
                    <i class="bi bi-dash"></i>
                  {/* <Minus /> */}
                </button>
                <h1 className="fs-4 mt-2 mx-2" style={{color: "#5A381C"}}>{qty}</h1>
                <button
                  onClick={() => setQty(prev => prev + 1)}
                  className="btn-plus rounded justify-content-center align-items-center"
                >
                    <i class="bi bi-plus"></i>
                  {/* <Plus /> */}
                </button>
                </div>

                <div class="d-flex mt-4">
                    <button class="button button-add col-8 py-3  ms-auto flex-grow-1 d-flex justify-content-center align-items-start fw-bold rounded-3 text-white">
                      Add to cart
                      <img className="img-fluid ms-2" src="assets/Cart/cart-icon.svg"></img>
                    </button>
                    <button class="button button-add p-2 ms-3 rounded-3" style={{width: "53px", height: "53px"}}>
                    <img className="img-fluid " src="assets/Cart/fav-icon.svg"></img>
                    </button>
                  </div>

                  
            </div>
          </div>
        </div>
      </div>
      
      {/* <div class="toggle-container px-2" style={{backgroundColor: "#ffffff"}}>
    <button class="toggle-btn" id="toggleBtn">
        <i class="bi bi-arrow-left"></i>
            <i class="bi bi-arrow-right"></i>
        </button>
        </div> */}
 <div className="pt-5">
    <div className="btn px-2 rounded-5" style={{backgroundColor:"#FFCDA6"}}>
<button class="btn  custom-btn rounded-circle" data-toggle="button" aria-pressed="false" autocomplete="off">
<i class="bi bi-arrow bi-arrow-left"></i>
</button>
<button class="btn custom-btn rounded-circle " data-toggle="button" aria-pressed="true" autocomplete="off">
<i class="bi bi-arrow bi-arrow-right"></i>
</button>
</div>
</div>
        
    </>
  );
}
