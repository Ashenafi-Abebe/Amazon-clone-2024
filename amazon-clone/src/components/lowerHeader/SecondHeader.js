import React from "react";
import "./SecondHeader.css";
import { LuMenu } from "react-icons/lu";

function SecondHeader() {
  return (
    <section className="Lower_outer_wrapper">
      <div className="menu_rwapper">
        <div className="menu_section">
          <a href="/" className="menu_icon">
            {<LuMenu size={25} />}
          </a>
        </div>
        <div className="lower_All_rwapper">
          <a href="/">
            <p>All</p>
          </a>
        </div>
      </div>
      <div className="Valentine_rwapper">
        <a href="/">
          <p>Valentine's Gifts</p>
        </a>
      </div>

      <div className="Medical_rwapper">
        <a href="/" className="medical_paragraphe">
          <select name="" id="">
            <option value="">
              {" "}
              <p>Medical Care</p>
            </option>
          </select>
        </a>
      </div>

      <div className="groceries_rwapper">
        <a href="/" className="groceries_inner_rwapper">
          <select name="" id="">
            <option value="">
              {" "}
              <p>Groceries</p>
            </option>
          </select>
        </a>
      </div>

      <div className="bestseller_rwapper">
        <a href="/">
          <p>Best Sellers</p>
        </a>
      </div>

      <div className="amazonbasics_rwapper">
        <a href="/">
          <p>Amazon Basics</p>
        </a>
      </div>

      <div className="prim_rwapper">
        <a href="/">
          <select name="" id="">
            <option value="">
              <p>Prime</p>
            </option>
          </select>
        </a>
      </div>

      <div className="newreleases_rwapper">
        <a href="/">
          <p>New Releases</p>
        </a>
      </div>
      <div className="todaysdeals_rwapper">
        <a href="/">
          <p>Today's Deals</p>
        </a>
      </div>
      <div className="customer_rwapper">
        <a href="/">
          <p>Customer Serves</p>
        </a>
      </div>
      <div className="music_rwapper">
        <a href="/">
          <p>Music</p>
        </a>
      </div>
      <div className="registry_rwapper">
        <a href="/">
          <p>Registry</p>
        </a>
      </div>
      <div className="books_rwapper">
        <a href="/">
          <p>Books</p>
        </a>
      </div>
    </section>
  );
}

export default SecondHeader;
