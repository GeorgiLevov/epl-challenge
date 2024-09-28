import { Client, Databases } from 'node-appwrite';

const EPL_PROJECT_KEY = process.env.EPL_PROJECT_KEY || import.meta.env.EPL_PROJECT_KEY;
const EPL_DATABASE_KEY = process.env.EPL_DATABASE_KEY || import.meta.env.EPL_DATABASE_KEY;
const EPL_TEAMS_COLLECTION = process.env.EPL_API_TEAMS_COLLECTION || import.meta.env.EPL_API_TEAMS_COLLECTION;
const EPL_STANDINGS_COLLECTION = process.env.EPL_STANDINGS_COLLECTION || import.meta.env.EPL_STANDINGS_COLLECTION;
const EPL_API_TOKEN = process.env.EPL_API_TOKEN || import.meta.env.EPL_API_TOKEN;
const EPL_TEAM_DATA_API_PATH = process.env.EPL_API_TEAMS_API_PATH || import.meta.env.EPL_API_TEAMS_API_PATH;


async function getTEAMDATA() {
    try {
      const response = await fetch(EPL_TEAM_DATA_API_PATH, {
        headers: {
          "Content-Type": "application/json",
          "X-Auth-Token": EPL_API_TOKEN,
          "X-API-Version": "v4",
        },
      });
  
        const result = await response.json();
        return result;
    } catch (err) {
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

  const response = await db.listDocuments(
      EPL_DATABASE_KEY,
      EPL_TEAMS_COLLECTION
  )

  const teamData = await getTEAMDATA();

  if (response.documents.length  > 0) {
      const updateTeamsData = db.updateDocument(
          EPL_DATABASE_KEY, 
          EPL_TEAMS_COLLECTION, 
          "data", 
          JSON.stringify(teamData)
      );

      updateTeamsData.then(function (response) {
            log("Teams Data Updated!");
            log(JSON.stringify(response));
            console.log("Success  - data was updated");  
        }, function (err) {
            console.log("Failure - data was not updated"); 
            err(error);
        });
    }

    return res.send(`Teams data Updated!`);
};
