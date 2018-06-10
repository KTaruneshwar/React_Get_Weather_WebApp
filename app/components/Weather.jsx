var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false,
      errval:false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false,
        errval:false
      });
    }, function (errorMessage) {

      if(errorMessage.message == 'city not found')
      {
        that.setState({isLoading: false,
          errval: true});
        }else {
          that.setState({isLoading: false});
          alert("Please check your internet connection...");
        }

      });
    },
    render: function () {
      var {isLoading, temp, location, errval} = this.state;

      function renderMessage () {
        if (isLoading) {
          return <h3 className="text-center">
            Fetching weather...
          </h3>;
        } else if (temp && location) {
          return <WeatherMessage
            temp={temp}
            location={location}
            errval={errval}/>;
        }
      }

      return (
        <div>
          <h1 className="text-center page-title">
            Get Weather
          </h1>
          <WeatherForm onSearch={this.handleSearch}/>
          {renderMessage()}
        </div>
      )
    }
  });

  module.exports = Weather;
