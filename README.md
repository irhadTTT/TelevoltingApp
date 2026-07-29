# TelevoltingApp 🚀

A full-stack electronic voting application built with **Angular** on the frontend and **ASP.NET Core Web API** on the backend.

TelevoltingApp provides a modern digital voting experience with a structured client-server architecture, allowing users to interact with voting features through a responsive Angular interface while the .NET backend handles business logic, API communication, and data processing.

---

# 📌 Features

## 🗳️ Voting System

* Digital voting functionality
* User interaction with available voting options
* Processing and management of voting data
* Structured voting workflow

## 👤 User Management

* User authentication and authorization
* Protected application functionality
* Secure communication between frontend and backend

## ⚡ Angular Frontend

* Component-based architecture
* Reusable Angular components
* TypeScript implementation
* Routing and navigation
* Services for API communication
* Responsive user interface

## 🔷 ASP.NET Backend

* RESTful Web API architecture
* C# backend implementation
* Controllers for handling requests
* Business logic separation
* Data processing and validation

---

# 🏗️ Application Architecture

The application follows a modern full-stack architecture:

```text
              User
               │
               ▼
     ┌──────────────────┐
     │ Angular Frontend │
     │  TypeScript UI   │
     └────────┬─────────┘
              │
              │ HTTP Requests
              │ REST API
              ▼
     ┌──────────────────┐
     │ ASP.NET Core API │
     │       C#         │
     └────────┬─────────┘
              │
              ▼
     ┌──────────────────┐
     │    Database      │
     └──────────────────┘
```

---

# 🛠️ Technologies Used

## Frontend

* Angular
* TypeScript
* HTML5
* CSS3
* RxJS
* Angular CLI

## Backend

* ASP.NET Core Web API
* C#
* .NET
* Entity Framework Core

## Development Tools

* Visual Studio
* Visual Studio Code
* Git & GitHub
* npm

---

# 📂 Project Structure

```text
TelevoltingApp/

│
├── Frontend/
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── services/
│   │   │   ├── models/
│   │   │   └── pages/
│   │   └── assets/
│   │
│
├── Backend/
│   ├── Controllers/
│   ├── Models/
│   ├── Services/
│   ├── Data/
│   └── Program.cs
│
└── README.md
```

---

# ⚙️ Installation & Setup

## Clone Repository

```bash
git clone https://github.com/irhadTTT/TelevoltingApp.git

cd TelevoltingApp
```

---

# Frontend Setup (Angular)

Navigate to the Angular project folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run Angular application:

```bash
ng serve
```

Frontend will be available at:

```text
http://localhost:4200
```

---

# Backend Setup (.NET)

Open the backend solution in Visual Studio.

Restore dependencies:

```bash
dotnet restore
```

Run the API:

```bash
dotnet run
```

The backend API will start on the configured .NET development port.

---

# 🔄 Application Flow

1. User opens the Angular application.
2. Angular components display the available functionality.
3. User actions are sent through HTTP requests.
4. ASP.NET Core API processes requests.
5. Backend communicates with the database.
6. Results are returned to the Angular frontend.

---

# 🔐 Security

The application is designed with security considerations including:

* User authentication
* Authorization of protected actions
* Backend validation
* Controlled access to application features

---

# 🚀 Future Improvements

Possible improvements:

* Add JWT token authentication
* Implement role-based authorization
* Add advanced voting analytics
* Add real-time voting updates
* Improve UI/UX design
* Add automated unit and integration tests
* Add Docker support
* Deploy application to cloud infrastructure

---

# 👨‍💻 Author

**Irhad Kunovac**

GitHub:
[https://github.com/irhadTTT](https://github.com/irhadTTT)

---

# 📄 License

This project is created for educational and portfolio purposes.

