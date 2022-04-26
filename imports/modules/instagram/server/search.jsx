/*import InstagramConnection from "./connection";
import InstagramSearchTags from "instagram-searchtags";

Meteor.methods({
    "instagram-search": function (query) {
        const searchTags = new InstagramSearchTags({
            username: 'ibol_viralizing',
            password: 'ibol2017',
        });


// Login Instagram with credentials
        searchTags.login()
            .then(() => {

                // Create #dog tag
                const tag = searchTags.createTag('dog')

                // Fetch 10 latest nodes
                return tag.fetchNodes(10)

            })
            .then((nodes) => {

                // ... do something cool with nodes

                // close connection
                searchTags.close()

            })
            .catch((err) => {

                // close connection
                searchTags.close()

                console.error(`Error: ${err.message}`)

            })
    }
});
*/