import React from "react";
import img4 from "../assets/landing page for desktop/image 4.png";
import rec5 from "../assets/landing page for desktop/Rectangle 5.png";
import small1 from "../assets/landing page for desktop/image 5.png";
import rec51 from "../assets/landing page for desktop/Rectangle 5 (1).png";
import rec52 from "../assets/landing page for desktop/Rectangle 5 (2).png";
import rec53 from "../assets/landing page for desktop/Rectangle 5 (3).png";
import rec54 from "../assets/landing page for desktop/Rectangle 5 (4).png";
import rec55 from "../assets/landing page for desktop/Rectangle 5 (5).png";
import small2 from "../assets/landing page for desktop/image 6.png";
import small3 from "../assets/landing page for desktop/image 7.png";
import small4 from "../assets/landing page for desktop/image 8.png";
import small5 from "../assets/landing page for desktop/image 9.png";

const Card = () => {
  return (
    <div className="main mt-1">
      <div className="maincont">
        <div>
          <img className="jazzimg" src={img4} alt="" />
        </div>

        <div className="main-card flex-wrap justify-content-around gap-1">
          <div className="card">
            <img src={rec5} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Double Beef Burger</h5>

              <div className="card-text">
                <div className="amount">
                  Total price <br /># 10500.0
                </div>

                <div className="increment-button">
                  <button className="inc">-</button>1
                  <button className="inc">+</button>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <img className="smallimg" src={small1} alt="" />
                <img className="smallimg" src={small2} alt="" />
                <img className="smallimg" src={small3} alt="" />
                <img className="smallimg" src={small4} alt="" />
                <img className="smallimg" src={small5} alt="" />
              </div>

              <button className="butt">
                <button className="inc2">+</button>
                Add To Cart
              </button>
            </div>
          </div>
          <div className="card">
            <img src={rec51} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Single Beef Burger</h5>

              <div className="card-text">
                <div className="amount">
                  Total price <br /># 8500.0
                </div>

                <div className="increment-button">
                  <button className="inc">-</button>1
                  <button className="inc">+</button>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <img className="smallimg" src={small1} alt="" />
                <img className="smallimg" src={small2} alt="" />
                <img className="smallimg" src={small3} alt="" />
                <img className="smallimg" src={small4} alt="" />
                <img className="smallimg" src={small5} alt="" />
              </div>

              <button className="butt">
                <button className="inc2">+</button>
                Add To Cart
              </button>
            </div>
          </div>
          <div className="card">
            <img src={rec52} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Double Crunchy Chicken Burger</h5>

              <div className="card-text">
                <div className="amount">
                  Total price <br /># 12000.0
                </div>

                <div className="increment-button">
                  <button className="inc">-</button>1
                  <button className="inc">+</button>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <img className="smallimg" src={small1} alt="" />
                <img className="smallimg" src={small2} alt="" />
                <img className="smallimg" src={small3} alt="" />
                <img className="smallimg" src={small4} alt="" />
                <img className="smallimg" src={small5} alt="" />
              </div>

              <button className="butt">
                <button className="inc2">+</button>
                Add To Cart
              </button>
            </div>
          </div>
          <div className="card mt-3">
            <img src={rec53} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Double Crunchy Chicken Burger</h5>

              <div className="card-text">
                <div className="amount">
                  Total price <br /># 12000.0
                </div>

                <div className="increment-button">
                  <button className="inc">-</button>1
                  <button className="inc">+</button>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <img className="smallimg" src={small1} alt="" />
                <img className="smallimg" src={small2} alt="" />
                <img className="smallimg" src={small3} alt="" />
                <img className="smallimg" src={small4} alt="" />
                <img className="smallimg" src={small5} alt="" />
              </div>

              <button className="butt">
                <button className="inc2">+</button>
                Add To Cart
              </button>
            </div>
          </div>
          <div className="card mt-3">
            <img src={rec54} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Double Crunchy Chicken Burger</h5>

              <div className="card-text">
                <div className="amount">
                  Total price <br /># 12000.0
                </div>

                <div className="increment-button">
                  <button className="inc">-</button>1
                  <button className="inc">+</button>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <img className="smallimg" src={small1} alt="" />
                <img className="smallimg" src={small2} alt="" />
                <img className="smallimg" src={small3} alt="" />
                <img className="smallimg" src={small4} alt="" />
                <img className="smallimg" src={small5} alt="" />
              </div>

              <button className="butt">
                <button className="inc2">+</button>
                Add To Cart
              </button>
            </div>
          </div>
          <div className="card mt-3">
            <img src={rec55} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Double Crunchy Chicken Burger</h5>

              <div className="card-text">
                <div className="amount">
                  Total price <br /># 12000.0
                </div>

                <div className="increment-button">
                  <button className="inc">-</button>1
                  <button className="inc">+</button>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <img className="smallimg" src={small1} alt="" />
                <img className="smallimg" src={small2} alt="" />
                <img className="smallimg" src={small3} alt="" />
                <img className="smallimg" src={small4} alt="" />
                <img className="smallimg" src={small5} alt="" />
              </div>

              <button className="butt">
                <button className="inc2">+</button>
                Add To Cart
              </button>
            </div>
          </div>
        </div>
        
      </div>
      {/* <div className="see">
          <button className="more">see more</button>
        </div> */}
    </div>
  );
};

export default Card;
