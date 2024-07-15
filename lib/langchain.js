import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { ChatPromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import { formatDocumentsAsString } from "langchain/util/document";
import dotenv from 'dotenv';

dotenv.config();

const loader = new PDFLoader("public/example_data/resume.pdf");

async function loadDocumentAndUseEmbeddings(question, chat_history) {
  const docs = await loader.load();
  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200,
  });
  const splits = await textSplitter.splitDocuments(docs);

  const vectorStore = await MemoryVectorStore.fromDocuments(
    splits,
    new OpenAIEmbeddings()
  );

  const llm = new ChatOpenAI({ model: "gpt-3.5-turbo", temperature: 0 });

  // Retrieve related chunks based on the user question
  const relatedChunks = await vectorStore.similaritySearch(question, 4);

  // Log the related chunks
  relatedChunks.forEach((chunk, index) => {
    console.log(`Chunk ${index + 1}: ${chunk.pageContent}`);
    console.log("=====================================================\n")
  });

  // Format the retrieved chunks as a string
  const context = formatDocumentsAsString(relatedChunks);

  // Create the prompt template
  const promptTemplate = ChatPromptTemplate.fromMessages([
    ["system", `Use the following context to answer the user's question concisely and to the point:`],
    ["system", context],
    ...(chat_history || []).map(msg => [msg.type, msg.text]),
    ["human", question],
  ]);

  const promptChain = promptTemplate.pipe(llm);

  const response = await promptChain.invoke({ chat_history });

  console.log("\n-----------------------------------------------------");
  console.log("Standalone Question:", question);
  console.log("Answer:", response.content);

  return response.content;
}

export { loadDocumentAndUseEmbeddings };
