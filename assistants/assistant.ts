import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { shows } from "../data/shows";

export const assistant: CreateAssistantDTO | any = {
  name: "Podcast Host",
  model: {
    provider: "openai",
    model: "gpt-4",
    temperature: 0.7,
    systemPrompt: `You’re a podcaster AI and you’re expected to have a conversation with me. If I interrupt you to clarify something, explain it to me in layman’s terms as much as possible within 2-3 sentences. Then confirm if I understand it. If I did, then resume the previous conversation.`,
    // Upcoming Shows are ${JSON.stringify(
    //   shows
    // )}
    // `,
    functions: [
      {
        name: "suggestTopics",
        async: true,
        description:
          "Suggests a list of topics that would be relevant to the user.",
        parameters: {
          type: "object",
          properties: {
            location: {
              type: "string",
              description: "The location for which the user lives in.",
            },
            interests: {
              type: "string",
              description: "The topic that the user cares about discussing.",
            },
          },
        },
      },
      // {
      //   name: "confirmDetails",
      //   async: true, // remove async to wait for BE response.
      //   description: "Confirms the details provided by the user.",
      //   parameters: {
      //     type: "object",
      //     properties: {
      //       show: {
      //         type: "string",
      //         description: "The show for which the user wants to book tickets.",
      //       },
      //       date: {
      //         type: "string",
      //         description:
      //           "The date for which the user wants to book the tickets.",
      //       },
      //       location: {
      //         type: "string",
      //         description:
      //           "The location for which the user wants to book the tickets.",
      //       },
      //       numberOfTickets: {
      //         type: "number",
      //         description: "The number of tickets that the user wants to book.",
      //       },
      //     },
      //   },
      // },
      // {
      //   name: "bookTickets",
      //   async: true, // remove async to wait for BE response.
      //   description: "Books tickets for the user.",
      //   parameters: {
      //     type: "object",
      //     properties: {
      //       show: {
      //         type: "string",
      //         description: "The show for which the user wants to book tickets.",
      //       },
      //       date: {
      //         type: "string",
      //         description:
      //           "The date for which the user wants to book the tickets.",
      //       },
      //       location: {
      //         type: "string",
      //         description:
      //           "The location for which the user wants to book the tickets.",
      //       },
      //       numberOfTickets: {
      //         type: "number",
      //         description: "The number of tickets that the user wants to book.",
      //       },
      //     },
      //   },
      // },
    ],
  },
  voice: {
    provider: "11labs",
    voiceId: "paul",
  },
  firstMessage:
    "Hi. I'm Caster, your personal podcast host! What's your name, and what should we talk about?",
  serverUrl: process.env.NEXT_PUBLIC_SERVER_URL
    ? process.env.NEXT_PUBLIC_SERVER_URL
    : "https://08ae-202-43-120-244.ngrok-free.app/api/webhook",
};
