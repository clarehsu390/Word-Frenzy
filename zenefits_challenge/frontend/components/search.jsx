import React from 'react';
var google = window.google;
class Search extends React.Component {
    constructor(props){
        
        super(props);
        this.state = {
            query: "",
            map: this.map
        }

        this.update = this.update.bind(this);
        this.callback = this.callback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createMarker = this.createMarker.bind(this);
    }
    callback(results, status) {
       
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (let i = 0; i < results.length; i++) {
                let place = results[i];
                this.createMarker(place);
            }
        }
    }
    handleSubmit() {
        const service = new google.maps.places.PlacesService(this.props.map);
        service.nearbySearch({
            location: {lat: 37.7758, lng: -122.435},
            radius: 500,
            type: [this.state]},
            this.callback
        );
        console.log(this.props);
    }


    update() {
        return e => this.setState({query: e.currentTarget.value});
    }

    createMarker(place) {
        let placeLoc = place.geometry.location;
        let marker = new google.maps.Marker({
            map: this.props.map,
            position: placeLoc,
            icon: {
            url: 'https://developers.google.com/maps/documentation/javascript/images/circle.png',
            anchor: new google.maps.Point(10, 10),
            scaledSize: new google.maps.Size(10, 17)
            }
        });
        console.log(this.props.map);
    }

    render() {
        return(
            <div id="search">
                <input type="text" placeholder="Search" value={this.state.query} onChange={this.update()}/>
                <button onClick={this.handleSubmit}>Search</button>
            </div>
        );
    }
}

export default Search;