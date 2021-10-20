import { teamMembers } from './assets/images';
import TeamCard from './components/Cards/TeamCard';
import { GlobalStyle } from './GlobalStyle';

function App() {
  return (
    <div>
      <GlobalStyle />
      <TeamCard
        image={teamMembers[0]}
        name='Devon lane'
        position='Technician'
      />
    </div>
  );
}

export default App;
