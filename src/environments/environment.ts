// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
export const wikiBit = {
  urlBase: 'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit='
};
export const giphyBit = {
  urlBase: 'https://api.giphy.com/v1/gifs/search?api_key=',
  apiKey: 'EzYQnhIN4TmkT89Gn44pY9n9bv5xU44R'
};

export const config = {
    apiKey: "AIzaSyDSRUD3qUoHLxwYhjXqSjMPb9iTm6JB610",
    authDomain: "two-apis-history.firebaseapp.com",
    databaseURL: "https://two-apis-history.firebaseio.com",
    projectId: "two-apis-history",
    storageBucket: "two-apis-history.appspot.com",
    messagingSenderId: "24678156299"
  };
