import { WikiChange } from "../models/wiki-change.model";

export interface AppState {
    wikiChanges: ReadonlyArray<WikiChange>;
    collection: ReadonlyArray<string>;
}