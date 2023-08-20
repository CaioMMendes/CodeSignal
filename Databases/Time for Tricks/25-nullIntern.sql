CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */

select count(*) as number_of_nulls  from (	
SELECT * FROM DEPARTMENTS 
WHERE description  
is null or TRIM(LOWER(description)) in ( "-","nil", "null") ) as a ;
	

	
END