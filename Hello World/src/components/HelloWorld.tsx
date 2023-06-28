import { calculateAge } from '../utils/age';
import ModuleDetails from './module-details';
import Title from './title';

function HelloWorld() {
  const name = 'Raí Rodrigues';
  const birth = '17/11/1995';
  const age = calculateAge(birth);
  return (
    <div>
      <h1 style={ { color: 'green', textAlign: 'center' } }>{name}</h1>
      <p>{`Age ${age}`}</p>
      <Title />
      <ModuleDetails />
    </div>
  );
}

export default HelloWorld;
