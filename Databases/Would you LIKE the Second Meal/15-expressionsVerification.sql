CREATE PROCEDURE solution()
BEGIN
	
	
	select x.* from expressions  as x where case x.operation when '+'  then a+b=c
	  when '-' then a-b=c
	   when '*' then a*b=c
	    when '/' then a/b=c
		else null
		end order by id asc;
	 
	


	
END