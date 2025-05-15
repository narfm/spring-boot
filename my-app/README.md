# Spring Boot with Angular Application

This is a full-stack application with Spring Boot backend and Angular frontend. The application is configured to build and package both frontend and backend into a single JAR file.

## Project Structure

```
my-app/
├── backend/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/...              # Spring Boot code
│   │   │   └── resources/
│   │   │       └── static/           # Angular build files go here
│   ├── pom.xml                       # Maven configuration
│   └── Dockerfile                    # Docker configuration
├── frontend/
│   ├── src/                          # Angular source code
│   ├── angular.json                  # Angular configuration
│   └── package.json                  # NPM dependencies
└── README.md                         # This file
```

## Prerequisites

- Java 11+
- Maven 3.6+
- Node.js 16+ and npm 8+ (installed automatically by Maven)
- Docker (optional, for containerization)

## Build and Run Instructions

### Building the Application

To build the entire application (frontend + backend) as a single JAR:

```bash
cd my-app/backend
mvn clean package
```

This will:
1. Install Node.js and npm in the frontend directory
2. Install Angular dependencies
3. Build the Angular application
4. Copy Angular build artifacts to Spring Boot's static resources
5. Build the Spring Boot application
6. Package everything into a single JAR file

The final JAR will be available at `my-app/backend/target/myapp-0.0.1-SNAPSHOT.jar`.

### Running the Application

To run the packaged application:

```bash
java -jar my-app/backend/target/myapp-0.0.1-SNAPSHOT.jar
```

The application will be available at http://localhost:8080.

### Development Mode

#### Running Angular Frontend Separately

For frontend development with hot-reload:

```bash
cd my-app/frontend
npm install
npm start
```

The Angular development server will start at http://localhost:4200 and will proxy API requests to the backend at http://localhost:8080.

#### Running Spring Boot Backend Separately

For backend development:

```bash
cd my-app/backend
mvn spring-boot:run
```

The Spring Boot server will start at http://localhost:8080.

## Docker

### Building Docker Image

To build a Docker image:

```bash
cd my-app/backend
docker build -t myapp:latest .
```

### Running Docker Container

To run the application in Docker:

```bash
docker run -p 8080:8080 myapp:latest
```

The application will be available at http://localhost:8080.

## API Endpoints

- `GET /api/greeting`: Returns a greeting message from the backend

## Troubleshooting

### CORS Issues During Development

When running Angular and Spring Boot separately during development, you might encounter CORS issues. To fix this:

1. Make sure the Angular development server is configured to proxy API requests to the Spring Boot backend
2. Alternatively, enable CORS in the Spring Boot application

### Maven Build Issues

If you encounter issues with the Maven build:

1. Make sure Node.js and npm are properly installed
2. Check the Maven logs for any error messages
3. Try running `mvn clean` and then `mvn package` again

### Docker Build Issues

If you encounter issues with the Docker build:

1. Make sure Docker is installed and running
2. Check the Docker logs for any error messages
3. Make sure you're building from the correct directory (my-app/backend)