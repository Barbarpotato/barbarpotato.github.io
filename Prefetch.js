const fs = require('fs');
const path = require('path');

const endpoint_list = [
    {
        "url": "https://api-barbarpotato.vercel.app/labs/latest",
        "json_file_name": "blog_latest.json"
    },
    {
        "url": "https://api-barbarpotato.vercel.app/projects",
        "json_file_name": "projects.json"
    },
    {
        "url": "https://api-barbarpotato.vercel.app/badges",
        "json_file_name": "badges.json"
    }
]

async function prefetch() {
    for (const endpoint of endpoint_list) {
        try {
            // Fetch data from each endpoint
            const response = await fetch(endpoint.url);
            const data = await response.json();

            // Determine the output path based on the json_file property
            const outputPath = path.resolve('./public/data', endpoint.json_file_name);

            // Save the fetched data into the respective JSON file
            fs.writeFileSync(outputPath, JSON.stringify(data, null, 2));
            console.log(`Data for ${endpoint.json_file_name} successfully saved to ${outputPath}`);
        } catch (err) {
            console.error(`Failed to fetch data for ${endpoint.url}:`, err);
        }
    }
}

prefetch().catch((err) => console.error('Failed prefetch data:', err));
