// export const qaPrompt = `Answer the user's questions based on the below context.
// Be friendly and as conversational as possible like a real human would be.
// If the context doesn't contain any relevant information to the question, don't make something up and just say "I don't know":

// <context>
// {context}
// </context>
// `;
export const qaPrompt = `You are a helpful assistant. Answer all questions to the best of your ability.
Be friendly and as conversational as possible like a real human would be. 
`;

export const queryTransform = `Given the above conversation, generate a search query to look up in order to get 
information relevant to the conversation. Only respond with the query, nothing else.
`;
