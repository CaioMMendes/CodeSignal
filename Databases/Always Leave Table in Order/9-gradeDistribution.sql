CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	
	select name,id from grades where (final>( 0.25 * Midterm1 + 0.25 * Midterm2 + 0.5 * Final)and final>0.5 * Midterm1 + 0.5 * Midterm2
	
	) order by SUBSTRING(name, 1, 3) asc ,id asc;
	
	
END