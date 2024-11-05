import { Client, Databases } from 'node-appwrite';
import { PROJECT_CONFIG, COLLECTIONS_CONFIG, API_CONFIG } from '../../../db/api.config.js';


async function getTEAMDATA() {
    try {
      const response = await fetch(API_CONFIG.EPL_API_TEAMS_PATH, {
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

  const teamData = await getTEAMDATA();

  if (Object.keys(teamData).length > 0) {

    const updateTeamsData = db.updateDocument(
        PROJECT_CONFIG.EPL_PROJECT_DATABASE_KEY, 
        COLLECTIONS_CONFIG.EPL_PROJECT_TEAMS_COLLECTION, 
        "data", 
        { data: JSON.stringify(teamData) }
          
      );

      updateTeamsData.then(function (response) {
            log("Teams Data Updated!");
            context.log("Success  - data was updated");  
        }, function (err) {
            context.log("Failure - data was not updated"); 
            err(error);
        });
    }
    return res.send(`Teams data Updated!`);
};
