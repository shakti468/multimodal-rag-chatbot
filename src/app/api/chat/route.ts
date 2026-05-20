import { groq } from "@ai-sdk/groq";
import { streamText, tool } from "ai";
import fs from "fs";
import path from "path";
import { z } from "zod";

export async function POST(req: Request) {
  const { messages } = await req.json();

  const filePath = path.join(process.cwd(), "data/context.txt");

  const context = fs.readFileSync(filePath, "utf8");

  const result = streamText({
    model: groq("llama3-70b-8192"),

    system: `
      You are a multimodal RAG chatbot.

      Context:
      ${context}
    `,

    messages,

    tools: {
      getWeather: tool({
        description: "Get weather info",
        parameters: z.object({
          city: z.string(),
        }),

        execute: async ({ city }) => {
          return {
            weather: `Sunny in ${city}`,
          };
        },
      }),
    },
  });

  return result.toDataStreamResponse();
}