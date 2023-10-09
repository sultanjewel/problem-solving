function findPath(maze_array)
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

	return findPathRecursive(maze_array, 0, 0, sol);
}
function findPathRecursive(maze_array,x,y,sol)
{
		if (x == N - 1 && y == N - 1 && maze_array[x][y] == 1) {
			sol[x][y] = 1;
			return true;
		}
		if (x >= 0 && x < N && y >= 0	&& y < N && maze_array[x][y] == 1) {
			if (sol[x][y] == 1)
				return false;
			
			sol[x][y] = 1;

			if (findPathRecursive(maze_array, x + 1, y, sol))
				return true;

			if (findPathRecursive(maze_array, x, y + 1, sol))
				return true;
			
			if (findPathRecursive(maze_array, x - 1, y, sol))
				return true;

			if (findPathRecursive(maze_array, x, y - 1, sol))
				return true;

			sol[x][y] = 0;
			return false;
		}

		return false;
}
//Time Complexity: O(n^2)
//Space Complexity: O(n)
