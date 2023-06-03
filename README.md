# pawprints
Pawprints Animal Shelter &amp; Rescue is a full-stack web application that provides a platform for animal shelters and rescues to manage their animal inventory and adoptions. This project was created as an MVP project for the Galvanize Inc full-stack software engineering bootcamp.

# Pawprints Animal Shelter and Rescue

Pawprints is a full-stack web application that serves as an animal shelter and rescue platform. It allows users to browse and adopt animals in need of a loving home. The application is built using React, Node.js, Express, and PostgreSQL.

## Features

- Browse and search available pets
- View detailed information about each pet
- Submit adoption applications
- Admin dashboard for managing pets and adoption applications

## Technologies Used

- [React](https://reactjs.org): A JavaScript library for building user interfaces
- [Node.js](https://nodejs.org): A JavaScript runtime for server-side development
- [Express](https://expressjs.com): A fast and minimalist web application framework for Node.js
- [PostgreSQL](https://www.postgresql.org): A powerful open-source relational database system
- [Docker](https://www.docker.com): A containerization platform for packaging applications and dependencies

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org): Download and install Node.js
- [PostgreSQL](https://www.postgresql.org): Download and install PostgreSQL
- [Docker](https://www.docker.com): Download and install Docker

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/pawprints.git

2. Navigate to the project directory:
  
        cd pawprints
  
3. Install the dependencies:

        npm install
  
4. Set up the PostgreSQL database:
    
    If you're using Docker, run the following command to start a PostgreSQL container:
      
        docker run --name pawprints-postgres -e POSTGRES_PASSWORD=your_password -p 5432:5432 -d postgres
        
        
    If you have PostgreSQL installed locally, create a new database and update the database configuration in the project's configuration files (server/config/config.json).

5. Run database migrations to set up the required tables:

        npx sequelize-cli db:migrate

6. Start the development server:

        npm run dev
        
7. Open your web browser and navigate to http://localhost:3000 to access the Pawprints application.

Contributing
Contributions are welcome! If you'd like to contribute to the Pawprints project, please follow these steps:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Commit your changes.
5. Push the branch to your forked repository.
6. Open a pull request.

License
This project is licensed under the MIT License.

    You can copy the above markup and save it as your README.md file in your GitHub repository.

