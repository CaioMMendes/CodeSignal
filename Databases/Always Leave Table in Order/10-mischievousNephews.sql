CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	select weekday(x.mischief_date) AS weekday, x.* from mischief as x order by weekday asc,
	case x.author 
	when 'Huey' then 1
	when  'Dewey' then 2
	when 'Louie' then 3
	else 4 end,
	x.mischief_date asc, x.title asc ;
	
END