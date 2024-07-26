# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install Node.js dependencies
COPY package.json ./
RUN npm install

# Install Python and pip
RUN apt-get update && apt-get install -y python3 python3-pip

# Copy requirements.txt and install Python dependencies
COPY requirements.txt ./
RUN pip3 install -r requirements.txt

# Copy the rest of your application code
COPY . .

# Command to run your application
CMD ["node", "server/index.js"]
