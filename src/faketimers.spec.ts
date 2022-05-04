import chai from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { getRecord } from './record';

chai.use(sinonChai);

const { expect } = chai;

describe('Fake timers', () => {
  let sandBox: sinon.SinonSandbox;

  beforeEach(() => {
    // Overrides Date functions
    sandBox = sinon.createSandbox({ useFakeTimers: true });
  });

  afterEach(() => {
    sandBox.restore();
  });

  new Array(200).fill(true).forEach(() => {
    it('Should set all dates to the same value when activated', () => {
      // Act & Assert
      expect(getRecord()).to.deep.equal({
        timestamp: new Date().toISOString(),
      });
    });
  });
});

describe('Real timers', () => {
  // This should eventually fail
  new Array(200).fill(true).forEach(() => {
    it('Should keep original behavior of dates when not activated', () => {
      // Act & Assert
      expect(getRecord()).to.deep.equal({
        timestamp: new Date().toISOString(),
      });
    });
  });
});
