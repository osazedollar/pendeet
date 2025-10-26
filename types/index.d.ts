declare type BaseBackendResponse<T = unknown> = {
  message: string;
  // data?: T;
} & T;

// declare type BaseBackendResponse = {
//   message: string;
//   success: boolean;
// };

{
  /*  data: {
    message: 'Sign-in successful',
    account: {
      accountId: 'ec9bcee4-d974-4401-bd8a-9145656eacd1',
      email: 'victorymosy@gmail.com',
      role: 'User',
      accountType: 'Personal'
    },
    sessionId: '729c2725-06d0-480b-89f1-0a4cafaae674',
    accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NvdW50SWQiOiJlYzliY2VlNC1kOTc0LTQ0MDEtYmQ4YS05MTQ1NjU2ZWFjZDEiLCJyb2xlIjoiVXNlciIsImFjY291bnRUeXBlIjoiUGVyc29uYWwiLCJzZXNzaW9uSWQiOiI3MjljMjcyNS0wNmQwLTQ4MGItODlmMS0wYTRjYWZhYWU2NzQiLCJpYXQiOjE3NTgyMjA5MTIsImV4cCI6MTc1ODIyMTIxMn0.3VAULncsiAjqkXDu5rDxbXssGYPVon1qOPgyxaFA1As',
    refreshToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZXNzaW9uSWQiOiI3MjljMjcyNS0wNmQwLTQ4MGItODlmMS0wYTRjYWZhYWU2NzQiLCJpYXQiOjE3NTgyMjA5MTIsImV4cCI6MTc4OTc3ODUxMn0.TiJF7ydlusJs5IJQ4EfocWGdzT9TJOmNA0oiz7wVBbc'
  }
} */
}
