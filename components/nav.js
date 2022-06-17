let exportNav=()=>{
    return `<nav>
    <section id="upper_strip">
        <div></div>
        <div></div>
        <div class="top_right">
            <sub class="top_icon">
                <img src="https://content1.geekbuying.com/V1.4/en/images/indexV7/mobile.png" alt="Mobile Icon" id="mobile_icon">
                <p>Save BIG with our app!</p>
                <img src="./images/arrow.png" alt="Arrow" id="arrow"> 
            </sub>
            <sub class="top_icon">
                <p>Language</p>
                <img src="./images/arrow.png" alt="Arrow" id="arrow">
            </sub>
            <sub class="top_icon">
                <p>Support Center</p>
                <img src="./images/arrow.png" alt="Arrow" id="arrow">
            </sub>
        </div>
    </section>
    <section id="middle_strip">
        <sub class="brand_logo">
            <img src="./images/brand_logo-2.png" alt="brand_logo">
        </sub>
        <sub class="search_box">
            <div class="search_category">
                <p>All Categories</p>
                <span id="category_dropdown_Sbox">
                    <img src="./images/Category_arrow_small.png" alt="arrow_small" id="category_arrow">
                    <div class="category_container">
                        <div>
                            <p>All Categories</p>
                            <br>
                            <p>Smart Home & Garden</p>
                            <br>
                            <p>Phones & Accessories</p>
                            <br>
                            <p>Computers, Tablets & Accessories</p>
                            <br>
                            <p>Wearable Devices</p>
                            <br>
                            <p>Automobiles & Motorcycles</p>
                        </div>
                        <div>
                            <p>Sports & Outdoors</p>
                            <br>
                            <p>Consumer Electronics</p>
                            <br>
                            <p>TV Boxes & Mini PCs</p>
                            <br>
                            <p>Toys & Hobbies</p>
                            <br>
                            <p>Security System</p>
                            <br>
                            <p>Fashion</p>
                        </div>
                    </div>
                </span>
            </div>
            <div class="search_input">
                <input type="hidden" value="-1">
                <input type="text" class="search_key" placeholder="Search by keywords">
                <span>
                    <img src="https://content1.geekbuying.com/V1.4/en/images/indexV7/search.png" alt="search_btn" id="search_btn">
                </span>
            </div>
        </sub>
        <sub class="middle_icons">
            <div class="ship_select">
                <span>Ship to</span>
                <div class="currency">
                    <img src="./images/India_Logo.png" alt="india_flag" id="flag_icon">
                    <p>/ INR</p>
                    <img src="./images/Ship_to_arrow.png" alt="arrow_small" id="currency_arrow">
                </div>
            </div>
            <div class="sign_in">
                <span class="dropdown_signin">
                    <img src="https://content1.geekbuying.com/V1.4/en/images/indexV7/user.png" alt="Sign_In_Logo">
                    <div class="signin_dropdown_content">
                        <div id="welcome_text">
                            <p>Welcome to Geekbuying</p>
                        </div>
                        <div id="buttons">
                            <button class="join">Join</button>
                            <button class="signin">Sign In</button>
                        </div>
                        <span id="separator_dropdown">
                            <hr>
                            <p>or</p>
                            <hr>
                        </span>
                        <div id="google_signin">
                            <img src="./images/Google_signin.png" alt="Google signin">
                        </div>
                    </div>
                    <div class="signout_dropdown_content">
                        <br>
                        <p>My Orders</p>
                        <br>
                        <p>My Wishlist</p>
                        <br>
                        <p>My Coupons</p>
                        <br>
                        <p>My Profile</p>
                        <br>
                        <div>
                            <a href="#"><p>Sign out</p></a>
                        </div>
                        <br>
                    </div>
                </span>
               <p>Sign in</p>
            </div>
            <div class="cart_icon">
                <div class="cart_icon_img">
                    <img src="https://content1.geekbuying.com/V1.4/en/images/indexV7/cart.png" alt="cart_icon">
                </div>
                <span class="red_circle">0</span>
            </div>
        </sub>
    </section>
    <section id="lower_strip">
        <sub class="contents">
            <div class="cat_div">
                <div class="dropdown">
                    <img class="hamburger_dropdown" src="https://content1.geekbuying.com/V1.4/en/images/indexV7/categories.png" alt="hamburger_menu">
                    <div class="dropdown_content">
                        <div class="first">
                            <br>
                            <div id="warehouse">
                                <p>Local Warehouses</p>
                            </div>
                            
                            <div id="outdoors">
                                <p>Sports & Outdoors</p>
                            </div>
                            
                            <div id="gardens">
                                <p>Smart Home & Garden</p>
                            </div>
                            
                            <div id="consumer">
                                <p>Consumer Electronics</p>
                            </div>
                            
                            <div id="TV_Box">
                                <p>TV Boxes & Mini PCs</p>
                            </div>
                            
                            <div id="computers">
                                <p>Computers, Tablets & Accessories</p>
                            </div>
                            
                            <div id="toys">
                                <p>Toys & Hobbies</p>
                            </div>
                            
                            <div id="phones">
                                <p>Phones & Accessories</p>
                            </div>
                            
                            <div id="automobiles">
                                <p>Automobiles & Motorcycles</p>
                            </div>
                            
                            <div id="wearables">
                                <p>Wearable Devices</p>
                            </div>
                            
                            <div id="security">
                                <p>Security Systems</p>
                            </div>
                            
                            <div id="fashion">
                                <p>Fashion</p>
                            </div>
                            
                        </div>
                        <div class="second">
                            <br>
                        </div>
                    </div>
                    <h3>Categories</h3>
                </div>   
            </div>
            <div> <a href="#"><h3>New</h3></a></div>
            <div> <a href="#"><h3>Bestselling</h3></a></div>
            <div> <a href="#"><h3>Brand</h3></a></div>
            <div> <a href="#"><h3>Clearance</h3></a></div>
            <div> <a href="#"><h3>Deals</h3></a></div>
            <div> <a href="#"><h3>Coupon</h3></a></div>
            <div> <a href="#"><h3>App Only</h3></a></div>
        </sub>
    </section>
</nav>`;
}
export default exportNav;