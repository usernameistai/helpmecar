import React, { Fragment } from 'react';

const RegSafety = () => {
  
  return (
    <Fragment>
      <h1 className='text-primary large'>HelpMe - Car Safety</h1>
      <ul>
        <li><blockquote><p>The best thing this site could hope to achieve is reduce the number of accidents on the road and the very least could help drivers ensure their car's are safe and roadworthy</p><span id='sp'> - me</span></blockquote></li>
      </ul>
      <br />
      <hr />
      <br />
      <p>The following data is from the <span><a rel='noopener noreferrer' target='_blank' href='https://www.gov.uk/government/statistical-data-sets/ras50-contributory-factors'> Department for Transport Statistics </a></span></p>
      <div className='text-primary'><h4>RAS50002 Contributory factors allocated to vehicles or pedestrians in reported accidents, Great Britain, 2014-2018</h4></div>
      <div className='container-reg2'>
       <div id='accidents' />
      </div>
      <ul>
        <li className='text-primary'><h4>The following are the potential top associated accidents with having faulty components</h4></li>
        <br />
        <li><blockquote><p>Driver / Rider failed to look properly - 40% of accidents in 2018</p></blockquote></li>
        <li className='p-1 m-1'><p>If a car involved had faulty brake or indicator lights, this could be a contributory factor towards said driver not looking properly and then not seeing the potential car</p></li>
        <li><blockquote><p>Driver / Rider failed to judge other person's path or speed - 21% of accidents in 2018</p></blockquote></li>
        <li className='p-1 m-1'><p>At times with poor visibility such as at night, heavy rain or during fog, people are strained to see the other person's car with lights fully working. When not working this puts an extra strain on driver's surrounding the car with faulty lights and again could be a contributory factor as reduces said driver's distance perception</p></li>
        <li><blockquote><p>Poor turn or manoeuvre - 13% of accidents in 2018</p></blockquote></li>
        <li className='p-1 m-1'><p>The poor action of the driver and people getting into accidnts could be poor equipmwent on top of poor driving. Many people now brake and then indicate, which gives no prior warning for cars around</p></li>
        <li><blockquote><p>Sudden braking - 5% of accidents in 2018</p></blockquote></li>
        <li className='p-1 m-1'><p>Personally I have nearly fallen victim to this when people suddenly brake and only have one out of three potential brake lights working (that's assuming the car is clean the lights are clear when applied), only through paying 100% attention have avoided several accidents</p></li>

        <li>There is a substantial trend towards the overall decrease in accidents from 115673 accidents in 2014 to 84968 accidents in 2018. What could be the causes of this?</li>
        <li className='phalf m-1'>
          <p className='phalf'>1. The inclusion of more 20mph zones around cities</p>
          <p className='phalf'>2. More automatic indication of faulty car parts in newer cars</p>
          <p className='phalf'>3. People are driving better and more considerately</p>
          <p className='phalf'>4. Less people are driving - using public transport or cycling</p>
        </li>
        <li>Yet despite these encouranging trends, driving on the roads it appears less people are interested in following The Highway Code or driving appropriately (i.e. safely and considerately)</li>
        <li className='px-1'>e.g. People braking before indicating (not following the MSM principle)</li>
      </ul>
      <br />
      <hr />
      <br />
      
      <p>The following data is from the <span><a rel='noopener noreferrer' target='_blank' href='https://www.gov.uk/government/statistical-data-sets/ras20-drivers-riders-and-vehicles-in-reported-road-accidents'> Department for Transport Statistics </a></span></p>
      <div className='text-primary'><h4>RAS20002 Drivers in reported accidents by gender, number injured, road user type and age, Great Britain, 2018</h4></div>
      <div className='container-reg2'>
        <div id='accidents2' />
        <ol>
          <li id='ol'><p>Includes cases where gender was not reported. <span id='sp'>Source: DfT STATS19</span></p></li>
          <li id='ol'><p>Includes electric motorcycles and cases where engine size was not reported. <span id='sp'>The figures in this table are National Statistics</span></p></li>
        </ol>
      </div>
      <div>
        <ul>
          <li className='text-primary'>The table above shows two immediate patterns</li>
          <li><blockquote><p> Males are nearly twice as likely to be involved in accidents than females - 92005 compared to 55268 </p></blockquote></li>
          <br />
          <li><blockquote><p> If females are involved in accidents they are more likely to be casualties  - 53% compared to 38%</p></blockquote></li>
          <li className='p-1'>There appears to be less variation across the age ranges with females drivers. Males have more definite peaks with the age ranges 25 - 29 and 30 - 34 to the highest peaks being 40 - 49 (highest number number of accidents) and 50 - 59 (second highest)</li>
          <li className='p-1'>Not counting the age range 25 - 34 (which would be far and away the highest number of accidents in an age range), both female and male drivers between the ages of 40 - 49 had the highest number of incidents in 2018</li>
          <li className='p-1'> There are potentially more males requiring to keep an eye on their faulty components and as such should use this site. Females, you could help other females and males out by not only driving more safely but also letting people know their car needs a little work.. (before it's MOT) </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <ul>
        <li>Data and map from <a rel='noopener noreferrer' target='_blank' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/800502/vehicle-licensing-statistics-2018.pdf'>Vehicle Licensing Statistics: Annual 2018</a> release</li>
      </ul>
      <div className='text-primary'><h4>Map of licensed vehicles per 1000 head of population by unitary authority, Uniten Kingdom, 2018</h4></div>
      <div className='container-reg2'>
        <div id='car-d' />
      </div>
      <br />
      <ul>
        <li>
        Vehicle Licensing Statistics: Annual 2018 - Page 9. 
        <blockquote><p> In the United Kingdom, there were 39.4 million licensed vehicles at the end of 2018.This figure was made of 32.5 million (83%) vehicles registered to an address in England, 1.9 million (5%) in Wales, 3.0 million (8%) in Scotland, and 1.2 million (3%) in Northern Ireland</p></blockquote>
        </li>
        <li className='p-1'>Regionally, this was markedly lower in London (348 per 1000 head) than in any other region or country, potentially reflecting its highly urbanised nature and / or provision of excellent public transportation. There was less variation between the other regions, with the rate being highest in the southern English regions (of which the South West was highest at 729) and lowest among the northern English regions (of which the North East was lowest at 521)</li>
        <li className='p-1'>Data and map from <a rel='noopener noreferrer' target='_blank' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/800502/vehicle-licensing-statistics-2018.pdf'>Vehicle Licensing Statistics: Annual 2018</a> release</li>
      </ul>
    </Fragment>
  );
}

export default RegSafety;
