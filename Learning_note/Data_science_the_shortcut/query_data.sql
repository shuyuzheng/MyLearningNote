SELECT 'value', 'entity_name', 'entity_id', 'variable_name', 'variable_id'
UNION ALL
SELECT data_values.value, entities.name, data_values.entityId, variables.name, data_values.variableId
FROM 
(data_values LEFT JOIN entities ON data_values.entityId = entities.id) LEFT JOIN
variables ON data_values.variableID = variables.Id
WHERE year = 2017
INTO OUTFILE "/mysqlfiles/owid_value_2017.csv"
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';

SELECT 'id', 'name', 'unit', 'description', 'createdAt', 'updatedAt', 'code', 'coverage', 'timespan', 'shortUnit'
UNION ALL
SELECT variables.id, variables.name, variables.unit, variables.description, variables.createdAt, variables.updatedAt, variables.code, variables.coverage, 
variables.timespan, variables.shortUnit
FROM
(SELECT DISTINCT(variableId), year FROM data_values WHERE year = 2017) AS n
LEFT JOIN variables ON n.variableId = variables.id
INTO OUTFILE "/mysqlfiles/owid_variables_2017.csv"
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\n';
