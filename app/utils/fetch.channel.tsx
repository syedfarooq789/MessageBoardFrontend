import { getClient } from "../utils/apollo.client";
import { ALL_CHANNELS_QUERY } from "../graphql";

export const fetchChannels = async () => {
  try {
    const client = getClient();
    const query = ALL_CHANNELS_QUERY;
    const { data } = await client.query({
      query,
      context: {
        fetchOptions: {
          next: { revalidate: 0 },
        },
      },
    });
    return data.getAllChannels;
  } catch (error) {
    console.error("Error fetching channels:", error);
  }
};
