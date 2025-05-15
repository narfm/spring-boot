# Spring Boot + Angular Application

This project is a full-stack application built with Spring Boot backend and Angular frontend, packaged as a single JAR for easy deployment.

## Project Structure

```
my-app/
├── backend/                     # Spring Boot application
│   ├── src/                     # Java source code
│   ├── pom.xml                  # Maven build file
│   └── Dockerfile               # Dockerfile for backend
├── frontend/                    # Angular application
│   ├── src/                     # TypeScript/HTML/CSS source code
│   ├── angular.json             # Angular configuration
│   └── Dockerfile               # Dockerfile for frontend
├── docker-compose.yml           # Docker compose configuration
└── README.md                    # This file
```

## Prerequisites

- Java 17 or higher
- Node.js 18 or higher
- npm 9 or higher
- Maven 3.8+
- Docker and Docker Compose (for containerized deployment)

## Running the Application

### Full Application (packaged as a single JAR)

1. Build the application:
   ```bash
   cd my-app/backend
   mvn clean package
   ```

2. Run the JAR:
   ```bash
   java -jar target/demo-0.0.1-SNAPSHOT.jar
   ```

3. Access the application at: http://localhost:8080

### Using Docker

1. Build and start using Docker Compose:
   ```bash
   cd my-app
   docker-compose up --build
   ```

2. Access the application at: http://localhost:8080

## Development Mode

### Backend Only (Spring Boot)

1. Run Spring Boot:
   ```bash
   cd my-app/backend
   mvn spring-boot:run
   ```

2. The backend API will be available at: http://localhost:8080/api

### Frontend Only (Angular)

1. Install dependencies:
   ```bash
   cd my-app/frontend
   npm install
   ```

2. Run Angular development server:
   ```bash
   npm start
   ```

3. Access the frontend at: http://localhost:4200

### Debugging Spring Boot

To debug the Spring Boot application:

1. Run with debug options:
   ```bash
   cd my-app/backend
   mvn spring-boot:run -Dspring-boot.run.jvmArguments="-Xdebug -Xrunjdwp:transport=dt_socket,server=y,suspend=n,address=5005"
   ```

2. Connect your IDE to port 5005 for debugging.

### Debugging Angular

1. Run Angular with debug options:
   ```bash
   cd my-app/frontend
   npm run start -- --configuration=development
   ```

2. Open Chrome DevTools (F12) and navigate to the Sources tab to set breakpoints.

3. For more advanced debugging:
   ```bash
   npm run start -- --configuration=development --sourceMap=true
   ```

## API Endpoints

- `GET /api/hello`: Returns a simple greeting message from the backend

## Additional Information

- The Spring Boot application serves the Angular frontend as static content
- During production builds, the Angular application is bundled and included in the Spring Boot JAR
- Custom configurations can be added to `application.properties` file
- For separate deployment, you can use the individual Dockerfiles in each directory