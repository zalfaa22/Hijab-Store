import React from "react";
import "./css/footer.css";

export default function Footer() {
  return (
    <>
      <div className="gradient clearfix">
        <div className="row me-1 me-md-0 me-lg-0 align-items-center">
          <img
            className="col-md-6 col-12 col-lg-4  img-fluid float-start"
            src="assets/Footer/hero.svg"
          ></img>
          <div className="col-lg-4 col-md-5 col-12 content-position text-start mt-4 mt-md-0 ps-4 ps-md-0">
            <h2 className=" fs-3 fw-bold mb-4" style={{ color: "#CF8E5B" }}>
              Subscribe Zada kehir to get News
            </h2>
            <p className="pe-lg-5 me-lg-5 fs-6 fw-normal pb-2" style={{color: "#5A381C"}}>
              Get your can’t-miss style news,before everybody else.Your email.
              right here
            </p>
            <div className="input-box d-flex  d-lg-none align-items-center px-2 py-2 rounded mb-3 mb-md-0 mb-lg-0" style={{backgroundColor: "#F2E3D5"}}>
        <input type="text" className="form-control" id="textInput" placeholder="Enter Your Email" style={{backgroundColor: "#F2E3D5"}}/>
        <button className="button btn text-white  rounded-0">Subscribe</button>
    </div>
          </div>
          <div className="col-lg-4 mt-5 input-wrap d-none d-md-none d-lg-block text-start">
    <div className="input-box d-flex align-items-center px-2 py-2 rounded " style={{backgroundColor: "#F2E3D5"}}>
        <input type="text" className="form-control" id="textInput" placeholder="Enter Your Email" style={{backgroundColor: "#F2E3D5"}}/>
        <button className="button btn text-white  rounded-0">Subscribe</button>
    </div>
</div>


        </div>
      </div>

      

      {/* <div className='gradient clearfix'>
        <div className='container'>
        <div className='row d-flex float-start align-items-center'>
        <img className='col-md-5  img-fluid' src='assets/Footer/hero.svg'></img>
        <h1 className='col-4'>dhjksfhjk</h1></div></div>
    </div> */}

      <div style={{ backgroundColor: "#F2E3D5" }}>
        {/* <!-- Footer --> */}
        <footer class=" text-center text-md-start">
          {/* <!-- Grid container --> */}
          <div class="container p-4">
            {/* <!--Grid row--> */}
            <div class="row">
              {/* <!--Grid column--> */}
              <div class=" col-lg-4 col-md-12 mb-lg-4 mb-md-0 text-start">
                <div className="d-flex mb-5 mt-3">
                  <img className="img-fluid " src="assets/logo.svg"></img>
                  <h5
                    class="fs-5 ms-3 mt-2 fw-bold"
                    style={{ color: "#774C29" }}
                  >
                    zada kheir
                  </h5>
                </div>

                <p className="pe-5" style={{ color: "#956138" }}>
                  Jl. Dr. Soetomo Gg. II, Dusun Pengkok, Padangan, Kec. Padangan
                  Kab. Bojonegoro, Jawa Timur 62162
                </p>

                <div className="d-flex mb-5 mt-5">
                  <img
                    className="img-fluid me-2"
                    src="assets/Footer/LinkedIn.svg"
                  ></img>
                  <img
                    className="img-fluid me-2"
                    src="assets/Footer/Instagram.svg"
                  ></img>
                  <img
                    className="img-fluid me-2"
                    src="assets/Footer/Twitter.svg"
                  ></img>
                </div>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div
                class="col-lg-5 col-md-6 mb-4 mb-md-0 mt-lg-4 pt-2 text-start"
                style={{ color: "#956138" }}
              >
                <h5 class="text-uppercase fs-6">customer service</h5>

                <ul class="list-unstyled mb-0">
                  <li>
                    <div href="#!" class="mt-lg-5 mt-4 mb-4 pe-5">
                      Layanan pelanggan kami beroperasi setiap hari Senin-Jumat
                      pukul 09.00 - 17.00 WIB
                    </div>
                  </li>
                  <li>
                    <div href="#!" class="my-4">
                      CS 1 WhatsApp : +62 812 3290 8308
                    </div>
                  </li>
                  <li>
                    <div href="#!" class="my-4">
                      Email: ZadaKheir@gmail.com
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}

              {/* <!--Grid column--> */}
              <div
                class="col-lg-3 col-md-6 mb-4 mb-md-0 mt-lg-4 pt-2 text-start"
                style={{ color: "#956138" }}
              >
                <h5 class="text-uppercase fs-6 mb-0">quick Links</h5>

                <ul class="list-unstyled">
                  <li>
                    <div href="#!" class="mt-lg-5 mt-4 mb-2">
                      Konfirmasi Pembayaran
                    </div>
                  </li>
                  <li>
                    <div href="#!" class="mb-2">
                      Tentang Kami
                    </div>
                  </li>
                  <li>
                    <div href="#!" class="mb-2">
                      Kontak Kami
                    </div>
                  </li>
                  <li>
                    <div href="#!" class="mb-2">
                      Kebijakan Pengembalian
                    </div>
                  </li>
                  <li>
                    <div href="#!" class="mb-2">
                      Kebijakan Privasi
                    </div>
                  </li>
                  <li>
                    <div href="#!" class="mb-1">
                      FAQ
                    </div>
                  </li>
                </ul>
              </div>
              {/* <!--Grid column--> */}
            </div>
            {/* <!--Grid row--> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div class="d-flex gradient text-center p-3 justify-content-between align-items-center">
            <div className="ms-lg-5 ms-md-4 ps-lg-5 text-start me-4 text-black fs-6 fw-normal">
              SINCE 2023
            </div>
            <div className="d-flex ">
              <img className="img-fluid " src="assets/logo.svg"></img>
              <h5 class="fs-5 ms-3 mt-2 fw-bold" style={{ color: "#774C29" }}>
                zada kheir
              </h5>
            </div>
            <div className="me-lg-5 me-md-4 pe-lg-5 text-end text-black fs-6 fw-normal">
              TERM, PRIVACY POLICY
            </div>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      </div>
    </>
  );
}
