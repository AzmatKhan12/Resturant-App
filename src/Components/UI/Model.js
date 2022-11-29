import  ReactDOM  from 'react-dom';
import React,{Fragment} from 'react';
import classes from './Model.module.css';

const Backdrop = props =>{
    return <div className={classes.backdrop}> </div>;
   
}

const ModelOverlay = props =>{
    return (
      <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
      </div>
    );
    
}

const ModelElement = document.getElementById("overlay");

const Model = props =>{
    return (
      <Fragment>
        {ReactDOM.createPortal(<Backdrop />, ModelElement)}
        {ReactDOM.createPortal(
          <ModelOverlay>{props.children}</ModelOverlay>,
          ModelElement
        )}
      </Fragment>
    );
}

export default Model;