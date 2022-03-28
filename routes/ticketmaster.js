const express = require("express");
const router = express.Router();
const axios = require("axios")

const BASE_URL = "http://app.ticketmaster.com/";
const API_KEY = "ITWvRMBQUpQuDn6octJPGuaWxlrwOcxT"


router.get('/', (req, res) => {
  
  axios.get(`${BASE_URL}discovery/v2/events.json?size=1&?latlong=${43.653225},${-79.383186}&apikey=${API_KEY}`).then((axiosRes)=>{
    console.log(axiosRes.data._embedded.events)
    
    res.status(200).json(axiosRes.data);
  })
});

module.exports = router;
