import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RegHelp = () => {
  
  return (
    <Fragment>
      
      <div >
      <h1 className='large text-primary my-0 lan'>Why should we be helpful here?</h1>
        <ul className='reghelp'>
          <li className='regrule-item rhphotos' id='sm'></li>
          <li className='regrule-item rhphotos' id='at'></li>
          <li className='reghelp-item' id='smt'>Sometimes by not being a hindrance we can effectively be helping, however we all often go one step further (let someone know they've got blue smoke)</li>
          <li className='reghelp-item' id='att'>e.g. Simply let someone know their brake lights aren't working, could help prevent accidents by less driving time with faulty equipment (Please try to not take photos of people's cars) </li>
          <li className='regrule-item rhphotos' id='pxh'></li>
          <li className='regrule-item rhphotos' id='rk'></li>
          <li className='reghelp-item' id='pxth'>Kids get a kick out of genuinely helping, as are more switched on than ever therefore can help (under the watchful eye of a parent / guardian). They also have excellent observational skills</li>
          <li className='reghelp-item' id='rkt'>You can have helped someone randomly, anonymously... or someone you might know. Don't give up on your fellow humans, especially during these current times (or if their indicators aren't working)</li>
          <li className='regrule-item rhphotos' id='mt'></li>
          <li className='regrule-item rhphotos' id='pc'></li>
          <li className='reghelp-item' id='mtt'>Be.. excellent to each other... </li>
          <li className='reghelp-item' id='pct'>...and pick up your litter</li>
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
