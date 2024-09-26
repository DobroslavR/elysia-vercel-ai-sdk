import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { convertToCoreMessages, streamText } from "ai";
import Elysia, { t } from "elysia";

const google = createGoogleGenerativeAI({
  apiKey: Bun.env.GOOGLE_AI_API_KEY,
});

const AssistantRole = t.Union([
  t.Literal("function"),
  t.Literal("system"),
  t.Literal("user"),
  t.Literal("assistant"),
  t.Literal("data"),
  t.Literal("tool"),
]);

const app = new Elysia()
  .post(
    "/stream",
    async ({ body: { messages } }) => {
      const result = await streamText({
        model: google("gemini-1.5-flash-002"),
        messages: convertToCoreMessages(messages),
      });

      return result.toDataStreamResponse();
    },
    {
      body: t.Object({
        messages: t.Array(
          t.Object({
            role: AssistantRole,
            content: t.String(),
          })
        ),
      }),
    }
  )
  .listen(Number(Bun.env.PORT));

console.log(
  `🦊 Elysia is running at http://${app.server?.hostname}:${app.server?.port}`
);
