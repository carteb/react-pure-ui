import {expect} from 'chai';
import {stub} from 'sinon';
import valueOrNullOrUndefined from '../../../src/utils/valueOrNullOrUndefined';

describe('valueOrNullOrUndefined', () => {
  afterEach(() => {
    Math.random.restore();
  });

  it('should return the value in 80% of the cases', () => {
    const randomStub = stub(Math, 'random').returns(0.5);
    expect(valueOrNullOrUndefined(22), true, true).to.equal(22);
    expect(randomStub).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
  });

  it('should return undefined in 10% of the cases', () => {
    const randomStub = stub(Math, 'random').returns(0.95);
    expect(valueOrNullOrUndefined(22, true, true)).to.equal(undefined);
    expect(randomStub).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
  });

  it('should not return null in case canBeUndefined is set to false', () => {
    const randomStub = stub(Math, 'random').returns(0.01);
    expect(valueOrNullOrUndefined(22, true, false)).to.not.equal(undefined);
    expect(randomStub).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
  });

  it('should return null in 10% of the cases', () => {
    const randomStub = stub(Math, 'random').returns(0.01);
    expect(valueOrNullOrUndefined(22, true, true)).to.equal(null);
    expect(randomStub).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
  });

  it('should not return null in case canBeNull is set to false', () => {
    const randomStub = stub(Math, 'random').returns(0.01);
    expect(valueOrNullOrUndefined(22, false, true)).to.not.equal(null);
    expect(randomStub).to.have.been.calledOnce; // eslint-disable-line no-unused-expressions
  });
});
