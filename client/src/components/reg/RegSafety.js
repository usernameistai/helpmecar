import React, { Fragment } from 'react';

const RegSafety = () => {
  return (
    <Fragment>
      <h1 className='text-primary large'>HelpMe - Car Safety</h1>
      <p>The following data is from the <span><a rel='noopener noreferrer' target='_blank' href='https://www.gov.uk/government/statistical-data-sets/ras50-contributory-factors'> Department for Transport Statistics </a></span></p>
      <div className='text-primary'>RAS50002 Contributory factors allocated to vehicles or pedestrians in reported accidents, Great Britain, 2014-2018</div>
      <div className='container-reg2'>
       <div id='accidents' />
      </div>
      <p>What do I want to occur here</p>
      <ul>
        <li>Facts about the number of people directly invulved in accidents</li>
        <li>The ratios of men / women getting in accidents and the numbers of those needing medical attention</li>
        <li>Maybe talk about the increase in peoples cars not being defective could lead to better indication of car movement</li>
        <li>Talk about people not fullowing the high way code anymore</li>
        <ul>
          <li>e.g. People braking before indicating (not following the MSM principle)</li>
        </ul>
        <li>We can see a general trend of the number of accidents decreasing over the five years</li>
        <li>Top two reasons</li>
        <ol>
          <li>Driver / rider failed to look properly, consistently over 40% of accidents (high 46% in 2014)</li>
          <li>Driver / rider failed to judge other person's path or speed, consistently greater than 20% of all accidents (high 24% also in 2014)</li>
        </ol>
        <li><p>With the top reason, 'failing to look properly', had the lights been working properly could this have reduced the number of incidents owing to the better signalling / indication of manoeuvre from working equipment?</p></li>
        <li></li>
        <li>The best thing this site could hope to achieve is reduce the number of accidents on the road and the very least could help drivers adhere to the </li>
        <li>With the next reason 'failed to judge other person's path or speed', this sounds a more likely cause from faulty car equipment. Having personally nearly gone into the back of a Vauxhall Combi van who only had one of three brake lights working, on top of the car being unclean causing said brake light to be even dimmer... I thought I would do something about it and here we are</li>
      </ul>
      <br />
      <p>The following data is from the <span><a rel='noopener noreferrer' target='_blank' href='https://www.gov.uk/government/statistical-data-sets/ras20-drivers-riders-and-vehicles-in-reported-road-accidents'> Department for Transport Statistics </a></span></p>
      <div className='text-primary'>RAS20002 Drivers in reported accidents by gender, number injured, road user type and age, Great Britain, 2018</div>
      <div className='container-reg2'>
        <div id='accidents2' />
        <ol>
          <li id='ol'><p>Includes cases where gender was not reported. <span id='sp'>Source: DfT STATS19</span></p></li>
          <li id='ol'><p>Includes electric motorcycles and cases where engine size was not reported. <span id='sp'>The figures in this table are National Statistics</span></p></li>
        </ol>
      </div>
      <div>
        <ul>
          <li>Is it worth including links to other sites about road data safety stats. etc.?</li>
          <li>Include a little blurb about each of them plus link (but only if helpful IMO) </li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className='container-reg2'>
        <div id='car-d' />
      </div>
      <ul>
        <li>Vehicle Licensing Statistics: Annual 2018 - Page 9 In the United Kingdom, there were 39.4 million licensed vehicles at the end of 2018.This figure was made of 32.5 million (83%) vehicles registered to an address in England, 1.9 million (5%) in Wales, 3.0 million (8%) in Scotland, and 1.2 million (3%) in Northern Ireland</li>
        <li>Regionally, this was markedly lower in London (348) than in any other English region or country, reflecting its highly urbanised nature</li>
        <li>There was less variation between the other regions, with the rate being highest in the southern English regions (of which the South West was highest at 729) and lowest among the northern English regions (of which the North East was lowest at 521)</li>
        <li>Data and map from <a rel='noopener noreferrer' target='_blank' href='https://assets.publishing.service.gov.uk/government/uploads/system/uploads/attachment_data/file/800502/vehicle-licensing-statistics-2018.pdf'>Vehicle Licensing Statistics: Annual 2018</a> release</li>
      </ul>
    </Fragment>
  );
}

export default RegSafety;
