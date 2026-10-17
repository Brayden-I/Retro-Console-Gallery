https://github.com/Brayden-I/Retro-Console-Gallery

How the Request Works
Create and Send Request: When the "Load Consoles" button is clicked, a request is created and sent to a server (the exact server and endpoint are not specified in the provided code).
Status Check: The request's status is monitored to determine if it was successful or if an error occurred.
Parse Response: Once the request is complete, the response is parsed to extract the necessary data.
How the Summary is Calculated
Extract Data: The response from the server is parsed to extract relevant data, such as console names or other details.
Calculate Summary: The extracted data is processed to compute a summary, which could involve counting the number of consoles, identifying the most popular ones, or other relevant calculations.
Display Summary: The calculated summary is then displayed on the webpage, typically in the <p id="displaySummary"></p> element, providing users with a quick overview of the data.
