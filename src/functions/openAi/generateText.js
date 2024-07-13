require("dotenv").config();
const { OPENAI_API_KEY } = process.env;
const OpenAI = require("openai");

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

const generateText = async (intruction, UserContent) => {
  console.log("generateText");
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: intruction,
        },
        {
          role: "user",
          content: UserContent,
        },
      ],
      temperature: 0.8,
      max_tokens: 1500,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    });
    // console.log("usage", response.usage);
    //console.log(response.choices[0].message.content);
    return response.choices[0].message.content;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = generateText;
