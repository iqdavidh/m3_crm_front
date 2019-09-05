import { assert } from 'chai';
import AutLocal from './AutLocal';

describe('AutLocal - El Authenticatoir Local regresa el AuthData Dummy', () => {
  it('getCurrentData - data ok', () => {
    const autData = AutLocal.getCurrentData();
    assert(autData !== null, 'El userData es null');
  });

  it('getCurrentData - data null', () => {
    const autData = AutLocal.getCurrentData(true);
    assert(autData === null, 'El userData debe ser null');
  });
});
