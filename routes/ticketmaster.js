const express = require("express");
const router = express.Router();
const axios = require("axios")

const BASE_URL = "https://app.ticketmaster.com/";
const API_KEY = "ITWvRMBQUpQuDn6octJPGuaWxlrwOcxT"


router.get('/', (req, res) => {
  
  https://app.ticketmaster.com/discovery/v2/events.json?latlong=43.653225,-79.3831861&apikey=ITWvRMBQUpQuDn6octJPGuaWxlrwOcxT
  axios.get(`${BASE_URL}discovery/v2/events.json?latlong=${43.653225},${-79.3831861}&apikey=${API_KEY}`).then((axiosRes)=>{
   
    
    res.status(200).json(axiosRes.data._embedded.events[0]);
  })
});

module.exports = router;
