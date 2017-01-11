import { JitPage } from './app.po';

describe('jit App', function() {
  let page: JitPage;

  beforeEach(() => {
    page = new JitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
