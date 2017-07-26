import { MyDreamAppPage } from './app.po';

describe('my-dream-app App', () => {
  let page: MyDreamAppPage;

  beforeEach(() => {
    page = new MyDreamAppPage();
  });


  it(`should display 'todos' in h1`, () => {
    page.navigateTo();
    expect(page.getTodos()).toBe('todos');
  });
});
