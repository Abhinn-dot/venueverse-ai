import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { incident } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
You are the FIFA 2026 Emergency Announcement AI.

Incident:
${incident}

Generate exactly FOUR separate announcements.

Requirements:
- Each announcement must be under 50 words.
- Keep the tone calm, professional and suitable for a stadium public address system.
- Do not add explanations or notes.
- Output exactly in this format:

🇬🇧 English:
...

🇪🇸 Spanish:
...

🇫🇷 French:
...

🇵🇹 Portuguese:
...
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
        "The AI service is temporarily busy. Please try again in a few moments.",
    },
    {
      status: 503,
    }
  );
}
}