import { RunnableSequence } from '@langchain/core/runnables';
import { AgentExecutor, type AgentStep } from 'langchain/agents';
import { formatToOpenAIFunctionMessages } from 'langchain/agents/format_scratchpad';
import { OpenAIFunctionsAgentOutputParser } from 'langchain/agents/openai/output_parser';
import { convertToOpenAIFunction } from '@langchain/core/utils/function_calling';

import { tools } from '../tools';
import { agentPrompt } from '../prompts';
import { LLM } from 'llms';

const model = LLM.chatOpenAI;

const modelWithFunctions = model.bind({
  functions: tools.map((tool) => convertToOpenAIFunction(tool)),
});

const runnableAgent = RunnableSequence.from([
  {
    input: (i: { input: string; steps: AgentStep[] }) => i.input,
    agent_scratchpad: (i: { input: string; steps: AgentStep[] }) =>
      formatToOpenAIFunctionMessages(i.steps),
  },
  agentPrompt,
  modelWithFunctions,
  new OpenAIFunctionsAgentOutputParser(),
]);

export const shoppingAgentExecutor = AgentExecutor.fromAgentAndTools({
  agent: runnableAgent,
  tools,
});
