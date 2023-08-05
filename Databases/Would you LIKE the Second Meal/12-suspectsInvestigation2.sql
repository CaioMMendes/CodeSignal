CREATE PROCEDURE solution()
BEGIN
	/* Write your SQL here. Terminate each statement with a semicolon. */
	
	SELECT ID,NAME,SURNAME FROM SUSPECT WHERE HEIGHT<=170 OR lower(name) NOT like 'b%' OR lower(surname) NOT like 'Gre_n';
	
	
	
	
END