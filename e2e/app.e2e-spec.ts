import { NantesJugPage } from './app.po';

describe('nantes-jug App', () => {
  let page: NantesJugPage;

  beforeEach(() => {
    page = new NantesJugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
