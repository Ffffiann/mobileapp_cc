# Gunakan Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files dan install dependencies
COPY package.json ./
RUN npm install

# Copy seluruh project
COPY . .

# Build aplikasi
RUN npm run build

# Gunakan server static
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose port 3000
EXPOSE 3000
