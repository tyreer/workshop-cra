import React from "react";
import QueryHOC from "./QueryHOC";

const Bar = ({ data }) => {
  if (data.error) {
    return (
      <>
        <p>Error</p>
        <code>{JSON.stringify(data.error, null, 2)}</code>
      </>
    );
  }

  if (data.fetching) {
    return <p>Loading data...</p>;
  }

  return (
    <>
      <p>Data!</p>
      {data.data && <img src={data.data[0].image_url} alt="beer" />}
      <code>{JSON.stringify(data.data, null, 2)}</code>
    </>
  );
};

const BarWithQuery = QueryHOC(Bar, "https://api.punkapi.com/v2/beers/random");

export default BarWithQuery;
