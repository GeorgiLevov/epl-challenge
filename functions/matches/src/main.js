import { Client, Databases } from 'node-appwrite';
import { PROJECT_CONFIG, API_CONFIG, COLLECTIONS_CONFIG } from '../../../db/api.config';


async function getMATCHES() {
    try {
      const response = await fetch(API_CONFIG.EPL_API_MATCHES_PATH, {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": API_CONFIG.EPL_API_KEY,
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
  .setProject(PROJECT_CONFIG.EPL_PROJECT_KEY);

  const db = new Databases(client);

  const matchesData = await getMATCHES();

  if (Object.keys(matchesData).length > 0) {
    
    const updateMatchesData = db.updateDocument(
        PROJECT_CONFIG.EPL_PROJECT_DATABASE_KEY, 
        COLLECTIONS_CONFIG.EPL_PROJECT_MATCHES_COLLECTION, 
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
