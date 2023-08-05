    DROP TABLE IF EXISTS solution;
	CREATE TABLE solution AS SELECT name,continent,population FROM countries;
	select * from solution;



    CREATE TABLE solution AS SELECT name,continent,population FROM countries;
	select name,continent,population from countries where continent='Africa';
