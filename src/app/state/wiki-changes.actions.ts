import { createAction, props } from '@ngrx/store';
import { WikiChange } from '../models/wiki-change.model';

export const addWikiChange = createAction(
  '[WikiChange List] Add WikiChange',
  props<{ wikiChangeId: string }>()
);

export const removeWikiChange = createAction(
  '[WikiChange Collection] Remove WikiChange',
  props<{ wikiChangeId: string }>()
);

export const retrievedWikiChangeList = createAction(
  '[WikiChange List/API] Retrieve WikiChanges Success',
  props<{ wikiChanges: ReadonlyArray<WikiChange> }>()
);