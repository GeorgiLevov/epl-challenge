import { Client, Databases } from 'node-appwrite';

const EPL_PROJECT_KEY = process.env.EPL_PROJECT_KEY || import.meta.env.EPL_PROJECT_KEY;
const EPL_DATABASE_KEY = process.env.EPL_API_DATABASE_KEY || import.meta.env.EPL_API_DATABASE_KEY;
const EPL_MATCHES_COLLECTION = process.env.EPL_API_MATCHES_COLLECTION || import.meta.env.EPL_API_MATCHES_COLLECTION;
const EPL_API_TOKEN = process.env.EPL_API_TOKEN || import.meta.env.EPL_API_TOKEN;
const EPL_API_MATCHES_API_PATH = process.env.EPL_API_MATCHES_API_PATH || import.meta.env.EPL_API_MATCHES_API_PATH;


async function getMATCHES() {
    try {
      const response = await fetch(EPL_API_MATCHES_API_PATH, {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": EPL_API_TOKEN,
          "X-API-Version": "v4",
        },
      });
  
        const result = await response.json();
        return result;
    } catch (err) {
        context.log(err);
        error(err);
    }
  }

export default async ({ req, res, log, error }) => {

  // You can use the Appwrite SDK to interact with other services
  // For this example, we're using the Users service
  const client = new Client();
  client
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(EPL_PROJECT_KEY);

  const db = new Databases(client);

  const matchesData = await getMATCHES();

  if (Object.keys(matchesData).length > 0) {
    
    const updateMatchesData = db.updateDocument(
          EPL_DATABASE_KEY, 
          EPL_MATCHES_COLLECTION, 
          "data", 
          { data: JSON.stringify(matchesData) }
          
      );

      updateMatchesData.then(function (response) {
            log("Matches Data Updated!");
            context.log("Success  - data was updated");  
        }, function (err) {
            context.log("Failure - data was not updated"); 
            err(error);
        });
    }
    return res.send(`Matches Data Updated!`);
};
