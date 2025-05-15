FROM maven:3.8.5-openjdk-11-slim AS build

# Set working directory
WORKDIR /app

# Copy the frontend and backend source code
COPY ../frontend /app/frontend
COPY . /app/backend

# Set working directory to backend
WORKDIR /app/backend

# Build the application using Maven
# This will build both frontend and backend thanks to our Maven configuration
RUN mvn clean package -DskipTests

# Create runtime image
FROM openjdk:11-jre-slim

# Set working directory
WORKDIR /app

# Copy the built JAR file from the build stage
COPY --from=build /app/backend/target/*.jar app.jar

# Expose the application port
EXPOSE 8080

# Set entry point
ENTRYPOINT ["java", "-jar", "app.jar"]