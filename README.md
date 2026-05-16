<div align="center">

# 🚀 _MongoDB CRUD API with Express & TypeScript_ 🏗️

## A Production-Ready RESTful API with Clean Architecture

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-8.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Mongoose](https://img.shields.io/badge/Mongoose-8.x-880000?style=for-the-badge&logo=mongoose&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

### **Built with Enterprise-Grade Patterns:**

![REST API](https://img.shields.io/badge/REST-API-00C7B7?style=flat-square&logo=fastapi&logoColor=white)
![Clean Architecture](https://img.shields.io/badge/Clean-Architecture-FF6B6B?style=flat-square&logo=cleanarchitecture&logoColor=white)
![Type Safety](https://img.shields.io/badge/Type-Safety-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Validation](https://img.shields.io/badge/Request-Validation-4CAF50?style=flat-square&logo=checkmarx&logoColor=white)

</div>

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [🏗️ System Architecture](#️-system-architecture)
- [📁 Project Structure](#-project-structure)
- [🗄️ Data Model](#️-data-model)
- [⚙️ Installation & Setup](#️-installation--setup)
- [🚀 Running the Application](#-running-the-application)
- [📡 API Endpoints](#-api-endpoints)
  - [GET All Items](#-get-all-items)
  - [GET Single Item](#-get-single-item)
  - [POST Create Item](#-post-create-item)
  - [PUT Update Item](#-put-update-item)
  - [DELETE Remove Item](#-delete-remove-item)
- [⚠️ Validation Rules](#️-validation-rules)
- [📊 HTTP Status Codes](#-http-status-codes)
- [🧪 Testing Guide](#-testing-guide)
- [🔐 Environment Variables](#-environment-variables)
- [🧹 Architecture Deep Dive](#-architecture-deep-dive)
- [🔮 Future Roadmap](#-future-roadmap)
- [🤝 Contributing](#-contributing)
- [👨‍💻 Author](#-author)
- [📄 License](#-license)

---

## ✨ Features

| Category               | Feature                                         | Status |
| ---------------------- | ----------------------------------------------- | ------ |
| **CRUD Operations**    | Full Create, Read, Update, Delete functionality | ✅     |
| **Database**           | MongoDB persistence with Mongoose ODM           | ✅     |
| **Type Safety**        | Full TypeScript implementation                  | ✅     |
| **Validation**         | Request payload validation middleware           | ✅     |
| **Error Handling**     | Centralized global error handler                | ✅     |
| **Architecture**       | Clean separation of concerns (MVC pattern)      | ✅     |
| **Status Codes**       | Proper HTTP response status codes               | ✅     |
| **Environment Config** | Secure configuration with dotenv                | ✅     |
| **Scalability**        | Modular, production-ready structure             | ✅     |
| **Auto Timestamps**    | Created/Updated timestamps automatically        | ✅     |

---

## 🛠️ Tech Stack

<div align="center">

| Technology      | Version | Purpose                 | Badge                                                                                                 |
| --------------- | ------- | ----------------------- | ----------------------------------------------------------------------------------------------------- |
| **Node.js**     | 18+     | JavaScript Runtime      | ![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?logo=node.js&logoColor=white)            |
| **Express.js**  | 4.x     | Web Framework           | ![Express](https://img.shields.io/badge/Express.js-4.x-000000?logo=express&logoColor=white)           |
| **TypeScript**  | 5.x     | Static Typing           | ![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)     |
| **MongoDB**     | 8.x     | NoSQL Database          | ![MongoDB](https://img.shields.io/badge/MongoDB-8.x-47A248?logo=mongodb&logoColor=white)              |
| **Mongoose**    | 8.x     | ODM for MongoDB         | ![Mongoose](https://img.shields.io/badge/Mongoose-8.x-880000?logo=mongoose&logoColor=white)           |
| **dotenv**      | 16.x    | Environment Variables   | ![dotenv](https://img.shields.io/badge/dotenv-16.x-ECD53F?logo=dotenv&logoColor=black)                |
| **ts-node-dev** | 2.x     | Development Auto-reload | ![ts-node-dev](https://img.shields.io/badge/ts--node--dev-2.x-3178C6?logo=typescript&logoColor=white) |

</div>

---

## 🏗️ System Architecture

The application follows a **clean layered architecture** with strict separation of concerns:

```console
┌─────────────────────────────────────────────────────────────────────┐
│                         Client Request                              │
│                    (HTTP Request from Browser/API)                  │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Routes Layer                                │
│              (API endpoint definitions & HTTP methods)              │
│                     item.routes.ts                                  │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       Middleware Layer                              │
│           (Validation & authentication before controller)           │
│              validate-item.middleware.ts                            │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                       Controllers Layer                             │
│          (Request/Response handling & HTTP status codes)            │
│                    item.controller.ts                               │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                        Services Layer                               │
│              (Business logic & database operations)                 │
│                      item.service.ts                                │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                         Models Layer                                │
│              (Mongoose schemas & database interaction)              │
│                       item.model.ts                                 │
└───────────────────────────────┬─────────────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────┐
│                      MongoDB Database                               │
│                    (Persistent storage)                             │
└─────────────────────────────────────────────────────────────────────┘
```

### Layer Responsibilities:

| Layer           | Responsibility                             | Files                                                |
| --------------- | ------------------------------------------ | ---------------------------------------------------- |
| **Routes**      | Define API endpoints and HTTP methods      | `item.routes.ts`                                     |
| **Middleware**  | Validate requests before processing        | `validate-item.middleware.ts`, `error.middleware.ts` |
| **Controllers** | Handle HTTP requests/responses             | `item.controller.ts`                                 |
| **Services**    | Business logic and data operations         | `item.service.ts`                                    |
| **Models**      | Mongoose schemas and database queries      | `item.model.ts`                                      |
| **Config**      | Database connection and environment setup  | `database.ts`                                        |
| **Types**       | TypeScript interfaces and type definitions | `item.types.ts`                                      |

---

## 📁 Project Structure

```console
mongodb-crud-api/
│
├── 📁 src/
│   │
│   ├── 📁 config/
│   │   └── 📄 database.ts              # MongoDB connection setup
│   │
│   ├── 📁 controllers/
│   │   └── 📄 item.controller.ts       # Request/response handlers
│   │
│   ├── 📁 middleware/
│   │   ├── 📄 error.middleware.ts      # Global error handler
│   │   └── 📄 validate-item.middleware.ts  # Request validation
│   │
│   ├── 📁 models/
│   │   └── 📄 item.model.ts            # Mongoose schema & model
│   │
│   ├── 📁 routes/
│   │   └── 📄 item.routes.ts           # API endpoint definitions
│   │
│   ├── 📁 services/
│   │   └── 📄 item.service.ts          # Business logic layer
│   │
│   ├── 📁 types/
│   │   └── 📄 item.types.ts            # TypeScript interfaces
│   │
│   ├── 📄 app.ts                        # Express app configuration
│   │
│   └── 📄 server.ts                     # Application entry point
│
├── 📄 .env                               # Environment variables
├── 📄 .gitignore                         # Git ignore rules
├── 📄 package.json                       # Dependencies & scripts
├── 📄 tsconfig.json                      # TypeScript configuration
└── 📄 README.md                          # Documentation
```

---

## 🗄️ Data Model

### Item Schema

```typescript
{
  "_id": "6658f4c2f89d1c4f3a4a12ab",     // Auto-generated MongoDB ObjectId
  "name": "Laptop",                       // String, Required
  "description": "A high performance laptop", // String, Required
  "price": 1200,                          // Number, Required, Min: 0
  "createdAt": "2026-05-16T10:30:00.000Z", // Auto-generated timestamp
  "updatedAt": "2026-05-16T10:30:00.000Z"  // Auto-updated timestamp
}
```

### Mongoose Schema Definition

```typescript
const itemSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
  },
  {
    timestamps: true, // Auto-manages createdAt & updatedAt
  },
);
```

---

## ⚙️ Installation & Setup

### Prerequisites

- ✅ **Node.js** (v18 or higher)
- ✅ **MongoDB** (local installation or MongoDB Atlas account)
- ✅ **npm** or **yarn** package manager
- ✅ **Git** (for cloning)

### Step-by-Step Installation

```console
# 1. Clone the repository
git clone https://github.com/elyse502/rest-api-crud-exercise.git

# 2. Navigate to project directory
cd rest-api-crud-exercise

# 3. Install dependencies
npm install

# 4. Create environment file
cp .env.example .env  # or create manually

# 5. Configure your database connection (see below)
```

### Environment Configuration

Create a `.env` file in the root directory:

```env
# Server Configuration
PORT=3000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://127.0.0.1:27017/crud_db

# For MongoDB Atlas (Production)
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/crud_db
```

---

## 🚀 Running the Application

### Development Mode (with hot reload)

```console
npm run dev
```

> **Features:**
>
> - Auto-restarts on file changes
> - TypeScript compilation in memory
> - Source maps for debugging
> - Runs on `http://localhost:3000`

### Production Build

```console
npm run build
```

> Compiles TypeScript to JavaScript in the `dist/` folder

### Production Start

```console
npm start
```

> Runs the compiled JavaScript from `dist/` folder

### API Base URL

```console
http://localhost:3000
```

---

## 📡 API Endpoints

**Base URL:** `http://localhost:3000`

| Method     | Endpoint     | Description             | Authentication |
| ---------- | ------------ | ----------------------- | -------------- |
| **GET**    | `/items`     | Retrieve all items      | ❌             |
| **GET**    | `/items/:id` | Retrieve a single item  | ❌             |
| **POST**   | `/items`     | Create a new item       | ❌             |
| **PUT**    | `/items/:id` | Update an existing item | ❌             |
| **DELETE** | `/items/:id` | Delete an item          | ❌             |

---

### 📥 GET All Items

Retrieve all items from the database.

```http
GET /items
```

#### Response (200 OK)

```json
[
  {
    "_id": "6658f4c2f89d1c4f3a4a12ab",
    "name": "Laptop",
    "description": "A high performance laptop",
    "price": 1200,
    "createdAt": "2026-05-16T10:30:00.000Z",
    "updatedAt": "2026-05-16T10:30:00.000Z"
  },
  {
    "_id": "6658f4c2f89d1c4f3a4a12ac",
    "name": "Mouse",
    "description": "Wireless optical mouse",
    "price": 25,
    "createdAt": "2026-05-16T10:35:00.000Z",
    "updatedAt": "2026-05-16T10:35:00.000Z"
  }
]
```

---

### 🔍 GET Single Item

Retrieve a specific item by its ID.

```http
GET /items/6658f4c2f89d1c4f3a4a12ab
```

#### Response (200 OK)

```json
{
  "_id": "6658f4c2f89d1c4f3a4a12ab",
  "name": "Laptop",
  "description": "A high performance laptop",
  "price": 1200,
  "createdAt": "2026-05-16T10:30:00.000Z",
  "updatedAt": "2026-05-16T10:30:00.000Z"
}
```

#### Error Response (404 Not Found)

```json
{
  "message": "Item not found"
}
```

---

### ➕ POST Create Item

Add a new item to the database.

```http
POST /items
Content-Type: application/json
```

#### Request Body

```json
{
  "name": "Laptop",
  "description": "A high performance laptop",
  "price": 1200
}
```

#### Response (201 Created)

```json
{
  "_id": "6658f4c2f89d1c4f3a4a12ab",
  "name": "Laptop",
  "description": "A high performance laptop",
  "price": 1200,
  "createdAt": "2026-05-16T10:30:00.000Z",
  "updatedAt": "2026-05-16T10:30:00.000Z"
}
```

#### Error Response (400 Bad Request)

```json
{
  "message": "Validation failed: name is required"
}
```

---

### ✏️ PUT Update Item

Update an existing item by ID.

```http
PUT /items/6658f4c2f89d1c4f3a4a12ab
Content-Type: application/json
```

#### Request Body

```json
{
  "name": "Gaming Laptop",
  "description": "A powerful laptop for development and gaming",
  "price": 1800
}
```

#### Response (200 OK)

```json
{
  "_id": "6658f4c2f89d1c4f3a4a12ab",
  "name": "Gaming Laptop",
  "description": "A powerful laptop for development and gaming",
  "price": 1800,
  "createdAt": "2026-05-16T10:30:00.000Z",
  "updatedAt": "2026-05-16T10:35:00.000Z"
}
```

#### Error Response (404 Not Found)

```json
{
  "message": "Item not found"
}
```

---

### 🗑️ DELETE Remove Item

Delete an item from the database by ID.

```http
DELETE /items/6658f4c2f89d1c4f3a4a12ab
```

#### Response (204 No Content)

_No response body returned_

#### Error Response (404 Not Found)

```json
{
  "message": "Item not found"
}
```

---

## ⚠️ Validation Rules

| Field           | Type   | Required | Validation Rules                              |
| --------------- | ------ | -------- | --------------------------------------------- |
| **name**        | string | ✅ Yes   | Minimum 3 characters, Maximum 100 characters  |
| **description** | string | ✅ Yes   | Minimum 10 characters, Maximum 500 characters |
| **price**       | number | ✅ Yes   | Must be a number, Minimum value: 0            |

### Validation Middleware Example

```typescript
export const validateItem = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { name, description, price } = req.body;

  if (!name || name.length < 3) {
    return res
      .status(400)
      .json({ message: "Name must be at least 3 characters" });
  }

  if (!description || description.length < 10) {
    return res
      .status(400)
      .json({ message: "Description must be at least 10 characters" });
  }

  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({ message: "Price must be a positive number" });
  }

  next();
};
```

---

## 📊 HTTP Status Codes

| Status Code | Meaning         | When it occurs                               |
| ----------- | --------------- | -------------------------------------------- |
| **200**     | ✅ OK           | GET, PUT successful operations               |
| **201**     | 🆕 Created      | POST successful resource creation            |
| **204**     | 🗑️ No Content   | DELETE successful operation                  |
| **400**     | ❌ Bad Request  | Validation error or malformed request        |
| **404**     | 🔍 Not Found    | Resource with given ID doesn't exist         |
| **500**     | 💥 Server Error | Database connection or internal server error |

---

## 🧪 Testing Guide

### Using cURL Commands

```console
# 1. GET all items
curl http://localhost:3000/items

# 2. GET single item (replace ID)
curl http://localhost:3000/items/6658f4c2f89d1c4f3a4a12ab

# 3. POST create item
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Laptop",
    "description": "A high performance laptop",
    "price": 1200
  }'

# 4. PUT update item
curl -X PUT http://localhost:3000/items/6658f4c2f89d1c4f3a4a12ab \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gaming Laptop",
    "description": "A powerful laptop for development",
    "price": 1800
  }'

# 5. DELETE item
curl -X DELETE http://localhost:3000/items/6658f4c2f89d1c4f3a4a12ab
```

### Using Postman/Thunder Client

| Tool               | Instructions                                 |
| ------------------ | -------------------------------------------- |
| **Postman**        | Import collection or test endpoints manually |
| **Thunder Client** | VS Code extension for quick testing          |
| **Insomnia**       | Cross-platform API client                    |

### Test Flow Example

1. **Create** an item → Store the returned `_id`
2. **Read** all items → Verify creation
3. **Read** single item → Verify correct data
4. **Update** the item → Verify changes
5. **Delete** the item → Verify removal

---

## 🔐 Environment Variables

| Variable        | Description                          | Default       | Required |
| --------------- | ------------------------------------ | ------------- | -------- |
| **PORT**        | Application port number              | `3000`        | ❌       |
| **NODE_ENV**    | Environment (development/production) | `development` | ❌       |
| **MONGODB_URI** | MongoDB connection string            | None          | ✅       |

### MongoDB Connection Strings

**Local MongoDB:**

```env
MONGODB_URI=mongodb://127.0.0.1:27017/crud_db
```

**MongoDB Atlas (Cloud):**

```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/crud_db
```

---

## 🧹 Architecture Deep Dive

### Separation of Concerns Benefits

| Aspect              | Benefit                                          |
| ------------------- | ------------------------------------------------ |
| **Maintainability** | Easy to locate and update code                   |
| **Testability**     | Each layer can be tested independently           |
| **Scalability**     | Add new features without breaking existing code  |
| **Reusability**     | Services and utils can be reused across modules  |
| **Collaboration**   | Multiple developers can work on different layers |

### Error Handling Strategy

The application uses a **centralized error handling middleware**:

```typescript
// error.middleware.ts
export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.error(err.stack);

  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.name === "CastError") {
    return res.status(400).json({ message: "Invalid ID format" });
  }

  res.status(500).json({ message: "Something went wrong!" });
};
```

---

## 🔮 Future Roadmap

| Feature                         | Priority | Description                 |
| ------------------------------- | -------- | --------------------------- |
| 🔐 **JWT Authentication**       | High     | User registration and login |
| 👥 **Role-Based Authorization** | High     | Admin and user roles        |
| ✅ **Zod Validation**           | Medium   | Schema-based validation     |
| 🧪 **Jest Testing**             | Medium   | Unit and integration tests  |
| 🐳 **Docker Support**           | Medium   | Containerized deployment    |
| 📚 **Swagger Documentation**    | Medium   | Interactive API docs        |
| 📄 **Pagination & Filtering**   | Low      | Handle large datasets       |
| 🚦 **Rate Limiting**            | Low      | Prevent API abuse           |
| 🔄 **CI/CD Pipeline**           | Low      | Automated deployment        |
| 📊 **Analytics Dashboard**      | Low      | API usage metrics           |

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Coding Standards

- ✅ Follow TypeScript best practices
- ✅ Write meaningful commit messages
- ✅ Add comments for complex logic
- ✅ Update documentation as needed
- ✅ Write tests for new features

---

## 👨‍💻 Author

### **Elysée NIYIBIZI**

_Junior Fullstack Software Engineer_

<div align="center">

[![Portfolio](https://img.shields.io/badge/Portfolio-elyseedev.netlify.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://elyseedev.netlify.app)
[![GitHub](https://img.shields.io/badge/GitHub-elyse502-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/elyse502)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Niyibizi_Elysée-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/niyibizi-elysée)
[![Email](https://img.shields.io/badge/Email-elyseniyibizi502@gmail.com-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:elyseniyibizi502@gmail.com)

</div>

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](https://github.com/elyse502/rest-api-crud-exercise/blob/dev/LICENSE) file for details.

```
MIT License

Copyright (c) 2026 Elysée NIYIBIZI

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙏 Acknowledgments

- **Express.js** - Fast, unopinionated web framework
- **MongoDB** - Flexible NoSQL database
- **Mongoose** - Elegant MongoDB object modeling
- **TypeScript** - Type-safe JavaScript
- **Node.js** - JavaScript runtime

---

<div align="center">

### ⭐ Star this repository if it helped you learn backend development!

**Built with 💻, TypeScript, and MongoDB**

---

_Have questions or suggestions? Open an issue or reach out!_

[⬆ Back to Top](#-table-of-contents)

</div>
