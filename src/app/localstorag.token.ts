import { InjectionToken } from '@angular/core';

export const LocalStorageToken = new InjectionToken<any>("local storag", {
    providedIn: 'root',
    factory() {
        return localStorage;
    }
});