# Multimodal RAG Chatbot

A multimodal chatbot built using Next.js, Vercel AI SDK, and Groq API with Retrieval-Augmented Generation (RAG) and optional tool-calling support.

## Features

- Text-based chatbot
- Image upload support
- Retrieval-Augmented Generation (RAG)
- Tool calling functionality
- Responsive UI
- Vercel deployment

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Vercel AI SDK
- Groq API

## Installation

Clone the repository:

```bash
git clone https://github.com/shakti468/multimodal-rag-chatbot.git
```

Go to project folder:

```bash
cd multimodal-rag-chatbot
```

Install dependencies:

```bash
npm install
```

Create `.env.local` file:

```env
GROQ_API_KEY=your_api_key
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Deployment

The application is deployed using Vercel.

## Project Structure

```bash
src/
 ├── app/
 │   ├── api/chat/
 │   └── page.tsx
 ├── components/
data/
.env.local
```

## Future Improvements

- Real vector database integration
- Advanced image understanding
- Web search tools
- Generative UI

## Author

Shakti Ranjan Mohanty