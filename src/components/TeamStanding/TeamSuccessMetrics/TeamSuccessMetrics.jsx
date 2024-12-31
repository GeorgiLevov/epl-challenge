import React from "react";

function TeamSuccessMetrics({ points, playedGames, won, draw, lost }) {
  return (
    <div>
      <span>{points}</span> / <span>{playedGames}</span> / <span>{won}</span> /{" "}
      <span>{draw}</span> / <span>{lost}</span>
      <hr />
    </div>
  );
}

export default TeamSuccessMetrics;
