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

### 18/03/24 - 22/03/24

- Created new Maven project, linked it to SQL database
- Created entities Event and Label, and associated DTOs for creating and updating
