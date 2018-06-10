var React = require('react');

var WeatherMessage = React.createClass({

render: function (){
var {temp, location, errval} = this.props;
return(
    <div>
      {errval == false ? <h3 className="text-center">It is {temp} celcius in {location}.</h3> : <h3 className="text-center">No such city found.</h3>}
    </div>
  );
}

});

module.exports = WeatherMessage;
