# Simple Products REST API

A simple REST API built with **Node.js** and **Express** — no database required. Data is stored in-memory.

---

## Tech Stack

- **Node.js**
- **Express v5**
- **Nodemon** (dev server)

---

## Getting Started

### Install dependencies

```bash
npm install
```

### Run the server

```bash
nodemon app.js
```

Server will start at: `http://localhost:3000`

---

## API Endpoints

### Base URL: `http://localhost:3000`

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | Get all products |
| GET | `/products/:id` | Get product by ID |
| POST | `/products` | Create a new product |
| PUT | `/products/:id` | Update a product |
| DELETE | `/products/:id` | Delete a product |

---

## Request & Response Examples

### GET /products

**Response:**
```json
{
  "success": true,
  "data": [
    { "id": 1, "name": "Laptop", "price": 15000000, "stock": 10 },
    { "id": 2, "name": "Mouse", "price": 250000, "stock": 50 },
    { "id": 3, "name": "Keyboard", "price": 450000, "stock": 30 }
  ]
}
```

---

### GET /products/:id

**Response (found):**
```json
{
  "success": true,
  "data": { "id": 1, "name": "Laptop", "price": 15000000, "stock": 10 }
}
```

**Response (not found):**
```json
{
  "success": false,
  "message": "Product not found"
}
```

---

### POST /products

**Request Body:**
```json
{
  "name": "Monitor",
  "price": 3000000,
  "stock": 15
}
```

**Response:**
```json
{
  "success": true,
  "data": { "id": 4, "name": "Monitor", "price": 3000000, "stock": 15 }
}
```

---

### PUT /products/:id

**Request Body (partial update supported):**
```json
{
  "price": 2800000,
  "stock": 12
}
```

**Response:**
```json
{
  "success": true,
  "data": { "id": 4, "name": "Monitor", "price": 2800000, "stock": 12 }
}
```

---

### DELETE /products/:id

**Response:**
```json
{
  "success": true,
  "data": { "id": 4, "name": "Monitor", "price": 2800000, "stock": 12 }
}
```

---

## Notes

- Data is stored **in-memory** and will reset every time the server restarts.
- All responses follow the format: `{ "success": true/false, "data": ... }`.

---

## Author

**zuna107**
