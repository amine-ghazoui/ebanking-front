
---

# 💻 E-Banking Web – Angular Frontend

This is the frontend part of the E-Banking application built with Angular. It provides a user-friendly interface for managing clients, bank accounts, and performing transactions. It communicates with the backend API developed in Spring Boot.

---

## Features

- JWT-based authentication and route guarding
- Client management:
  - Create, update, delete clients
  - Search clients by name or email
- Bank account management:
  - Create current and savings accounts
  - View balance and transaction history
  - Perform credit (deposit) and debit (withdrawal) operations
- Interactive dashboard:
  - Global banking statistics
  - Dynamic charts for insights (via Chart.js)
- User tracking:
  - Actions are linked to authenticated users for auditing purposes

---

## Project Architecture


```text
e-banking-web/
├── .vscode/
├── environments/
├── node_modules/
├── public/
└── src/
    ├── app/
    │   ├── accounts/
    │   ├── admin-template/
    │   ├── customer-account/
    │   ├── customers/
    │   ├── guards/
    │   ├── interceptors/
    │   ├── login/
    │   ├── model/
    │   ├── navbar/
    │   ├── new-customer/
    │   ├── not-authorized/
    │   ├── services/
    │   ├── app-routing.module.ts
    │   ├── app.component.css
    │   ├── app.component.html
    │   ├── app.component.ts
    │   └── app.module.ts
    ├── index.html
    ├── main.ts
    └── styles.css
```

---

## Application Structure (Angular Modules)

Each folder within the `src/app/` directory represents a major module or component:

| Folder               | Purpose                                                              |
|----------------------|----------------------------------------------------------------------|
| `accounts/`          | Manages bank accounts: create, view, and perform operations.         |
| `admin-template/`    | Main layout used by admin pages.                                     |
| `customer-account/`  | Displays accounts linked to a specific customer.                     |
| `customers/`         | Components for client listing and CRUD operations.                   |
| `guards/`            | Role-based route guards for protected access.                        |
| `interceptors/`      | Automatically injects JWT token into HTTP requests.                  |
| `login/`             | Login component and authentication logic.                            |
| `model/`             | TypeScript interfaces for app data models (Customer, Account, etc.). |
| `navbar/`            | Top navigation bar for the application.                              |
| `new-customer/`      | Form to create a new customer.                                       |
| `not-authorized/`    | Displays a 403 message if access is denied.                          |
| `services/`          | Angular services to communicate with the backend API.                |

---

## Application Screenshots

Below are some screenshots demonstrating the user interface:

### Login Page
![Login Page](https://github.com/user-attachments/assets/3aa0a46e-a0a5-4beb-b6bd-fbd2e6a0c019)

### Client List
![Client List](https://github.com/user-attachments/assets/cc3318b3-276f-4b84-94b6-d8735af89ff3)

### Bank Account Details
![Bank Account](https://github.com/user-attachments/assets/e610c1b6-4f11-49d1-bebe-54436c0f787d)

### Add New Client
![Add Client](https://github.com/user-attachments/assets/8db5b151-c194-49a7-89da-76a72e2dfe5d)

---

## Technologies Used

- Angular 17
- Bootstrap (for UI styling)
- HTML & CSS
- Chart.js via ng2-charts (for dashboards)
- Angular HTTP Client (for API communication)
- JWT (authentication)
- Angular CLI (project scaffolding and build)

---

## Installation and Running the Application

### Step 1 – Clone the repository
```bash
git clone [https://github.com/your-username/e-banking-web.git
cd e-banking-web](https://github.com/amine-ghazoui/ebanking-front.git)]
```

### Step 2 – Install dependencies
npm install

### Step 3 – Configure environment
```bash
export const environment = {
  production: false,
  backendHost: 'http://localhost:8085'
};
```

### Step 4 – Start the Angular development server
ng serve
