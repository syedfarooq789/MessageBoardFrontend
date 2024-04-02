import { gql } from "@apollo/client";

export const ALL_CHANNELS_QUERY = gql`
  query {
    getAllChannels {
      id
      name
    }
  }
`;

export const GET_CHANNEL_MESSAGES = gql`
  query GetChannelMessages($channelId: String!) {
    getChannelMessages(channelId: $channelId) {
      content
    }
  }
`;
