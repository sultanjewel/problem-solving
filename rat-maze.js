function solveMaze(maze)
{
	let sol = new Array(N);
	for(let i=0;i<N;i++)
	{
		sol[i]=new Array(N);
		for(let j=0;j<N;j++)
		{
			sol[i][j]=0;
		}
	}

		if (solveMazeUtil(maze, 0, 0, sol) == false) {
			return false;
		}

		printSolution(sol);
		return true;
}
function isSafe(maze,x,y)
{
		return (x >= 0 && x < N && y >= 0	&& y < N && maze[x][y] == 1);
}

function solveMazeUtil(maze,x,y,sol)
{
	// if (x, y is goal) return true
		if (x == N - 1 && y == N - 1
			&& maze[x][y] == 1) {
			sol[x][y] = 1;
			return true;
		}
		if (isSafe(maze, x, y) == true) {
			if (sol[x][y] == 1)
				return false;
			
			// mark x, y as part of solution path
			sol[x][y] = 1;

			/* Move forward in x direction */
			if (solveMazeUtil(maze, x + 1, y, sol))
				return true;

			/* If moving in x direction doesn't give
			solution then Move down in y direction */
			if (solveMazeUtil(maze, x, y + 1, sol))
				return true;
			
			/* If moving in y direction doesn't give
			solution then Move backwards in x direction */
			if (solveMazeUtil(maze, x - 1, y, sol))
				return true;

			if (solveMazeUtil(maze, x, y - 1, sol))
				return true;

			sol[x][y] = 0;
			return false;
		}

		return false;
}

