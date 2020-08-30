import axios from 'axios';

let baseGeoCodeURL = "https://maps.googleapis.com/maps/api/geocode/json?key=";

export default {

    getLatLon(address) {
     if(address){        
        return axios.get(baseGeoCodeURL + "&address=" + address);
     }
    }
}
