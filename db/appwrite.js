import { Client, Databases, Account, Storage, Avatars } from "appwrite";
import { PROJECT_CONFIG } from "./api.config";
const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(PROJECT_CONFIG.EPL_PROJECT_KEY);

export const account = new Account(client);
export const databases = new Databases(client);
export const avatars = new Avatars(client);
export const storage = new Storage(client);

// export const storageBucket = import.meta.env.VITE_ST_BUCKET_KEY;


// Hi Georgi,
// thanks for registering for an API authentication token. Please modify your client to use a HTTP header named "X-Auth-Token" with the underneath personal token as value.


