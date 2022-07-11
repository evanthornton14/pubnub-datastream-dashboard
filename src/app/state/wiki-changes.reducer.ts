import { createReducer, on } from '@ngrx/store';

import { retrievedWikiChangeList } from './wiki-changes.actions';
import { WikiChange } from '../models/wiki-change.model';

export const initialState: ReadonlyArray<WikiChange> = [];

export const wikiChangesReducer = createReducer(
    initialState,
    on(retrievedWikiChangeList, (state, { wikiChanges }) => wikiChanges)
);