import React from "react";
import "./Header.css";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineSearch } from "react-icons/ai";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
function Header() {
  return (
    <>
      <section className="outer_wrapper">
        <div className="logo_seaction">
          {/* {logo} */}
          <div className="log_wrapper">
            <a href="/">
              <img
                className="log_image"
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </a>
          </div>
          <div className="delivery_section">
            <span>
              <p className="delivert_p">Delevery to</p>
              {<SlLocationPin />}USA
            </span>
          </div>
        </div>
        {/* search */}

        <div className="searchbar_wrapper">
          <div className="all_section">
            <select name="" id="">
              <option value="/">All</option>
            </select>
          </div>
          <div className="search_bar_1">
            <input type="text" name="" id="" placeholder="Search Amazon" />
          </div>
          <div className="search"> {<AiOutlineSearch />}</div>
        </div>
        <div className="flag_and_En_wrapper">
          <div>
            <a href="/">
              <img
                className="flag"
                src="https://pngimg.com/uploads/flags/flags_PNG14592.png"
                alt="usa flag"
              />
            </a>
          </div>{" "}
          <div className="en_option">
            <select name="" id="">
              <option value="EN">EN</option>
            </select>
          </div>{" "}
        </div>
        <div className="account_rwapper">
          {" "}
          <div class="Account_Wrapper">
            <a href="/" className="account_link">
              <div className="inner_account">
                <div className="account_greeting">
                  <p>Hello, sign in</p>
                </div>
                <p className="account_options">
                  Account & List <select name="/" id="/"></select>
                </p>
              </div>
            </a>
          </div>
          <div className="return_wrapper">
            <div className="inner_retuns_wrapper">
              {" "}
              <div className="return_orders">
                <div className="returns">
                  <a href="/">
                    {" "}
                    <p>Returns</p>
                  </a>
                </div>

                <div className="orders">
                  <a href="/">
                    <p> & Orders</p>{" "}
                  </a>
                </div>
              </div>
              <div className="cart_rwapper">
                <div>
                  <a href="/">
                    {" "}
                    <p className="zero_value">
                      <span>0</span>
                    </p>
                  </a>
                </div>
                <div className="cart_icon">
                  {" "}
                  <span>{<PiShoppingCartSimpleBold size={35} />}</span>
                </div>

                <div className="cart">
                  <p>Cart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
