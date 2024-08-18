# Use the official MongoDB image from Docker Hub
FROM mongo:6.0

# Set environment variables for MongoDB
ENV MONGO_INITDB_ROOT_USERNAME=admin
ENV MONGO_INITDB_ROOT_PASSWORD=secretpassword

# Copy any custom configuration files if needed
# COPY mongo.conf /etc/mongo/mongo.conf

# Expose the default MongoDB port
EXPOSE 27017

# Start MongoDB when the container starts
CMD ["mongod"]
