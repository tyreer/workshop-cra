import React from "react";
import { useQuery } from "./Query";
import TitlesForTaglines from "./TitlesForTaglines";

const query = {
  url: `https://api.punkapi.com/v2/beers/random`,
  init: {
    method: "GET",
  },
};

const WorksGreat = ({ textInput }) => {
  const { fetching, data, error } = useQuery({ query });
  return (
    <section>
      <h2>Works Great</h2>
      <TitlesForTaglines
        fetching={fetching}
        data={data}
        error={error}
        textInput={textInput}
      />
    </section>
  );
};

export default WorksGreat;
