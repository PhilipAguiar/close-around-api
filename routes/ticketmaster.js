const express = require("express");
const router = express.Router();
const axios = require("axios")

const BASE_URL = "https://app.ticketmaster.com/";
const API_KEY = "ITWvRMBQUpQuDn6octJPGuaWxlrwOcxT"


router.get('/', (req, res) => {
  
  let lat = req.query.lat
  let lng = req.query.lng
  console.log(lat)
   axios.get(`${BASE_URL}discovery/v2/suggest?latlong=${lat},${lng}&apikey=${API_KEY}&size=5&radius=100`).then((axiosRes)=>{
    res.status(200).json(axiosRes.data._embedded.venues)
  })
});


router.get('/:id', (req, res) => {
  https://app.ticketmaster.com/discovery/v2/events.json?size=1&apikey=ITWvRMBQUpQuDn6octJPGuaWxlrwOcxT&venueId=KovZpZAFlaAA


  // axios.get(`${BASE_URL}discovery/v2/events.json?latlong=${43.653225},${-79.3831861}&apikey=${API_KEY}`).then((axiosRes)=>{
    
   axios.get(`${BASE_URL}discovery/v2/events.json?size=5&apikey=${API_KEY}&venueId=${req.params.id}`).then((axiosRes)=>{
    console.log("help")
    res.status(200).json(axiosRes.data)
  })
});

module.exports = router;
