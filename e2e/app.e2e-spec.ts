import { CalCalcWebPage } from './app.po';

describe('cal-calc-web App', () => {
  let page: CalCalcWebPage;

  beforeEach(() => {
    page = new CalCalcWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
