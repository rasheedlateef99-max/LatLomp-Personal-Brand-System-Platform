# Use an official Node.js image (Linux-based) matching your project's needs
FROM node:20-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy only package files first (Docker caches this layer separately —
# dependencies won't reinstall every time you change your source code)
COPY package.json package-lock.json ./

# Install dependencies inside the container (Linux-compatible binaries)
RUN npm config set fetch-timeout 600000 && \
    npm config set fetch-retries 5 && \
    npm config set fetch-retry-mintimeout 20000 && \
    npm install

# Copy the rest of the project into the container
COPY . .

# Next.js dev server's default port
EXPOSE 3000

# Start the dev server
CMD ["npm", "run", "dev"]