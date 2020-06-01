import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RegHelp = () => {
  return (
    <Fragment>
      
      <div >
      <h1 className='large text-primary my-0'>Here we help people via cars</h1>
        <ul className='reghelp'>
          <li className='regrule-item rhphotos' id='sm'></li>
          <li className='regrule-item rhphotos' id='at'></li>
          <li className='reghelp-item' id='smt'>People's safety is of the utmost importance. Please use this website safely</li>
          <li className='reghelp-item' id='att'>Please try to not take photos of people's cars. This website is about helping your fellow human. We should be helpful with people</li>
          <li className='regrule-item rhphotos' id='pxh'></li>
          <li className='regrule-item rhphotos' id='rk'></li>
          <li className='reghelp-item' id='pxth'>Kids are allowed to help other humans here. (Under the watchful eye of a parent / guardian)</li>
          <li className='reghelp-item' id='rkt'>You can have helped someone randomly... or someone you might know. Don't give up on your fellow humans, help them</li>
          <li className='regrule-item rhphotos' id='mt'></li>
          <li className='regrule-item rhphotos' id='pc'></li>
          <li className='reghelp-item' id='mtt'>Be.. excellent to each other... and..</li>
          <li className='reghelp-item' id='pct'>Pick up your litter</li>
        </ul> 
      </div>
      <ul className='credits my-2'>
        <h3>Regulations Photo Credits from UnSplash</h3>
        <br />
        <li>Stafe Safe and a Cup of Coffee - <strong>Sincerely Media</strong></li>
        <li>Lady Taking Picture of Flowers on Busy Bridge - <strong>Artur Tumasjan</strong></li>
        <li>Little Girl Having Fun with Mobile - <strong>Pan Xiaozhen</strong></li>
        <li>Don't Give Up - <strong>Rosie Kerr</strong></li>
        <li>Excellent Friends - <strong>Mareko Tamaleaa</strong></li>
        <li>Four Assorted-Colour Rubbish Bins - <strong>Pawel Czerwinski</strong></li>
      </ul>
      <br />
      <br />
      <div className='btnrules'>
        <Link className='btn btn-success' to='/reg'>Car Help Home</Link>
      </div>
    </Fragment>
  );
};

export default RegHelp;
