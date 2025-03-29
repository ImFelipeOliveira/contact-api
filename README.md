# Portfolio API

This is a Node.js API built with Express to manage contact messages sent through a portfolio. The API includes features for listing, searching, and creating messages, as well as sending email notifications using Nodemailer.

## Features

- **List contact messages**: Endpoint to retrieve all sent messages.
- **Search message by ID**: Endpoint to find a specific message by its unique identifier.
- **Create contact message**: Endpoint to save a new message in the database and send an email notification.
- **Email sending**: Integration with Gmail via Nodemailer for notifications.

## Technologies Used

- Node.js
- Express
- Sequelize (Database ORM)
- Nodemailer (Email sending)
- dotenv (Environment variables management)
- CORS (Cross-origin resource sharing)

## Getting Started

1. Clone the repository:
    ```bash
    git clone https://github.com/ImFelipeOliveira/contact-api.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables in `.env` file:
    ```env
    CORSALLOWED=http://localhost:5173/
    SMTPEMAIL=seuemail@gmail.com
    SMTPPASSWORD=suasenha
    FROMEMAIL=destinatario@gmail.com
    APIKEY=change-me
    ```

4. Start the server:
    ```bash
    npm start
    ```

5. Access the API endpoints at `http://localhost:3000`

## Endpoints

- `GET /contact` - Returns all contact messages
- `GET /contact/:id` - Returns a specific message by ID
- `POST /contact` - Creates a new message and sends an email notification

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.