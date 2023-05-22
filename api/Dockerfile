# Use an official OpenJDK runtime as the base image
FROM openjdk:21-jdk

# Set the working directory inside the container
WORKDIR /app

# Copy the packaged Spring Boot application JAR file to the container
COPY target/*.jar app.jar
COPY src/main/resources/application.properties .

# Expose the port on which your Spring Boot application will listen
EXPOSE 8080 
EXPOSE 5432

# Specify the command to run your application
CMD ["java", "-jar", "app.jar"]
