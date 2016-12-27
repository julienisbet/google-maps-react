import React from 'react'
import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export const Container = React.createClass({

  render: function() {
    return (
      <div>
      <Map google={this.props.google}
          style={{width: '90%', height: '90%'}}
          className={'map'}
          zoom={14}
          containerStyle={{}}
          centerAroundCurrentLocation={true}
          >
        <Marker
          name={'SOMA'}
          position={{lat: 37.778519, lng: -122.405640}} />
      </Map>
      </div>
    )
  }
})

export default GoogleApiWrapper({
  apiKey: __GAPI_KEY__,
  libraries: ['places','visualization']
})(Container)
