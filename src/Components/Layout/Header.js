import { Fragment } from "react" ;
import Banner from '../../Assets/biryani.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";


const Header = props =>{
    return (
      <Fragment>
        <header className={classes.header}>
          <h1>Zaika Resturant </h1>
          <HeaderCartButton/>
        </header>
        <div className= {classes['main-image']}>
          <img src={Banner} alt= ' A table full of Delicious food' />
        </div>
      </Fragment>
    );
}

export default Header;