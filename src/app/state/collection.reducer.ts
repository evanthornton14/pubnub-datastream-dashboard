import { createReducer, on } from '@ngrx/store';
import { addWikiChange, removeWikiChange } from './wiki-changes.actions';

export const initialState: ReadonlyArray<string> = [];

export const collectionReducer = createReducer(
  initialState,
  on(removeWikiChange, (state, { wikiChangeId }) => state.filter((id) => id !== wikiChangeId)),
  on(addWikiChange, (state, { wikiChangeId }) => {
    if (state.indexOf(wikiChangeId) > -1) return state;

    return [...state, wikiChangeId];
  })
);