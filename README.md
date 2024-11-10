# NestJS Authentication and User Management API

This project is a backend API built with NestJS that provides JWT-based authentication, role-based authorization, and CRUD operations for user management. It supports two roles: Admin and User.

## Features

- Secure authentication using JWT
- Role-based access control (Admin/User)
- CRUD operations for user management
- Password hashing with bcrypt
- PostgreSQL integration with TypeORM

## Prerequisites

To run this application, ensure you have the following installed:

- Node.js v18.x
- Yarn package manager
- Docker for PostgreSQL

## Setup Instructions

### Step 1: Start PostgreSQL with Docker

Run the following command to start a PostgreSQL container:

```bash
docker run --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=password -d postgres
```

### Step 2: Clone the Repository

```bash
git clone https://github.com/ashwinsingh2007/auth-backend.git
cd auth-backend
```

### Step 3: Install Dependencies

```bash
yarn install
```

### Step 4: Setup ENV

```bash
DB_HOST=localhost
DB_PORT=5432
DB_USER=postgres
DB_PASS=password
DB_NAME=nestjs_crud
JWT_SECRET=ashwani
```

### Step 4: Run the Application

```bash
yarn start:dev
```

## API Documentation
```bash
http://localhost:3000/api
```

## API Postman Collection
```bash
https://documenter.getpostman.com/view/28439941/2sAY52dKYw
```

## Brief Report and Documentation
```bash
https://docs.google.com/document/d/1W9UogzZLAMb2lDXWw0CYvNV8sjMpTwQ7JLiX3TzGqug/edit?usp=sharing
```
