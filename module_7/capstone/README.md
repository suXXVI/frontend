## Capstone Project 7

In this project, you will check your understanding of the concepts covered in this lesson. You will also be required to use the WeatherAPI to test the functionality and reliability of the API. You will be required to at least create 3 requests in Insomnia to test the API. You will also need to make sure that the API returns the expected response and no errors are encountered.

### Project Submission

- Create a new answers.txt file and put your answers marked with the question number.
- Export your Insomnia collection as a JSON file and submit it along with your project.

### Check your understanding

Here are some questions to test your understanding of the concepts covered in this lesson. Google is your friend, so feel free to use it to find the answers.

1. What is an API? You must answer this in your own words, not by copying the definition from the lesson.
2. What is REST? You must answer this in your own words, not by copying the definition from the lesson.
3. What is the difference between REST and GraphQL?
4. What are dummy APIs? What are they used for?
5. What are the common HTTP methods used in APIs?
6. Can you use POST method to update an existing resource? If yes, why? If no, why not?
7. How do you test an API? What tools can you use to test an API?
8. What are environment variables? How do you use them in Insomnia?
9. The URL below is used to authorize a user to access the Spotify API.

```
https://accounts.spotify.com/authorize?client_id=6966c080a0dd4ff190b5c2ef2e13a964&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A8080
```

- There are three query parameters in the URL. What are the values of each parameter?
  - client_id
  - response_type
  - redirect_uri
- What is %3A equivalent to?
- What is %2F equivalent to?
- What is %20 equivalent to?
- In Insomnia, how do you manage the URL with query parameters? What do you do to make it easier to work with?

10. How do you add a Bearer token to requests in Insomnia?

### WeatherAPI

- Create an account with [WeatherAPI](https://www.weatherapi.com/) and obtain an API key. You can use the free plan for this project.

- Familiarize yourself with the WeatherAPI documentation, and understand the different endpoints and parameters that can be used. Use the resources below to help you get started:

  - [WeatherAPI Documentation](https://www.weatherapi.com/docs/)

  - [WeatherAPI Explorer](https://www.weatherapi.com/api-explorer.aspx)

- Write at least 3 requests in Insomnia to the WeatherAPI using the API key from your account. Use the documentation and explorer to help you understand the different endpoints and parameters that can be used.

  - Here's a snapshot of requests that I created in Insomnia to test the WeatherAPI. You must create at least 3 requests.

  ![Insomnia Workspace](https://media1-production-mightynetworks.imgix.net/asset/54247302/capstone-insomnia-snapshot.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format&w=1400&h=1400&fit=max&impolicy=ResizeCrop&constraint=downsize&aspect=fit)

- Use environment variables to store your API key and other settings. Test each request to ensure that the API returns the expected response.
