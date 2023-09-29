import { AngularjsStudyPage } from './app.po';

describe('angularjs-study App', () => {
  let page: AngularjsStudyPage;

  beforeEach(() => {
    page = new AngularjsStudyPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
