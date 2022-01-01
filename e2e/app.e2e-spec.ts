import { AngularAnyChartPage } from './app.po';

describe('angular-any-chart App', () => {
  let page: AngularAnyChartPage;

  beforeEach(() => {
    page = new AngularAnyChartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
