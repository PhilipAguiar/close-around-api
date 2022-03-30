const express = require("express");
const router = express.Router();
const axios = require("axios")

const BASE_URL = "https://app.ticketmaster.com/";
const API_KEY = "ITWvRMBQUpQuDn6octJPGuaWxlrwOcxT"


router.get('/', (req, res) => {
  
  https://app.ticketmaster.com/discovery/v2/suggest?apikey=ITWvRMBQUpQuDn6octJPGuaWxlrwOcxT&latlong=43.653225,-79.3831861&radius=100

  // axios.get(`${BASE_URL}discovery/v2/events.json?latlong=${43.653225},${-79.3831861}&apikey=${API_KEY}`).then((axiosRes)=>{
   axios.get(`${BASE_URL}discovery/v2/suggest?latlong=${43.653225},${-79.3831861}&apikey=${API_KEY}&radius=100`).then((axiosRes)=>{
    
    res.status(200).json(axiosRes.data._embedded.venues)
  })
});


router.get('/:id', (req, res) => {
  https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=ITWvRMBQUpQuDn6octJPGuaWxlrwOcxT&venueId=KovZpZAFlaAA


  // axios.get(`${BASE_URL}discovery/v2/events.json?latlong=${43.653225},${-79.3831861}&apikey=${API_KEY}`).then((axiosRes)=>{
    
   axios.get(`${BASE_URL}discovery/v2/events.json?size=5&apikey=${API_KEY}&venueId=${req.params.id}`).then((axiosRes)=>{
    
    res.status(200).json(axiosRes.data)
  })
});

module.exports = router;
