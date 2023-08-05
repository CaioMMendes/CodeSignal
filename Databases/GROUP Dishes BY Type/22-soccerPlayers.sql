CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	
	
	select GROUP_CONCAT( first_name,' ',surname,' #',player_number  order by player_number asc SEPARATOR  '; ') as players
	from soccer_team;
	
	
	
END