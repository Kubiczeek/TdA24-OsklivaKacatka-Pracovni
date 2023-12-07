# Use a Node.js base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app/frontend

# Copy the frontend application code into the container
COPY . .

# Install dependencies and build the SvelteKit app
RUN npm install
RUN npm run build

# Expose the port your frontend will run on
EXPOSE 3000

# Start the frontend application
CMD [ "node", "build/index.js" ]
