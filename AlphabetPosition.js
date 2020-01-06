/*
In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
"a" = 1, "b" = 2, etc.

Attempted to use regex at the start, but instead choose not to. 
Will revisit and attempt to solve with regex in the future.
*/
function alphabetPosition(text) { 
  return text.toLowerCase().split('')
        .filter( c => c >= 'a' & c <= 'z' )
        .map( c => c.charCodeAt(0) - 'a'.charCodeAt(0) + 1)
        .join(' ');
}
