import { updateTitle, UPDATE_TITLE, updateSubtitle, UPDATE_SUBTITLE } from './TitleSubtitleEditor';

describe('title/subtitle action creators', () => {
  it('can create an update title action', () => {
    const action = updateTitle('hello');
    expect(action).toEqual({
      type: UPDATE_TITLE,
      payload: 'hello'
    });
  });

  it('can create an update subtitle action', () => {
    const action = updateSubtitle('a subtitle');
    expect(action).toEqual({
      type: UPDATE_SUBTITLE,
      payload: 'a subtitle'
    });
  });
});
