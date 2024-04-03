import { GET_CHANNEL_MESSAGES } from "../graphql";
import { getClient } from "../utils/apollo.client";

export const fetchMessages = async (channelId: string) => {
  try {
    const client = getClient();
    const query = GET_CHANNEL_MESSAGES;
    const { data } = await client.query({
      query,
      variables: {
        channelId,
      },
      context: {
        fetchOptions: {
          next: { revalidate: 0 },
        },
      },
    });
    return data.getChannelMessages;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};
