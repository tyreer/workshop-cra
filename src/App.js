import React from "react";
import "./App.css";
import Query from "./components/Query";

// Add query component that
// - simply fetches from a REST endpoint
// - exposes loading state, data and error via render prop
// Will just hit a single endpoint for now, but in a next step, can have different pages with different queries

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
                <p>Data!</p>
                <code>{JSON.stringify(data, null, 2)}</code>
              </>
            );
          }}
        </Query>
      </header>
    </div>
  );
}

export default App;
