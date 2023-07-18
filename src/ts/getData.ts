async function getDataApi() {
  const url = "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions";
  const options = {
    method: "Get",
    headers: {
      "X-RapidAPI-Key": "9d86603351msh7eae6101ad2b15cp138ed3jsn0b2e93f423e0",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data.data;
  } catch (error) {
    return error;
  }
}
