/* Some programming languages (like Python) include a "title" method to return a string with Every Word Capitalized (e.g. 'title case'.title() returns 'Title Case').  

JavaScript has no .title method, but that won't stop us!  Use the string methods you know to print 'Title Case' from 'title case'. */

let notTitle = 'title case';

console.log(`${notTitle[0].toUpperCase()}` + `${notTitle.slice(1,5)} ` + `${notTitle[6].toUpperCase()}` + notTitle.slice(7));
