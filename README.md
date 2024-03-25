# Calendar-fullstack

Springboot -> Typescript

## Key Notes

- Add an application.properties file to calendarBackend > src > main > resources with the below lines, replace youPassword:
  spring.application.name=calendarBackend
  spring.datasource.url=jdbc:mysql://localhost:3306/calendar_events
  spring.datasource.username=root
  spring.datasource.password=yourPassword
  spring.jpa.hibernate.ddl-auto=update

## Change Log

### 18/03/24 - 24/03/24

- Created new Maven project, linked it to SQL database
- Created entities Event and Label, and associated DTOs for creating and updating
- encountered issues with DTO validation when combining multiple tables
  - resolved, DTO needs to reference only the label Id for the service to then get the label data to join

### 25/03/24

- Created new React Typescript front end
- Created component for each day
- Created Month container
- data being passed down by app

#### Current Issue

- When changing years the number of trailing or previous days is being messed up, breaking the uniform rectangle.
