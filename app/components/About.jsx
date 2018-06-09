var React = require('react');

var About = (props) => {
  return (
    <div className="text-center" >
      <h1>About</h1>
      <p>This is a simple Weather application build on React
        by K.TARUNESHWAR.<br></br>
      By this application you could get the temperature in
        celcius of any city just by typing the city name Search bar.
      </p>
      <p>
        Here are some of the tools i used:<br></br>
          <a href="https://facebook.github.io/react">React</a> - This
            was the JavaScript framework used.
<br></br>
          <a href="http://openweathermap.org">Open Weather Map</a> - I have used
            the Open Weather Map API to search for weather data by city name.
      </p>
    </div>
  )
};

module.exports = About;
