import React from 'react';

import "./Navbar.scss";

import logo from "../../assets/icons/shopping-cart 1.svg";
import profileIcon from "../../assets/images/profile-pic.png";

const Navbar = () => {
  return (
    <div className='nav'>
      <div className="container">
        <a className="nav__logo">
          <img src={logo} alt="logo" />
          <span>MOBI MARKET</span>
        </a>
        <div className="nav__right">
          <a className="nav__btn">
            Подать объявление
          </a>
          <a className="nav__profile">
            <div className="nav__profile-name">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sunt temporibus expedita dignissimos eos? Excepturi, expedita odio! Cupiditate quod molestias ullam amet sunt vitae, quis, expedita consequatur non explicabo voluptas eveniet aut accusamus facilis quibusdam nostrum! Nostrum repudiandae natus harum nesciunt blanditiis similique. Iusto labore numquam et officiis. Quia, nam architecto ducimus, iure tempore neque pariatur excepturi ipsum soluta repudiandae laborum enim consectetur totam? Veritatis dolorem laborum amet porro earum eos totam facilis vel, a omnis praesentium exercitationem voluptate est nemo numquam aliquid voluptatibus laudantium quidem? Architecto, quod! Dignissimos beatae ratione corrupti repudiandae maiores molestiae cum suscipit voluptates est tempore?
            </div>
            <div className="nav__profile-email">
              sergeykrash01
            </div>
            <div className="nav__profile_pic">
              <img src={profileIcon} alt="pic" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;