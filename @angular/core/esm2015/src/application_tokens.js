/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { InjectionToken } from './di';
/**
 * A DI Token representing a unique string id assigned to the application by Angular and used
 * primarily for prefixing application attributes and CSS styles when
 * {\@link ViewEncapsulation#Emulated ViewEncapsulation.Emulated} is being used.
 *
 * If you need to avoid randomly generated value to be used as an application id, you can provide
 * a custom value via a DI provider <!-- TODO: provider --> configuring the root {\@link Injector}
 * using this token.
 * \@publicApi
 * @type {?}
 */
export const APP_ID = new InjectionToken('AppId');
/**
 * @return {?}
 */
export function _appIdRandomProviderFactory() {
    return `${_randomChar()}${_randomChar()}${_randomChar()}`;
}
/**
 * Providers that will generate a random APP_ID_TOKEN.
 * \@publicApi
 * @type {?}
 */
export const APP_ID_RANDOM_PROVIDER = {
    provide: APP_ID,
    useFactory: _appIdRandomProviderFactory,
    deps: (/** @type {?} */ ([])),
};
/**
 * @return {?}
 */
function _randomChar() {
    return String.fromCharCode(97 + Math.floor(Math.random() * 25));
}
/**
 * A function that will be executed when a platform is initialized.
 * \@publicApi
 * @type {?}
 */
export const PLATFORM_INITIALIZER = new InjectionToken('Platform Initializer');
/**
 * A token that indicates an opaque platform id.
 * \@publicApi
 * @type {?}
 */
export const PLATFORM_ID = new InjectionToken('Platform ID');
/**
 * All callbacks provided via this token will be called for every component that is bootstrapped.
 * Signature of the callback:
 *
 * `(componentRef: ComponentRef) => void`.
 *
 * \@publicApi
 * @type {?}
 */
export const APP_BOOTSTRAP_LISTENER = new InjectionToken('appBootstrapListener');
/**
 * A token which indicates the root directory of the application
 * \@publicApi
 * @type {?}
 */
export const PACKAGE_ROOT_URL = new InjectionToken('Application Packages Root URL');
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb25fdG9rZW5zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvYXBwbGljYXRpb25fdG9rZW5zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7Ozs7Ozs7O0FBY3BDLE1BQU0sT0FBTyxNQUFNLEdBQUcsSUFBSSxjQUFjLENBQVMsT0FBTyxDQUFDOzs7O0FBRXpELE1BQU0sVUFBVSwyQkFBMkI7SUFDekMsT0FBTyxHQUFHLFdBQVcsRUFBRSxHQUFHLFdBQVcsRUFBRSxHQUFHLFdBQVcsRUFBRSxFQUFFLENBQUM7QUFDNUQsQ0FBQzs7Ozs7O0FBTUQsTUFBTSxPQUFPLHNCQUFzQixHQUFHO0lBQ3BDLE9BQU8sRUFBRSxNQUFNO0lBQ2YsVUFBVSxFQUFFLDJCQUEyQjtJQUN2QyxJQUFJLEVBQUUsbUJBQU8sRUFBRSxFQUFBO0NBQ2hCOzs7O0FBRUQsU0FBUyxXQUFXO0lBQ2xCLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUNsRSxDQUFDOzs7Ozs7QUFNRCxNQUFNLE9BQU8sb0JBQW9CLEdBQUcsSUFBSSxjQUFjLENBQW9CLHNCQUFzQixDQUFDOzs7Ozs7QUFNakcsTUFBTSxPQUFPLFdBQVcsR0FBRyxJQUFJLGNBQWMsQ0FBUyxhQUFhLENBQUM7Ozs7Ozs7Ozs7QUFVcEUsTUFBTSxPQUFPLHNCQUFzQixHQUMvQixJQUFJLGNBQWMsQ0FBOEMsc0JBQXNCLENBQUM7Ozs7OztBQU0zRixNQUFNLE9BQU8sZ0JBQWdCLEdBQUcsSUFBSSxjQUFjLENBQVMsK0JBQStCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIEluYy4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbmltcG9ydCB7SW5qZWN0aW9uVG9rZW59IGZyb20gJy4vZGknO1xuaW1wb3J0IHtDb21wb25lbnRSZWZ9IGZyb20gJy4vbGlua2VyL2NvbXBvbmVudF9mYWN0b3J5JztcblxuXG4vKipcbiAqIEEgREkgVG9rZW4gcmVwcmVzZW50aW5nIGEgdW5pcXVlIHN0cmluZyBpZCBhc3NpZ25lZCB0byB0aGUgYXBwbGljYXRpb24gYnkgQW5ndWxhciBhbmQgdXNlZFxuICogcHJpbWFyaWx5IGZvciBwcmVmaXhpbmcgYXBwbGljYXRpb24gYXR0cmlidXRlcyBhbmQgQ1NTIHN0eWxlcyB3aGVuXG4gKiB7QGxpbmsgVmlld0VuY2Fwc3VsYXRpb24jRW11bGF0ZWQgVmlld0VuY2Fwc3VsYXRpb24uRW11bGF0ZWR9IGlzIGJlaW5nIHVzZWQuXG4gKlxuICogSWYgeW91IG5lZWQgdG8gYXZvaWQgcmFuZG9tbHkgZ2VuZXJhdGVkIHZhbHVlIHRvIGJlIHVzZWQgYXMgYW4gYXBwbGljYXRpb24gaWQsIHlvdSBjYW4gcHJvdmlkZVxuICogYSBjdXN0b20gdmFsdWUgdmlhIGEgREkgcHJvdmlkZXIgPCEtLSBUT0RPOiBwcm92aWRlciAtLT4gY29uZmlndXJpbmcgdGhlIHJvb3Qge0BsaW5rIEluamVjdG9yfVxuICogdXNpbmcgdGhpcyB0b2tlbi5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IEFQUF9JRCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdBcHBJZCcpO1xuXG5leHBvcnQgZnVuY3Rpb24gX2FwcElkUmFuZG9tUHJvdmlkZXJGYWN0b3J5KCkge1xuICByZXR1cm4gYCR7X3JhbmRvbUNoYXIoKX0ke19yYW5kb21DaGFyKCl9JHtfcmFuZG9tQ2hhcigpfWA7XG59XG5cbi8qKlxuICogUHJvdmlkZXJzIHRoYXQgd2lsbCBnZW5lcmF0ZSBhIHJhbmRvbSBBUFBfSURfVE9LRU4uXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfSURfUkFORE9NX1BST1ZJREVSID0ge1xuICBwcm92aWRlOiBBUFBfSUQsXG4gIHVzZUZhY3Rvcnk6IF9hcHBJZFJhbmRvbVByb3ZpZGVyRmFjdG9yeSxcbiAgZGVwczogPGFueVtdPltdLFxufTtcblxuZnVuY3Rpb24gX3JhbmRvbUNoYXIoKTogc3RyaW5nIHtcbiAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyNSkpO1xufVxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV4ZWN1dGVkIHdoZW4gYSBwbGF0Zm9ybSBpcyBpbml0aWFsaXplZC5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0lOSVRJQUxJWkVSID0gbmV3IEluamVjdGlvblRva2VuPEFycmF5PCgpID0+IHZvaWQ+PignUGxhdGZvcm0gSW5pdGlhbGl6ZXInKTtcblxuLyoqXG4gKiBBIHRva2VuIHRoYXQgaW5kaWNhdGVzIGFuIG9wYXF1ZSBwbGF0Zm9ybSBpZC5cbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IFBMQVRGT1JNX0lEID0gbmV3IEluamVjdGlvblRva2VuPE9iamVjdD4oJ1BsYXRmb3JtIElEJyk7XG5cbi8qKlxuICogQWxsIGNhbGxiYWNrcyBwcm92aWRlZCB2aWEgdGhpcyB0b2tlbiB3aWxsIGJlIGNhbGxlZCBmb3IgZXZlcnkgY29tcG9uZW50IHRoYXQgaXMgYm9vdHN0cmFwcGVkLlxuICogU2lnbmF0dXJlIG9mIHRoZSBjYWxsYmFjazpcbiAqXG4gKiBgKGNvbXBvbmVudFJlZjogQ29tcG9uZW50UmVmKSA9PiB2b2lkYC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfQk9PVFNUUkFQX0xJU1RFTkVSID1cbiAgICBuZXcgSW5qZWN0aW9uVG9rZW48QXJyYXk8KGNvbXBSZWY6IENvbXBvbmVudFJlZjxhbnk+KSA9PiB2b2lkPj4oJ2FwcEJvb3RzdHJhcExpc3RlbmVyJyk7XG5cbi8qKlxuICogQSB0b2tlbiB3aGljaCBpbmRpY2F0ZXMgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoZSBhcHBsaWNhdGlvblxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgY29uc3QgUEFDS0FHRV9ST09UX1VSTCA9IG5ldyBJbmplY3Rpb25Ub2tlbjxzdHJpbmc+KCdBcHBsaWNhdGlvbiBQYWNrYWdlcyBSb290IFVSTCcpO1xuIl19