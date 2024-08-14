import { DogAttributesPipe } from './dog-attributes.pipe';

describe('DogAttributesPipe', () => {
  it('create an instance', () => {
    const pipe = new DogAttributesPipe();
    expect(pipe).toBeTruthy();
  });
});
