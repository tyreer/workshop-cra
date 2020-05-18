import React from "react";
import Query from "./Query";

const Foo = () => (
  <>
    <Query
      query={{
        url: "http://taco-randomizer.herokuapp.com/random/",
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
            <h2>Base layer</h2>
            <code>{data && data.base_layer.name}</code>
          </>
        );
      }}
    </Query>
  </>
);

export default Foo;
