import reducer from './TitleSubtitleEditor';
import { updateTitle, updateSubtitle } from '../actions/TitleSubtitleEditor';

describe('reducer', () => {
  it('can handle updating title', () => {
    const state = {
      title: 'title'
    };

    const updatedTitle = updateTitle('newTitle');

    const updateState = reducer(state, updatedTitle);

    expect(updateState).toEqual({ title: 'newTitle' });
  });

  it('can handle updating subtitle', () => {
    const state = {
      subtitle: 'subtitle'
    };

    const updatedSubtitle = updateSubtitle('newsubtitle');

    const updateState = reducer(state, updatedSubtitle);

    expect(updateState).toEqual({ subtitle: 'newsubtitle' });
  });
});
