import React, { useState } from 'react'; //import React Component
import GameDataTable from './GameDataTable';
import TeamSelectForm from './TeamSelectForm';

function App(props) {

  //Your work goes here
  const [selectedTeam, setSelectedTeam] = useState('');
  const [includeRunnerUps, setIncludeRunnerUps] = useState(false);

  const applyFilter = (teamName, includeRunnerUp) => {
    setSelectedTeam(teamName);
    setIncludeRunnerUps(includeRunnerUp);
  };

  const displayedData = props.gameData.filter(game => {
    if (selectedTeam === '') return true; // No filtering if no team is selected
    if (game.winner === selectedTeam) return true; // Include if winner matches
    if (includeRunnerUps && game.runner_up === selectedTeam) return true; // Include runner-ups if selected
    return false; // Exclude otherwise
  });


  //get sorted list of unique teamNames. reduce array of objects into array of strings, 
  //convert to Set to get uniques, spread back into array, and sort 
  const uniqueTeamNames = [...new Set(props.gameData.reduce((all, current) => {
    return all.concat([current.winner, current.runner_up]);
  }, []))].sort();

  return (
    <div className="container">
      <header className="mb-3">
        <h1>FIFA World Cup Finals</h1>
      </header>

      <main>
        <TeamSelectForm teamOptions={uniqueTeamNames} applyFilterCallback={applyFilter} />
        <GameDataTable data={displayedData} />
      </main>

      <footer>
        <small>Data from <a href="https://en.wikipedia.org/wiki/List_of_FIFA_World_Cup_finals">Wikipedia</a>.</small>
      </footer>
    </div>
  );
}

export default App;
