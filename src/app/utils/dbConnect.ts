import { MongoClient, Collection, Document } from "mongodb";

export async function getMongoDBCollection(): Promise<Collection<Document>> {
  //   try {
  if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
  }

  if (!process.env.MONGODB_DATABASE_NAME)
    throw new Error("Mongodb database name not found in .env.local file");
  if (!process.env.MONGODB_COLLECTION_NAME)
    throw new Error("Mongodb collection name not found in .env.local file");

  const client = new MongoClient(process.env.MONGODB_URI || "", {
    driverInfo: { name: "langchainjs" },
  });

  await client.connect();
  console.log("successfully connected to mongoDB atlas");

  const collection = client
    .db(process.env.MONGODB_DATABASE_NAME)
    .collection(process.env.MONGODB_COLLECTION_NAME || "");
  return collection;
  //   } catch (error) {
  //     console.log("error connecting to mongoDB atlas", error);
  //     return null;
  //   }
}
