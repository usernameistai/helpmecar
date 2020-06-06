import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RegRules = () => {
  return (
    <Fragment>
      <div>
        <h1 className='text-primary large'>Rules & Regulations</h1>
        <div className='container-reg4'>
          <h2 className='large r'>Rules <span id='uls'>(Please don't break them)</span> </h2>
          <h3 className='regrule-item rrphotos' id='ul'>NO DRIVERS(S) MAY ENTER DATA</h3>
          <h2 id='s'> until stopped safely* / MSM**</h2>
          <p id='p'>It is down to the discretion of the people using this site and their own integrity as whether or not to abide by the following rules </p>
          <p id='p'>The whole point of life is the ability to reflect and for introspection. This site hopes people are acting and behaving like people of the future. 
            Everyone working together and helping each other, not putting people down and being judgemental like many can be in this self-promoting social media in which we live.</p>
          <p id='p'>You can't help it being caught up in the wheels of social media and ones self-promoted digital-self, well of course you can and at some point you might even wake up.</p>
          <ul className='regrule'>
            <h4 className='regrule-item rrphotos' id='px'>People allowed to enter data include the following : -</h4>
            <li className='regrule-item rrphotos' id='lp'>Passengers in cars & lorries, not on motorcycles</li>
            <li className='regrule-item rrphotos' id='vp'>Cyclists (not currently cycling) </li>
            <li className='regrule-item rrphotos' id='tv'>Pedestrians (not crossing the road)</li>
            <li className='regrule-item rrphotos' id='jd'>People sitting on benches</li>
            <li className='regrule-item rrphotos' id='jk'>People who have just recently stopped skateboarding or bmxing</li>
            <li className='regrule-item rrphotos' id='ccr'>People with mobiles</li> 
            <li className='regrule-item rrphotos' id='jg'>People who take life seriously</li>
            <li className='regrule-item rrphotos' id='pdp'>People who don't take life seriously</li>
            <li className='regrule-item rrphotos' id='dh'>Anyone who wants to help</li>
          </ul>
        </div>
      </div>
      <div>
        <ul className='credits'>
          <h3 >Rules Photo Credits from UnSplash</h3>
          <br />
          <li>Little Girl Having Fun with Mobile - <strong>Pan Xiaozhen</strong></li>
          <li>Three Gents Being Passengers - <strong>Luke Porter</strong></li>
          <li>Lady Cycling through City - <strong>Vitor Pinto</strong></li>
          <li>People Crossing Tokyo Busy Junction - <strong>Timo Volz</strong></li>
          <li>Lady Sitting on a Bench - <strong>Jorge Dominguez</strong></li>
          <li>Skate Park with People Stopped - <strong>Jan Kopriva</strong></li>
          <li>Mobile Phone Amongst Technology - <strong>Caspar Camille Rubin</strong></li>
          <li>Magnificent Waterfall - <strong>Josh Gordon</strong></li>
          <li>Four Gents Laughing at Computer- <strong>Priscilla Du Preez</strong></li>
          <li>Smiling Helpful lady - <strong>David Hurley</strong></li>
        </ul>
        <br />
        <h3 className='msm'>* Pulled over correctly and safely and are not blocking traffic</h3>
        <h3 className='msm'>**MSM - Mirror Signal Manoeuvre</h3>
        <div className='my-2 btnrules'>
          <Link className='btn btn-success' to='/reg'>Car Help Home</Link>
          <Link className='btn btn-primary' to='/reg-help'>The Point of Being Helpful</Link>
        </div> 
      </div>
      <br />
      <div>
        <h2 className='large r'>Regulations </h2>
        <h3 className='regrule-item rrphotos' id='ul'>Drive safely and follow the Highway Code</h3>
        <ul className='regreg'>
          <li className='regreg-item p-1' id='nft'><p>Generally following the laws laid down in the <span><Link to='https://www.gov.uk/browse/driving/highway-code-road-safety'> High Way Code </Link></span> will ensure no problems when driving, apart from other cars. Let's hope their equipment isn't faulty!</p></li>
          <li className='regreg-item rregphotos' id='nf'></li>
          <li className='regreg-item rregphotos' id='cb'></li>
          <li className='regreg-item p-1' id='cbt'><p>Every year humans must get their cars checked over as we have to pass our <span><Link to='https://www.gov.uk/check-mot-status'> MOT Test</Link></span> , wherein said faults will have been sorted (we hope) or our cars can become fossils</p></li>
          <li className='regreg-item p-1' id='tdt'><p>The point of this site is mainly human and car safety. Hopefully with working lights and other elements we might stay safer, get in less accidents and incur less costs</p></li>
          <li className='regreg-item rregphotos' id='td'></li>
          <li className='regreg-item rregphotos' id='bw'></li>
          <li className='regreg-item p-1' id='bwt'><p>At some point in our lives this was us, devoid of bad, then we started believing in the cynicisms and pointless victories sought that adulthood seems only to hold. Be more little boy or girl</p></li>
          <li className='regreg-item p-1' id='cet'><p>Now is the time to start smiling, now is the time to help each other, now is the time to forget this and that and just be the helpful selfless human that is inside you</p></li>
          <li className='regreg-item rregphotos' id='ce'></li>
        </ul>
      </div>
      <div>
        <ul className='credits my-2'>
          <h3>Regulations Photo Credits from UnSplash</h3>
          <br />
          <li>Daunting Signs when not Familiar with Highway Code - <strong>Nick Fewings</strong></li>
          <li>Fossilised Abandoned American 1950's Pick-Up - <strong>Christopher Burns</strong></li>
          <li>Reflection of Car on Mobile Screen Lying on Keyboard - <strong>Tarun Dhiman</strong></li>
          <li>Little Boy Laughing on Bench with Book - <strong>Ben White</strong></li>
          <li>A Happy Man as People Should Be - <strong>Charles Etoroma</strong></li>
        </ul>
        <br />
        <div className='my-2 btnrules'>
          <Link className='btn btn-success' to='/reg'>Car Help Home</Link>
          <Link className='btn btn-primary' to='/reg-help'>The Point of Being Helpful</Link>
        </div> 
      </div>
    </Fragment>
  )
};

export default RegRules;
