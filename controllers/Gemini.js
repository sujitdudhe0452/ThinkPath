const { GoogleGenerativeAI } = require("@google/generative-ai");


const genAI = new GoogleGenerativeAI(process.env.API_KEY_GEMINI);
const model = genAI.getGenerativeModel({model: "gemini-1.5-flash"});

exports.generate = async (req, res) => {
    try 
    {
        const prompt = req.body.questions;
      const result = await model.generateContent(prompt);
      console.log(result.response.text());
      return res.status(200).json(result.response.text());   
    } catch (err) {
        console.log(err);
    }
};