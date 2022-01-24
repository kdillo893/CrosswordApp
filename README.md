# CrosswordMobileApp
Eventual attempt to create a mobile app that loads 
files of .puz or other formats for playing

### What I'm planning on doing?

There are files for crossword applications online sent
across various forums or repositories.
The access of such repositories isn't relevant for this. The 
concern is to convert a file of such format into a playable state.
In order for it to be playable, I would need
1. some typing functionality
2. an ability to select a tile to edit (restrict blocked tiles)
3. some way of checking that the solution is correct
4. a state saving method for coming back to the puzzle

#### Breakdown of .puz file

Beginning includes a few key details:
1. Some bytecode, not certain what this indicates at the moment
2. The solved puzzle (probably need to be careful about this)
3. A series of dots and dashes, indicating the open and closed spaces
on a grid of this crossword
4. The name and Author (the ending might bleed into the hints)
5. A set of hints, not sure how the order works at the moment.

Need to see what the byte code is used for. The rest is simple processing
by parsing things as string.

The #2 and #3 section would all have standard YxY lengths, and the assignment
is starting with row.

Number 5 with the hints, it appears that all hints start from top row and
traverse by column after indicating the row word.

#### Other future formats
One could potentially take a simple webpage layout of a grid and
listed hints to generate a board for an application. This would 
probably go beyond the current scope of my knowledge, so I'm not
gonna bother right now.