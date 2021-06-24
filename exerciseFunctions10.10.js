// Write a function makeLine(size) that returns a line with exactly size hashes.

// The actual solution

function makeLine(size) {
   let line = '';
   for (let i = 0; i < size; i++) {
      line += '#';
   }
   return line;
}

makeLine(5);
