import React from "react";
import Query from "./Query";

const Description = () => (
  <>
    <Query query="https://api.punkapi.com/v2/beers/random">
      {({ fetching, data, error }) => {
        if (error) {
          return (
            <>
              <p>Error</p>
              <code>{JSON.stringify(error, null, 2)}</code>
            </>
          );
        }

        if (fetching) {
          return <p>Loading data...</p>;
        }

        return (
          <>
            <h2>Description</h2>
            <code>{data && data[0].description}</code>
          </>
        );
      }}
    </Query>
  </>
);

export default Description;
