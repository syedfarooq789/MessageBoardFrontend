import { gql } from "@apollo/client";
export const CREATE_MESSAGE = gql`
  mutation CreateMessage($channelId: String!, $content: String!) {
    createMessage(channelId: $channelId, content: $content) {
      id
      content
    }
  }
`;
