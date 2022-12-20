FROM openjdk:17-jdk-slim
COPY target/*.jar app.jar
ARG PORT
# or with a hard-coded default:
#ARG some_variable_name=default_value
EXPOSE PORT

ENTRYPOINT ["java", "-jar", "/app.jar"]



