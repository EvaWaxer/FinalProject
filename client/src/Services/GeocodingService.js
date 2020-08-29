import axios from 'axios';

let baseGeoCodeURL = "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyBBW8a3n37yGKlwmX9bgXnaqqQlhMa3YrQ";

export default {

    getLatLon(address) {
     if(address){        
        return axios.get(baseGeoCodeURL + "&address=" + address);
     }
    }
}