import './App.css';
import './All.min.css';

function App() {
  return (
    <>
      <section className="home-section">
        <div className="container row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 padding-0">
            <div className="w-100">
              <div className="image-box">
                <div className="col-xl-8">
                  <span>Exclusive offer</span>
                  <h1>STAY HOME & DELIVERED YOUR <span>DAILY NEEDS</span></h1>
                  <p className="col-xl-10 padding-0">Vegetables contain many vitamins and minerals that are good
                    for your health.</p>
                  <button> <span>Shop Now</span> <i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4 padding-0">
            <div className="w-100">
              <div className="image-box-2">
                <div className="bg-image-1">
                  <h2>45% <span>OFF</span> </h2>
                  <h3>Nut Collection</h3>
                  <p className="col-xl-5 padding-0">We deliver organic vegetables & fruits</p>
                  <button>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="bg-image-2">
                  <h3>Healthy Food</h3>
                  <h2>Organic Market</h2>
                  <p className="col-xl-7 padding-0">Start your daily shopping with some Organic food</p>
                  <button>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
