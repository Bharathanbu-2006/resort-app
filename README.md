
 🏖️ Resort App (CRUD API)

A simple Resort Management System backend built using Node.js and Express.js that performs CRUD (Create, Read, Update, Delete) operations through REST APIs and is tested using Postman.

## 📌 Project Overview
This project demonstrates how to build backend REST APIs using Node.js and Express.js.
Resort data (rooms, bookings, guests, etc.) is managed using in‑memory storage and all APIs are tested using Postman.

## 🎯 Objective
- Understand REST API concepts 🌐
- Implement CRUD operations ✍️
- Learn Express routing 🛣️
- Test APIs using Postman 🧪

## 🛠️ Technologies Used
- 🟢 Node.js  
- ⚡ Express.js  
- 📜 JavaScript  
- 📮 Postman  

## 📁 Project Structure

resort-app
│
├── index.js
├── routers
│ └── resortRouters.js
├── package.json
└── node_modules

Bash

## 🚀 Getting Started

### 1️⃣ Install Node.js  
Download and install Node.js from the official website.


### 2️⃣ Clone the Repository
```bash
git clone https://github.com/your‑username/resort‑app.git

3️⃣ Install Dependencies
bash
Copy code
npm install

4️⃣ Run the Server
bash
Copy code
node index.js
✅ Server will run on:
http://localhost:3000

🔗 API Endpoints
📥 Get All Resorts
Method: GET
URL: /resorts

🔍 Get Resort by ID
Method: GET
URL: /resorts/:id

✏️ Update Resort
Method: PUT
URL: /resorts/:id
Body (JSON):

json
Copy code
{
  "name": "Beach Paradise",
  "location": "Goa",
  "roomsAvailable": 20
}
🗑️ Delete Resort
Method: DELETE
URL: /resorts/:id

🧪 Testing
All APIs were tested using Postman and returned correct JSON responses with successful status codes.

📌 Key Features
RESTful API design 🌐

Modular routing 📂

Clean and simple code ✨

Beginner‑friendly project 👨‍🎓

🏁 Conclusion
This project provides a basic understanding of backend development using Node.js and Express.js. It serves as a strong foundation for building larger applications with databases, authentication, and advanced features.

👨‍💻 Author
Bharath A 🎓
CSE – Thangavelu Engineering College

---







