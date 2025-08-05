# 💬 Real-Time Chat App

A full-stack real-time messaging application built with the **MERN stack**, **Socket.IO**, **Zustand**, **TailwindCSS**, and **JWT authentication**.

🔗 **Live Demo:** [https://chat-app-vjro.onrender.com/](https://chat-app-vjro.onrender.com/)  

---

## 🔥 Key Features

- ✅ JWT-based authentication and user profile management  
- ✅ Real-time messaging via **Socket.IO**  
- ✅ Online user presence synchronized across sessions  
- ✅ Global state management using **Zustand**  
- ✅ Responsive UI styled with **TailwindCSS** and **DaisyUI**  
- ✅ Secure cookie-based sessions & robust backend error handling  

---

## 💡 What I Learned

This project gave me hands-on experience with:

- **WebSocket communication** using Socket.IO  
- Building secure **authentication flows**  
- Managing global application state with Zustand  
- Structuring a clean and scalable **MERN** application  
- Creating responsive UI with **modern CSS frameworks**  
- Writing reusable components and handling edge cases gracefully  

---

## 🛠️ Technologies Used

### Frontend:
- React  
- Zustand  
- TailwindCSS  
- DaisyUI  
- Axios  

### Backend:
- Node.js  
- Express  
- MongoDB + Mongoose  
- JWT  
- Socket.IO  
- Cookie-parser, CORS  

---

## 🧱 Project Structure

```
chat-app/
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── server.js
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── store/        # Zustand state
│   └── App.jsx
```

---

## 🚀 Getting Started

### Clone the repository:

```bash
git clone https://github.com/ZingerMarat/chat-app.git
cd chat-app
```

---

### 🔧 Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Configure environment variables: MONGO_URI, JWT_SECRET, PORT, etc.
npm run dev
```

---

### 🎨 Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 📌 Future Improvements

- Group chats and private message rooms  
- Image and file sharing  
- Push notifications  
- Mobile responsiveness enhancements  
- Unit and integration tests  
- CI/CD deployment pipelines  

---

## 🧑‍💻 Author

**Marat Zinger**  
[LinkedIn](https://www.linkedin.com/in/marat-zinger/) | [GitHub](https://github.com/ZingerMarat)
