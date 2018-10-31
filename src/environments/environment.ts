// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCrhGWeycL5L7nNWcxhJ13nphuca8Ewg7s",
	    authDomain: "micro-rent.firebaseapp.com",
	    databaseURL: "https://micro-rent.firebaseio.com",
	    projectId: "micro-rent",
	    storageBucket: "micro-rent.appspot.com",
	    messagingSenderId: "781637713024"
   }
};
 
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
