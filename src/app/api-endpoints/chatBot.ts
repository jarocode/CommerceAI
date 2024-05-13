import axios from "axios";
import { processError } from "utils/processError";

const chatShoppingAssistant = async (message: string) => {
  try {
    const response = await axios.post(`/api/chatbot`, { message });
    return response.data.data;
  } catch (e) {
    processError(e);
  }
};

export const chatbotApi = {
  chatShoppingAssistant,
};
