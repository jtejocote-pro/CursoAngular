import { HotelesModule } from './hoteles.module';

describe('HotelesModule', () => {
  let hotelesModule: HotelesModule;

  beforeEach(() => {
    hotelesModule = new HotelesModule();
  });

  it('should create an instance', () => {
    expect(hotelesModule).toBeTruthy();
  });
});
