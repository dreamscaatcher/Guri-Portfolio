# Use the official Node.js image as a base image
FROM node:18

# Create and change to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image.
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application code.
COPY . .

# Build the application
RUN npm run build

# Run the application
CMD ["npm", "start"]
