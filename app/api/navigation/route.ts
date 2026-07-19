import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { from, to } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
You are the FIFA 2026 AI Smart Navigation System.

A fan wants to travel inside the stadium.

Current Location:
${from}

Destination:
${to}

Respond ONLY in this format:

Estimated Walk Time:
Crowd Level:
Recommended Route:
Nearby Facilities:
Accessibility:
Alternative Route:

Keep the answer concise and realistic.
`,
            },
          ],
        },
      ],
    });

    return Response.json({
      result: response.text,
    });
  } catch (error: any) {
    console.error(error);

    return Response.json(
      {
        error:
          "Navigation service is temporarily unavailable. Please try again.",
      },
      {
        status: 503,
      }
    );
  }
}