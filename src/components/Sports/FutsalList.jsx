import React from 'react'
import Card from '../Commons/Card'
import classes from './FutsalList.module.css'
import Inposet from '../inpo/Inposet'


const FutsalList = (props) => {

  return (
    <div className={classes.cards}>
      
        <button className={classes.button} onClick={props.openinpo} >
          <Card category={props.category} name='A' loc='Seoul'/>
          
        </button>

        <button className={classes.button} onClick={props.openinpo} >
        <Card category={props.category} name='B' loc='Busan'/>
        </button>

        <button className={classes.button} onClick={props.openinpo} >
        <Card category={props.category} name='C' loc='Incheon'/>
        </button>

        <button className={classes.button} onClick={props.openinpo} >
        <Card category={props.category} name='D' loc='Daegu'/>
        </button>

        <button className={classes.button} onClick={props.openinpo} >
        <Card category={props.category} name='E'loc='Daejeon'/>
        </button>

        <button className={classes.button} onClick={props.openinpo} >
        <Card category={props.category} name='F'loc='Ulsan'/>
        </button>
    </div>
  )
}

export default FutsalList