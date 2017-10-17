import React from 'react';
import Search from './search.jsx';

export default class Map extends React.Component {
    componentDidMount() {
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435},
            zoom: 13
        };
        const google = window.google;
        this.map = new google.maps.Map(this.mapNode, mapOptions);
    }
    
    render() {
        return (
            <div id='map-container' ref= {map => this.mapNode = map}>
                <Search map={this.map} />
            </div>
        );
    }
}

