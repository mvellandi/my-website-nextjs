// import client, { getClient, previewClient } from "./sanity";

// const aboutFields = `_id, bio_full, coverImage`;

// export async function getAboutPage({ preview, fields = aboutFields }) {
//   const results = await getClient(preview)
//     .fetch(`*[_type == "author" && name match "Mario Vellandi"] {
//       ${fields}
//     }`);

//   return results[0];
// }
