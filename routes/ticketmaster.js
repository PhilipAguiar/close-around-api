const express = require("express");
const router = express.Router();
const axios = require("axios")

const BASE_URL = "https://app.ticketmaster.com/";
const API_KEY = "ITWvRMBQUpQuDn6octJPGuaWxlrwOcxT"


router.get('/', (req, res) => {
  
  console.log(API_KEY)

  axios.get(`${BASE_URL}/discovery/v2/events.json?size=1&apikey=${API_KEY}?latlong=${43.653225},${-79.383186}`).then((res)=>{
    // console.log(res.data._embedded.events)
  })
  // res.status(200).json(selectedWarehouse);
});

module.exports = router;
