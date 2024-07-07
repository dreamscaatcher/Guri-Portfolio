# Base image
FROM node:14

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Set environment variable for the port
ENV PORT 8080

# Expose the port
EXPOSE $PORT

# Start the application
CMD ["sh", "-c", "npm start -- --port $PORT"]
