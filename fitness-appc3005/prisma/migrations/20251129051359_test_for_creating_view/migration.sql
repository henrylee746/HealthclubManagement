-- This is an empty migration.

CREATE VIEW "MemberInfo" AS 
SELECT weight, weightGoal, firstName, lastName, email
FROM Member
LEFT JOIN HealthMetric ON Member.id = HealthMetric.memberId;