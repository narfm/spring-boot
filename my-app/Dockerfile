FROM maven:3.9.5-eclipse-temurin-17-alpine AS build

# Copy the project files
WORKDIR /app
COPY . .

# Build the application with Maven (skip tests for faster build)
RUN cd backend && mvn clean package -DskipTests

# Runtime stage
FROM eclipse-temurin:17-jre-alpine

# Set working directory
WORKDIR /app

# Copy the built artifact from the build stage
COPY --from=build /app/backend/target/*.jar app.jar

# Expose port
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]