export interface StoryInitialStateType {
  loading: boolean;
  listOfTask: Array<String>;
  error: boolean;
}

export interface StoryPayload {
  userStory: string;
}

export interface StoryResponse {
  statusCode: number;
  message: string;
  data: {
    taskList: string[];
  };
}
