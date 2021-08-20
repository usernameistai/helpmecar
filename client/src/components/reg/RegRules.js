import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const RegRules = () => {

  return (
    <Fragment>
      <div>
        <h1 className='text-primary large lan'>Rules & Regulations</h1>
        <div className='container-reg4'>
          <h2 className='large r'>Rules <span id='uls'>(Please don't break them)</span> </h2>
          <h3 className='regrule-item rrphotos' id='ul'>No driver(s) may enter data</h3>
          <h2 className="lan" id='s'> until stopped safely* / MSM**</h2>
          <div className='container-reg5'>
            <p className='regrule-item2' id='p'>Strictly no drivers currently driving may use this site's functionality please, we do not want people crashing </p>
            <p className='regrule-item2' id='p'>One aspect of human thought is reflection and for introspection. We thought it would be good to help out motorists who may not be able to check their own car.
            When in a safe place, if viable please share what is observably wrong but only if safe to do so. You have just looked out for someone</p>
            <p className='regrule-item2' id='p'>One world. One race. Lots of people with potentially faulty cars</p>
            <p className='regrule-item2'id='p'>Remember to be courteous to drivers around you and drive safely </p>
          </div>
          <ul className='regrule'>
            <h4 className='regrule-item rrphotos rp' id='px'>People allowed to enter data include the following : -</h4>
            <li className='regrule-item rrphotos rp' id='lp'>Passengers in cars & lorries, not on motorcycles</li>
            <li className='regrule-item rrphotos rp' id='vp'>Cyclists (not currently cycling) </li>
            <li className='regrule-item rrphotos rp' id='tv'>Pedestrians (not crossing the road)</li>
            <li className='regrule-item rrphotos rp' id='jd'>People sitting on benches</li>
            <li className='regrule-item rrphotos rp' id='jk'>People who have just recently stopped skateboarding or bmxing</li>
            <li className='regrule-item rrphotos rp' id='ccr'>People with mobiles</li> 
            <li className='regrule-item rrphotos rp' id='jg'>People who take life seriously</li>
            <li className='regrule-item rrphotos rp' id='pdp'>People who don't take life seriously</li>
            <li className='regrule-item rrphotos rp' id='dh'>Anyone who wants to help</li>
          </ul>
          <p id='p'>Remember, no drivers to use this site, please</p>
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
          <li>Not a picture of someone not driving - <strong>I.M.Notdriving</strong></li>
        </ul>
        <br />
        <h3 className='msm'>* Pulled over correctly and safely and are not blocking traffic, so not driving</h3>
        <h3 className='msm'>**MSM - Mirror Signal Manoeuvre (this is still driving, so not this)</h3>
        <div className='my-1 btnrules'>
          <Link className='btn btn-success m' to='/reg'>Car Help Home</Link>
          <Link className='btn btn-primary m' to='/reg-help'>The Point of Being Helpful</Link>
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
          <li className='regreg-item p-1' id='cbt'><p>Every year we must get our cars checked to be officially road worthy to pass our <span><Link to='https://www.gov.uk/check-mot-status'> MOT Test</Link></span> , wherein said faults will have been sorted (we hope) or our cars can become fossils</p></li>
          <li className='regreg-item p-1' id='tdt'><p>The point of this site is mainly human and car safety, hopefully with working lights and other elements we might stay safer, get in less accidents and incur less costs</p></li>
          <li className='regreg-item rregphotos' id='td'></li>
          <li className='regreg-item rregphotos' id='bw'></li>
          <li className='regreg-item p-1' id='bwt'><p>At some point in our lives we were happy little children, then cynicism and seeing each other as not equal takes hold. We're taught to try to be better than your fellow human. Be more little boy or girl</p></li>
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
          <li>Remember, nnnnooo drivers - <strong>I.M.Notdriving</strong></li>
        </ul>
        <div className='my-1 btnrules'>
          <Link className='btn btn-success m' to='/reg'>Car Help Home</Link>
          <Link className='btn btn-primary m' to='/reg-help'>The Point of Being Helpful</Link>
        </div> 
        <p id='p'>No drivers, is this the seventh time?</p>
      </div>
    </Fragment>
  )
};

export default RegRules;
