import { useEffect, useState } from "react";
import "./App.css";
import Macbook from "./components/macbooks/Macbook";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [cartModal, setCartModal] = useState(false);

  const [macbook, setMacbook] = useState([
    {
      id: 0,
      img: "/public/mac-1.png",
      name: "Apple Macbook Pro 14",
      price: 1.999,
      type: "laptop",
    },
    {
      id: 1,
      img: "./public/mac-2.png",
      name: "MacBook Air with M2 chip",
      price: 2.399,
      type: "laptop",
    },
    {
      id: 2,
      img: "./public/mac-3.png",
      name: "MacBook Air with M1 chip",
      price: 829.99,
      type: "laptop",
    },
    {
      id: 3,
      img: "./public/mac-4.png",
      name: "Apple Macbook Pro 13",
      price: 829.99,
      type: "laptop",
    },
    {
      id: 4,
      img: "https://www.apple.com/newsroom/images/product/imac/standard/Apple_imac-magickeyboardnum-magicmouse2-macos-wallpaper_08042020.jpg.news_app_ed.jpg",
      name: "27-inch iMac",
      price: 8.999,
      type: "desktop",
    },
    {
      id: 5,
      img: "https://5.imimg.com/data5/LA/TZ/KZ/SELLER-9478296/apple-mac-desktop-computer.jpg",
      name: "Apple iMac MD096HN/A",
      price: 4.399,
      type: "desktop",
    },
    {
      id: 6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF8prToOAG2CCro17HpuQAz2jbLlSR0YeYNA&s",
      name: "iMac gets a 2x",
      price: 2829.99,
      type: "desktop",
    },
    {
      id: 7,
      img: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/imac-24-no-id-blue-selection-hero-202310?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1701459101618",
      name: "Buy iMac - Apple",
      price: 1829.99,
      type: "desktop",
    },
  ]);
  const [airpots, setAirpots] = useState([
    {
      id: 8,
      img: "./public/airpots-1.png",
      name: "AirPods 2nd generation",
      price: 129,
    },
    {
      id: 9,
      img: "./public/airpots-2.png",
      name: "AirPods 3nd generation",
      price: 169,
    },
    {
      id: 10,
      img: "./public/airpots-3.png",
      name: "AirPods Pro 2nd generation",
      price: 249,
    },
    {
      id: 11,
      img: "./public/airpots-4.png",
      name: "AirPods Max",
      price: 249,
    },
  ]);

  const [cartProdacts, setCartProducts] = useState([]);

  const [pc, setPc] = useState([]);

  const [type, setType] = useState("laptop");

  const filterProduct = (type) => {
    const newPc = macbook.filter((item) => {
      return item.type == type;
    });
    setPc(newPc);
  };

  // useEffect Takrorlanishni cheklash.
  useEffect(() => {
    filterProduct(type);
  }, [type]);

  const openModal = () => {
    setShowModal(!showModal);
  };
  const cartopenModal = () => {
    setCartModal(!cartModal);
    if (cartProdacts == 0) {
      setCartModal(false);
      alert("Karzinka hali bo'sh 😔");
    }
  };
  const addCard = (id) => {
    setCartProducts([...cartProdacts, macbook[id]]);
  };

  const deleteEl = (id) => {
    const newArr = cartProdacts.filter((item) => {
      return item.id != id;
    });

    setCartProducts(newArr);
    if (newArr.length == 0) {
      setCartModal(false);
    }
  };

  return (
    <>
      <header>
        <nav>
          <div className="container">
            {cartModal && (
              <div className="cartModal">
                {cartProdacts.map((item) => {
                  return (
                    <div className="cartModal-content">
                      <img src={item.img} alt="" />
                      <h5>{item.name}</h5>
                      <div className="cart-delete">
                        <i
                          onClick={() => {
                            deleteEl(item.id);
                          }}
                          class="fa-solid fa-trash-can "
                        ></i>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            <a href="#">
              <img src="/public/Apple.svg" alt="" className="logo" />
            </a>
            <div>
              <ul className="nav-links">
                <li>
                  <a href="#">Store</a>
                </li>
                <li>
                  <a href="#mac">Mac</a>
                </li>
                <li>
                  <a href="#airpots">AirPods</a>
                </li>
                <li>
                  <a href="">Only On Apple</a>
                </li>
                <li>
                  <a href="#airpots-max">Support</a>
                </li>
              </ul>
            </div>
            <div className="nav-icon">
              <img src="/public/search.svg" alt="" />
              <div onClick={cartopenModal} className="cart">
                <img src="/public/cart.png" alt="" />
                <span>{cartProdacts.length}</span>
              </div>
              <div onClick={openModal} className="menu">
                <i class="fa-solid fa-bars"></i>
              </div>
            </div>

            {showModal && (
              <div className="modal">
                <div className="mobil-link">
                  <ul className="mobil-links">
                    <li>
                      <a href="#">Store</a>
                    </li>
                    <li>
                      <a href="#">Mac</a>
                    </li>
                    <li>
                      <a href="#">AirPods</a>
                    </li>
                    <li>
                      <a href="#">Only On Apple</a>
                    </li>
                    <li>
                      <a href="#">Support</a>
                    </li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        </nav>
        <div className="hero">
          <div className="container">
            <div className="hero-title">
              <h1>The New MacBook Pro 14</h1>
              <p>Enjoy pure picture quality with Mini-LED technology</p>
              <div className="hero-btns">
                <button className="buy">Buy</button>
                <button className="learn-more">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section id="mac">
          <div className="container">
            <div className="section-title">
              <h1>
                Which Mac is right <br />
                for you?
              </h1>
            </div>
            <div className="section-subtitle">
              <h3
                onClick={() => {
                  setType("laptop");
                }}
                className={type == "laptop" ? "desktop active" : "desktop"}>   Notebook 
                </h3>

              <h3
                onClick={() => {
                  setType("desktop");
                }}
                className={type == "desktop" ? "desktop active" : "desktop"} >   Desktop
              </h3>
            </div>
            <div className="cards">
              {pc.map((card) => {
                return <Macbook item={card} key={card.id} addCard={addCard} />;
              })}
            </div>
            <div className="cards-link">
              <a href="">Compare all Mac models &gt;</a>
              <a href="">Shop Mac &gt;</a>
            </div>
          </div>
        </section>

        <section className="presentation-section">
          <div className="container">
            <div className="presentation-airpots">
              <h1>A marvel of modern silence.</h1>
              <p>
                AirPods Pro are built to let you listen in peace With control
                over what you hear — and don’t hear — you’ll be immersed in
                songs and podcasts like never before.
              </p>
              <img
                className="airpots-img"
                src="/public/airtpots-presentation.png"
                alt=""
              />
              <div className="presentation-btns">
                <button className="buy">Buy</button>
                <button className="learn-more">Learn More</button>
              </div>
              <div className="arrow">
                <img
                  className="arrow-left"
                  src="/public/arroe-left.png"
                  alt=""
                />
                <img
                  className="arrow-right"
                  src="/public/arrow-right.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>

        <section id="airpots">
          <div className="container">
            <div className="section-title">
              <h1>
                Which Airpods are <br />
                right for you?
              </h1>
            </div>

            <div className="cards">
              {airpots.map((card) => {
                return <Macbook item={card} key={card.id} addCard={addCard} />;
              })}
            </div>
            <div className="cards-link">
              <a href="">Compare all AirPods models &gt;</a>
            </div>
          </div>
        </section>

        <section id="airpots-max">
          <div className="container">
            <h1 className="airpotsMax-title">AirPods Max</h1>
            <div className="airpotsMax-btns">
              <button className="buy">Buy</button>
              <button className="learn-more">Learn More</button>
            </div>
          </div>
        </section>

        <footer>
          <div className="container">
            <div className="footer">
              <div className="shop">
                <h3>shop and learn</h3>
                <p>Store</p>
                <p>Mac</p>
                <p>ipad</p>
                <p>ipad</p>
              </div>

              <div>
                <h3>Services</h3>
                <p>Apple Music</p>
                <p>Apple Store</p>
                <p>Apple Books</p>
                <p>Apple Podcasts</p>
                <p>Apple News</p>
                <p>Apple TV</p>
              </div>
              <div className="apple-store">
                <h3>Apple Store</h3>
                <p>Find a Store</p>
                <p>Today at Apple</p>
                <p>Apple Store App</p>
                <p>Order Status</p>
                <p>Apple trade in</p>
                <p>Shopping Help</p>
                <h3 className="account">Account</h3>
                <p>Manage your ID</p>
                <p>Apple Store Account</p>
              </div>

              <div className="business">
                <h3>For Buisness</h3>
                <p>Apple and Buisness</p>
                <p>Shope for Buisness</p>
                <h3>For Education</h3>
                <p>Apple and Education</p>
                <p>Shope for College</p>
                <h3>For Healthcare</h3>
                <p>Apple and Healthcare</p>
                <p>Health Records on iPhone</p>
              </div>

              <div className="about">
                <h3>About Apple</h3>
                <p>NewsRoom</p>
                <p>Apple Leadership</p>
                <p>Career Opportunities</p>
                <p>Events</p>
                <p>Contact Apple</p>
              </div>
            </div>

            <div className="footer_bottom">
              <div className="social">
                <img src="/public/facebook.png" alt="" />
                <img src="/public/instagram.png" alt="" />
                <img src="/public/twitter.png" alt="" />
              </div>
              <div className="footer-links">
                <a href="">Privacy Policy</a>
                <a className="terms" href="">
                  Terms of Use
                </a>
                <a href="">Sales and Refunds</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export default App;
