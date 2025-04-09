CREATE TABLE student (
    id SERIAL PRIMARY KEY,
    FirstName VARCHAR(30),
    LastName VARCHAR(50),
    DateOfBirth DATE,
    EnrolledDate DATE,
    Gender VARCHAR(6),
    NationalIdNumber INTEGER,
	StudentCardNumber VARCHAR(50)
);
CREATE TABLE teacher (
    id SERIAL PRIMARY KEY,
    FirstName VARCHAR(30),
    LastName VARCHAR(50),
    DateOfBirth DATE,
    AcademicRank VARCHAR(30),
    HireDate DATE
);
CREATE TABLE grade_details (
    id SERIAL PRIMARY KEY,
    GradeId VARCHAR(1),
    AchievementTypeId VARCHAR(20),
    AchievementPoints SMALLINT,
    AchievementMaxPoints SMALLINT,
    AchievementMaxDate DATE
);
CREATE TABLE course (
    id SERIAL PRIMARY KEY,
    Name VARCHAR(100),
    Credit SMALLINT,
    AcademicYear DATE,
    Semester SMALLINT
);
CREATE TABLE grade (
    id SERIAL PRIMARY KEY,
    StudentId INTEGER,
    CourseId INTEGER,
    TeacherId INTEGER,
    Grade SMALLINT,
	Comment TEXT,
	CreatedDate DATE
);
CREATE TABLE achievement_type (
    id SERIAL PRIMARY KEY,
    Name VARCHAR(50),
    Description TEXT,
    ParticipationRate SMALLINT
);
