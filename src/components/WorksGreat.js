import React from "react";
import Query from "./Query";
import TitlesForTaglines from "./TitlesForTaglines";

const WorksGreat = ({ textInput }) => {
  return (
    <section>
      <h2>Works Great</h2>

      <Query
        query={{
          url: `https://api.punkapi.com/v2/beers/random`,
          init: {
            method: "GET",
          },
        }}
      >
        {({ fetching, data, error }) => (
          <TitlesForTaglines
            fetching={fetching}
            data={data}
            error={error}
            textInput={textInput}
          />
        )}
      </Query>
    </section>
  );
};

export default WorksGreat;
