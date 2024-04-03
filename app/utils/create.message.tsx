import { CREATE_MESSAGE } from "../graphql";
import { getClient } from "../utils/apollo.client";

export const createMessages = async (channelId: string, content: string) => {
  try {
    const client = getClient();
    const { data } = await client.mutate({
      mutation: CREATE_MESSAGE,
      variables: {
        channelId,
        content,
      },
      context: {
        fetchOptions: {
          next: { revalidate: 1 },
        },
      },
    });
    return data.createMessage;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};
