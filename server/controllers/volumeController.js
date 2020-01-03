const fetch = require("node-fetch");

exports.getVolumeData = async (req, res) => {
  const url = `https://api.coingecko.com/api/v3/global`;

  // let response = await fetch(URL);
  let response = await fetch(url);
  // console.log("response", response2);

  let json = await response.json();
  // console.log("JSON", json);

  // let dataArray = await Object.entries(json.data);
  let dataArray = await [json.data];

  let reformattedData = await dataArray.map(items => {
    return Object.entries(items.total_volume);
  });

  // console.log("JSON", reformattedData);
  res.send(reformattedData);
};
