# 🛡️ Authentication System with Node.js, Express & MongoDB

This project is a basic **user authentication system** built with **Node.js**, **Express.js**, and **MongoDB** (using Mongoose). It allows users to **register** and **login** using a simple API. All the user credentials are stored securely in a MongoDB database.

---

## 📂 Features

- ✅ User registration  
- ✅ User login  
- ✅ MongoDB integration using Mongoose  
- ✅ Password validation (Plain for demo, can be extended with bcrypt)  
- ✅ Modular folder structure  

---

## 🛠️ Tech Stack

- **Node.js** – Server-side JavaScript runtime  
- **Express.js** – Web framework for Node.js  
- **MongoDB** – NoSQL database  
- **Mongoose** – ODM (Object Data Modeling) for MongoDB  
- **dotenv** – Environment variable management  

---

## 📁 Project Structure

project-root/
├── src/
│ ├── db/ # Database connection logic
│ ├── models/ # Mongoose models (User schema)
│ └── routes/ # Auth routes (Register & Login)
├── .env # Environment variables
├── app.js # Express app setup
├── server.js # Server entry point
├── package.json



---

## 🚀 How to Run

### 1. Clone the Repository
git clone https://github.com/Jitendrasinghgurjar/backend-authentication-with-jwt
cd backend-authentication-with-jwt
2. Install Dependencies

npm install
3. Setup Environment Variables
Create a .env file in the root and add:


PORT=3000
MONGO_URI=mongodb://localhost:27017/authentication
4. Start the Server
npm start
Server will run at: http://localhost:3000

📬 API Endpoints
📌 Register
POST /auth/register

Body:

json
{
  "username": "your_username",
  "password": "your_password"
}
📌 Login
POST /auth/login

Body:

json
{
  "username": "your_username",
  "password": "your_password"
}
🧠 Future Improvements
✅ Add JWT for secure token-based login

✅ Hash passwords using bcrypt

✅ Add logout and protected routes

✅ Add user validation (email format, strong password)

👨‍💻 Author
Name: Jitendra Singh Gurjar
GitHub: https://github.com/Jitendrasinghgurjar/

