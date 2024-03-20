import OpenAI from "openai";
import Container from "typedi";

export const testOpenaiService = async () => {
  const openai: OpenAI = Container.get("openai");
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "write some code, maybe 2 lines and write some math equation, I basically want to know what different formats you can give response in",
      },
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0];
};
