CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	
	
	select name from leaderboard order by score desc limit 5 OFFSET 3;
	
END