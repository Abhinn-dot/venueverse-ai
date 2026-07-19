import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY!,
});

export async function POST(req: Request) {
  try {
    const { prompt } = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `
You are AegisAI, the AI Stadium Operations Commander for FIFA World Cup 2026.

The operator reports this incident:

${prompt}

Analyze the situation and respond ONLY with valid JSON.

Do not include markdown.
Do not include \`\`\`json.
Do not include explanations.
Return only a JSON object.

The JSON must follow exactly this structure:

{
  "riskLevel": "HIGH | MEDIUM | LOW",
  "confidence": "95%",
  "estimatedResolution": "10 minutes",
  "resources": {
    "securityTeams": 4,
    "medicalTeams": 2,
    "volunteers": 8,
    "policeUnits": 2
  },
  "actionPlan": [
    "Action 1",
    "Action 2",
    "Action 3"
  ],
  "publicAnnouncement": "One short multilingual announcement summary."
}
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
