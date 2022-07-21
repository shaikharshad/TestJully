// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  url: 'https://pixabay.com/api/?key=28740182-4811fbaaadb310c9c05283af5&q=yellow+flowers&image_type=photo&pretty=true',

  getUrl:'https://pixabay.com/api/',
  key:'?key=28740182-4811fbaaadb310c9c05283af5&q=',
  imagtype:'&image_type=photo&pretty=true',
  Page:'&page='
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
