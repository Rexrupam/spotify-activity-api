GET /healthCheck

    Description: Health check endpoint to verify server status.

    response:
        - Returns a simple message indicating the server is running.

GET /login

    Description: Initiates user login (could redirect to Spotify login).

    response:
        - Redirects to Spotify OAuth login page


GET /spotify/callback

    Description: Callback endpoint for Spotify OAuth login.

    response:
        - Returns a token for authenticated user and token is stored in the browser cookie.
        - Redirects to my portfolio page.


GET /stop

    Description: Pauses the current playback on Spotify.

    Auth: ✅ Requires token

    response:
        - Returns a success message indicating playback has been paused.

GET /play

    Description: Starts playing the current track on Spotify.

    Auth: ✅ Requires token

    response:
        - Returns a success message indicating playback has started.

GET /toptrack

    Description: Fetches the user's top 10 track on Spotify.

    Auth: ✅ Requires token

    response:
        - Returns the user's top 10 tracks in an array.

GET /playanytrack

    Description: Plays a any top 10 track on Spotify.

    Auth: ✅ Requires token

    response:
        - Returns a success message indicating the specified track is now playing.

GET /current-track

    Description: Fetches the currently playing track on Spotify.

    Auth: ✅ Requires token

    response:
        - Returns the currently playing track.