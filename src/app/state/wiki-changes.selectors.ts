import { createSelector, createFeatureSelector } from '@ngrx/store';
import { WikiChange } from '../models/wiki-change.model';

export const selectWikiChanges = createFeatureSelector<ReadonlyArray<WikiChange>>('wikiChanges');

export const selectCollectionState = createFeatureSelector<
    ReadonlyArray<string>
>('collection');

export const selectWikiChangeCollection = createSelector(
    selectWikiChanges,
    selectCollectionState,
    (wikiChanges, collection) => {
        return collection.map((id) => wikiChanges.find((wikiChange) => wikiChange.id === id));
    }
);