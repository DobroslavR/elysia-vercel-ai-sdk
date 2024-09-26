# Google AI Streaming Server with Elysia and Bun

This project implements a streaming server for Google's Generative AI using Elysia and the Bun runtime. It provides an API endpoint for streaming text responses from Google's AI models.

## Features

- Streaming responses from Google's Generative AI
- Built with Elysia for fast, type-safe API development
- Uses Bun runtime for improved performance
- Supports various assistant roles (function, system, user, assistant, data, tool)

## Prerequisites

- [Bun](https://bun.sh/) installed on your system
- A Google AI API key (<https://aistudio.google.com/app/apikey>)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DobroslavR/elysia-vercel-ai-sdk.git
   cd elysia-vercel-ai-sdk
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up environment variables:
   Create a `.env` file in the project root and add your Google AI API key:
   ```
   GOOGLE_AI_API_KEY=your_api_key_here
   PORT=3000
   ```

## Usage

To start the server in development mode:

```bash
bun dev
```

The server will start, and you should see a message like:
```
🦊 Elysia is running at http://localhost:3000
```

### API Endpoint

- **POST** `/stream`
  - Accepts an array of messages in the request body
  - Returns a streaming response from the Google AI model

Example request body:
```json
{
  "messages": [
    {
      "role": "user",
      "content": "Tell me a joke"
    }
  ]
}
```

## Dependencies

- `@ai-sdk/google`: SDK for interacting with Google's AI models
- `ai`: Utility functions from Vercel for AI operations
- `elysia`: Fast and flexible web framework for Bun

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open-source and available under the [MIT License](LICENSE).