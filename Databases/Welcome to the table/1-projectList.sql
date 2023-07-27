    DROP TABLE IF EXISTS solution;
	CREATE TABLE solution AS SELECT project_name,team_lead,income FROM Projects;
	select * from solution;