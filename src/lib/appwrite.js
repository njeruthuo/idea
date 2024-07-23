import { Client, Databases, Account } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66a001e40021a6ca0681");

export const account = new Account(client);
export const databases = new Databases(client);
