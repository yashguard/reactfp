import React from 'react';
import './Header.css';
import img1 from "./image/1.png";
import img2 from"./image/vegetable.svg"
import img3 from"./image/cup.svg"
import img4 from"./image/meats.svg"
import img5 from"./image/breakfast.svg"
import img6 from"./image/frozen.svg"
import img7 from"./image/biscuit.svg"
import img8 from"./image/grocery.svg"

function Header() {
  return (
    <>
    <div className="header-part">
        <div className="container row align-items-center justify-content-between">
            <div className="logo">
                <a href="index.html">
                    <img src={img1} />
                </a>
            </div>
            <div className="search">
                <input type="search" /><button id="search"><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
            <div className="contact row align-items-center">
                <ul>
                    <div className="row align-items-center">
                        <li className="call-logo col-xl-2 text-center padding-0"><i className="fa-solid fa-phone-volume"></i>
                        </li>
                        <li className="col-xl-7 padding-0">
                            <span>24/7 Delivery</span>
                            <span>+91 888 104 2340</span>
                        </li>
                        <li className="col-xl-3 padding-0 text-center">
                            <div className="heart">
                                <i className="fa-regular fa-heart"></i>
                            </div>
                        </li>
                    </div>
                </ul>
                <div className="shooping">
                    <i className="fa-solid fa-cart-shopping"></i>
                </div>
                <div className="user">
                    <i className="fa-regular fa-user"></i>
                </div>
            </div>
            <div className="toggle-bar" id="toggle">
                <i className="fa-solid fa-bars" id="menu"></i>
            </div>
        </div>
    </div>
    <header className="header" id="header">
        <div className="container row justify-content-between align-items-center">
            <div className="toggle-bar" id="toggle2">
                <i className="fa-solid fa-bars" id="menu2"></i>
            </div>
            <div className="all-categories">
                <div className="box">
                    <i className="fa-solid fa-bars"></i>
                    <span className="categories">All Categories</span>
                    <div className="categories-box">
                        <ul>
                            <div className="items row justify-content-between align-items-center">
                                <li className="col-xl-11 padding-0 row align-items-center"><img src={img2} />
                                    <h6>Vegetables & Fruit</h6>
                                </li>
                                <li className="col-xl-1 padding-0 text-center"><i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <div className="all-items">
                                    <div className="row justify-content-between">
                                        <ul>
                                            <h4>Organic Vegetables</h4>
                                            <li><a href="#">Potato & Tomato</a></li>
                                            <li><a href="#">Cucumber & Capsicum</a></li>
                                            <li><a href="#">Leafy Vegetables</a></li>
                                            <li><a href="#">Root Vegetables</a></li>
                                            <li><a href="#">Beans & Okra</a></li>
                                            <li><a href="#">Cabbage & Cauliflower</a></li>
                                            <li><a href="#">Gourd & Drumstick</a></li>
                                            <li><a href="#">Specialty</a></li>
                                        </ul>
                                        <ul>
                                            <h4>Fresh Fruit</h4>
                                            <li><a href="#">Banana & Papaya</a></li>
                                            <li><a href="#">Kiwi, Citrus Fruit</a></li>
                                            <li><a href="#">Apples & Pomegranate</a></li>
                                            <li><a href="#">Seasonal Fruits</a></li>
                                            <li><a href="#">Mangoes</a></li>
                                            <li><a href="#">Fruit Baskets</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="items row justify-content-between align-items-center">
                                <li className="col-xl-11 padding-0 row align-items-center"><img src={img3} />
                                    <h6>Beverages</h6>
                                </li>
                                <li className="col-xl-1 padding-0 text-center"><i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <div className="all-items" style={{top: "-55px", width: "300px"}}>
                                    <div className="row justify-content-between">
                                        <ul>
                                            <h4>Energy & Soft Drinks</h4>
                                            <li><a href="#">Soda & Cocktail Mix</a></li>
                                            <li><a href="#">Sports & Energy Drinks</a></li>
                                            <li><a href="#">Non Alcoholic Drinks</a></li>
                                            <li><a href="#">Packaged Water</a></li>
                                            <li><a href="#">Spring Water</a></li>
                                            <li><a href="#">Flavoured Water</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="items row justify-content-between align-items-center">
                                <li className="col-xl-11 padding-0 row align-items-center"><img src={img4} />
                                    <h6>Meats & Seafood</h6>
                                </li>
                                <li className="col-xl-1 padding-0 text-center"><i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <div className="all-items" style={{top: "-105px;"}}>
                                    <div className="row justify-content-between">
                                        <ul>
                                            <h4>Meat</h4>
                                            <li><a href="#">Fresh Meat</a></li>
                                            <li><a href="#">Frozen Meat</a></li>
                                            <li><a href="#">Marinated Meat</a></li>
                                            <li><a href="#">Fresh & Frozen Meat</a></li>
                                        </ul>
                                        <ul>
                                            <h4>Seafood</h4>
                                            <li><a href="#">Fresh Water Fish</a></li>
                                            <li><a href="#">Dry Fish</a></li>
                                            <li><a href="#">Frozen Fish & Seafood</a></li>
                                            <li><a href="#">Marine Water Fish</a></li>
                                            <li><a href="#">Canned Seafood</a></li>
                                            <li><a href="#">Prawans & Shrimps</a></li>
                                            <li><a href="#">Other Seafood</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="items row justify-content-between align-items-center">
                                <li className="col-xl-11 padding-0 row align-items-center"><img src={img5} />
                                    <h6>Breakfast & Dairy</h6>
                                </li>
                                <li className="col-xl-1 padding-0 text-center"><i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <div className="all-items" style={{top: "-150px"}}>
                                    <div className="row justify-content-between">
                                        <ul>
                                            <h4>Breakfast Cereals</h4>
                                            <li><a href="#">Oats & Porridge</a></li>
                                            <li><a href="#">Kids Cereal</a></li>
                                            <li><a href="#">Muesli</a></li>
                                            <li><a href="#">Flakes</a></li>
                                            <li><a href="#">Granola & Cereal Bars</a></li>
                                            <li><a href="#">Instant Noodles</a></li>
                                            <li><a href="#">Pasta & Macaroni</a></li>
                                            <li><a href="#">Frozen Non-Veg Snacks</a></li>
                                        </ul>
                                        <ul>
                                            <h4>Dairy</h4>
                                            <li><a href="#">Milk</a></li>
                                            <li><a href="#">Curd</a></li>
                                            <li><a href="#">Paneer, Tofu & Cream</a></li>
                                            <li><a href="#">Butter & Margarine</a></li>
                                            <li><a href="#">Condensed, Powdered Milk</a></li>
                                            <li><a href="#">Buttermilk & Lassi</a></li>
                                            <li><a href="#">Yogurt & Shrikhand</a></li>
                                            <li><a href="#">Flavoured, Soya Milk</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="items row justify-content-between align-items-center">
                                <li className="col-xl-11 padding-0 row align-items-center"><img src={img6} />
                                    <h6>Frozen Foods</h6>
                                </li>
                                <li className="col-xl-1 padding-0 text-center"><i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <div className="all-items" style={{top: "-195px", width: "300px"}}>
                                    <div className="row justify-content-between">
                                        <ul>
                                            <h4>Noodle, Pasta</h4>
                                            <li><a href="#">Instant Noodles</a></li>
                                            <li><a href="#">Hakka Noodles</a></li>
                                            <li><a href="#">Cup Noodles</a></li>
                                            <li><a href="#">Vermicelli</a></li>
                                            <li><a href="#">Instant Pasta</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="items row justify-content-between align-items-center">
                                <li className="col-xl-11 padding-0 row align-items-center"><img src={img7} />
                                    <h6>Biscuits & Snacks</h6>
                                </li>
                                <li className="col-xl-1 padding-0 text-center"><i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <div className="all-items" style={{top: "-240px"}}>
                                    <div className="row justify-content-between">
                                        <ul>
                                            <h4>Biscuits & Cookies</h4>
                                            <li><a href="#">Salted Biscuits</a></li>
                                            <li><a href="#">Marie, Health, Digestive</a></li>
                                            <li><a href="#">Cream Biscuits & Wafers</a></li>
                                            <li><a href="#">Glucose & Milk Biscuits</a></li>
                                            <li><a href="#">Cookies</a></li>
                                        </ul>
                                        <ul>
                                            <h4>Bakery Snacks</h4>
                                            <li><a href="#">Bread Sticks & Lavash</a></li>
                                            <li><a href="#">Cheese & Garlic Bread</a></li>
                                            <li><a href="#">Puffs, Patties, Sandwiches</a></li>
                                            <li><a href="#">Breadcrumbs & Croutons</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="items row justify-content-between align-items-center">
                                <li className="col-xl-11 padding-0 row align-items-center"><img src={img8} />
                                    <h6>Grocery & Staples</h6>
                                </li>
                                <li className="col-xl-1 padding-0 text-center"><i className="fa-solid fa-chevron-right"></i>
                                </li>
                                <div className="all-items" style={{top: "-290px"}}>
                                    <div className="row justify-content-between">
                                        <ul>
                                            <h4>Grocery</h4>
                                            <li><a href="#">Lemon, Ginger & Garlic</a></li>
                                            <li><a href="#">Indian & Exotic Herbs</a></li>
                                            <li><a href="#">Organic Vegetables</a></li>
                                            <li><a href="#">Organic Fruits</a></li>
                                        </ul>
                                        <ul>
                                            <h4>Organic Staples</h4>
                                            <li><a href="#">Organic Dry Fruits</a></li>
                                            <li><a href="#">Organic Dals & Pulses</a></li>
                                            <li><a href="#">Organic Millet & Flours</a></li>
                                            <li><a href="#">Organic Sugar, Jaggery</a></li>
                                            <li><a href="#">Organic Masalas & Spices</a></li>
                                            <li><a href="#">Organic Rice, Other Rice</a></li>
                                            <li><a href="#">Organic Flours</a></li>
                                            <li><a href="#">Organic Edible Oil, Ghee</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
            <nav className="nav-items">
                <ul>
                    <div className="row" id="show">
                        <li className="nav-menu">
                            <a href="#" className="a">Home<i className="fa-solid fa-chevron-down"></i>
                            </a>
                            <ul className="dropdown-menu">
                                <li><a href="#">Kartshop</a></li>
                                <li><a href="#">Sweetshop</a></li>
                                <li><a href="#">Organic</a></li>
                                <li><a href="#">Supershop</a></li>
                                <li><a href="#">classNameic shop</a></li>
                                <li><a href="#">Furniture</a></li>
                                <li><a href="#">Search Oriented</a></li>
                                <li><a href="#">Category Focus</a></li>
                                <li><a href="#">Fashion</a></li>
                            </ul>
                        </li>
                        <li className="nav-menu">
                            <a href="#" className="a">Shop<i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Shop Category Slider</a>
                                    <a href="#">Shop Category Sidebar</a>
                                    <a href="#">Shop Banner</a>
                                    <a href="#">Shop Left Sidebar</a>
                                    <a href="#">Shop List</a>
                                    <a href="#">Shop Right Sidebar</a>
                                    <a href="#">Shop Top Filter</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu">
                            <a href="#" className="a">Product<i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Product 4 Image</a>
                                    <a href="#">Product Thumbnail</a>
                                    <a href="#">Product Bundle</a>
                                    <a href="#">Product Slider</a>
                                    <a href="#">Product Sticky</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu">
                            <a href="#" className="a">Mega Menu<i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="mega-dropdown-menu">
                                <div className="row">
                                    <div className="col-lg-4 col-xl-3">
                                        <li>
                                            <div className="w-100">
                                                <h6>Daily Vegetables</h6>
                                                <a href="#">Product 4 Image</a>
                                                <a href="#">Product Thumbnail</a>
                                                <a href="#">Product Bundle</a>
                                                <a href="#">Product Slider</a>
                                                <a href="#">Product Sticky</a>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="col-lg-4 col-xl-3">
                                        <li>
                                            <div className="w-100">
                                                <h6>Baby Tender</h6>
                                                <a href="#">Product 4 Image</a>
                                                <a href="#">Product Thumbnail</a>
                                                <a href="#">Product Bundle</a>
                                                <a href="#">Product Slider</a>
                                                <a href="#">Product Sticky</a>
                                            </div>
                                        </li>
                                    </div>
                                    <div className="col-lg-4 col-xl-3">
                                        <li>
                                            <div className="w-100">
                                                <h6>Exotic Vegetables</h6>
                                                <a href="#">Product 4 Image</a>
                                                <a href="#">Product Thumbnail</a>
                                                <a href="#">Product Bundle</a>
                                                <a href="#">Product Slider</a>
                                                <a href="#">Product Sticky</a>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li className="nav-menu">
                            <a href="#" className="a">Blog<i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Blog Detail</a>
                                    <a href="#">Blog Grid</a>
                                    <a href="#">Blog List</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu">
                            <a href="#" className="a">Pages<i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Email Template </a>
                                    <a href="#">Invoice Template </a>
                                    <a href="#">404</a>
                                    <a href="#">About Us</a>
                                    <a href="#">Cart</a>
                                    <a href="#">Contact</a>
                                    <a href="#">Checkout</a>
                                    <a href="#">Coming Soon</a>
                                    <a href="#">Compare</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu">
                            <a href="#" className="a">Seller<i className="fa-solid fa-chevron-down"></i></a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a href="#">Become a Seller</a>
                                    <a href="#">Seller Dashboard</a>
                                    <a href="#">Seller Detail</a>
                                    <a href="#">Seller Detail 2</a>
                                    <a href="#">Seller Grid</a>
                                    <a href="#">Seller Grid 2</a>
                                </li>
                            </ul>
                        </li>
                    </div>
                </ul>
            </nav>
            <div className="bolt">
                <i className="fa-solid fa-bolt"></i>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header