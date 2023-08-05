CREATE PROCEDURE solution()
    SELECT id, IF (
     given_answer is null ,"no answer",  
     if(given_answer=correct_answer,'correct',
     if(given_answer!=correct_answer,'incorrect',''))
    ) AS checks
    FROM answers
    ORDER BY id;

