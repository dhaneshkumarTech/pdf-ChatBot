
# PDF ChatBot

This project is a Next.js application that uses LangChain and OpenAI to create an AI assistant capable of answering questions based on the content of a provided PDF document.

## Features

- Load a PDF document and split it into chunks.
- Use OpenAI embeddings to create a vector store from the document chunks.
- Retrieve related chunks based on user questions.
- Generate concise answers using OpenAI's GPT-3.5 model.
- Display chat history and responses in a user-friendly interface.

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dhaneshkumarTech/pdf-ChatBot.git
   cd pdfchatbot
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root of your project.
   - Add your OpenAI API key to the `.env.local` file:

    OPENAI_API_KEY=your_openai_api_key
   

### Running the Application

1. Start the development server:
   npm run dev

2. Open your browser and navigate to `http://localhost:3000` to interact with the LangChain AI assistant.

### Project Structure

- `app/`: Contains the Next.js pages and components.
- `lib/`: Contains the LangChain logic for loading documents, creating embeddings, and generating responses.
- `public/`: Contains static assets such as the example PDF document.
- `styles/`: Contains the global styles for the application.

### Key Files

- `app/layout.js`: Defines the layout for the Next.js app.
- `app/page.js`: Contains the main UI logic and components.
- `app/api/ask/route.js`: Handles API requests to generate responses based on user questions.
- `lib/langchain.js`: Contains the logic for loading the PDF document, creating embeddings, retrieving related chunks, and generating responses.

### Example Usage

1. Open the application in your browser.
2. Enter a question related to the content of the example PDF document.
3. Submit the question and view the AI-generated response along with the chat history.
