import React, { useState } from "react";
import Query from "./Query";

const Tagline = () => {
  // const [abv, setAbv] = useState(3);
  const [text, setText] = useState("");
  return (
    <>
      <input type="text" onChange={(e) => setText(e.target.value)} />
      <Query
        query={{
          url: `https://api.punkapi.com/v2/beers/random`,
        }}
      >
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
              <h2>{`Tagline for ${text}`}</h2>
              <code>{data && data[0].tagline}</code>
            </>
          );
        }}
      </Query>
    </>
  );
};

export default Tagline;
