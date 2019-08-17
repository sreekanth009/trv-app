import React from "react";

const Header = () => {
  return (
    <section className={'navbar-wrap'}>
      <nav className={'navbar'}>
        <div className={'navbar-header'}>
          <a className={'navbar-brand'} href={'/'}>Traveller</a>
        </div>
        <ul className={'nav navbar-nav-main'}>
          {/* <li className={'active'}><a href={'/about'}>About</a></li> */}
        </ul>
        <ul className={'nav navbar-nav navbar-right'}>
          <li>
            <span className={'fa fa-user-circle'}></span>
            <p>
              John
              <span className={'fa fa-chevron-down'}></span>
            </p>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Header;
