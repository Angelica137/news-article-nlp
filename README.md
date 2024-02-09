# News Article NLP

News Article Natural Language Processing (NLP) is a web application that uses the [MeaningCloud API](https://www.meaningcloud.com/) to to summarise content.

A user can input a URL or text and the application will extract the article's tesxt and provide a sumary.

## Context
This is a project to practice using developer build tools. The goal is to build a web tool that helps users run NLP to summarise articles found on line.

## Features
- Input a URL or plain text
- Provide a summary of the content requested


## Technologies used
- Javascript
- HTML
- SCSS
- Node.js
- Express.js
- Webpack
- Jest (for testing)
- Workbox (for service workers)
- MeaningCLoud API (for sentiment qanalysis)


## Installation

1. Clone the repository

```git clone https://github.com/Angelica137/news-article-nlp```

2. Navigate to the project directory:

```cd news-article-nlp```

3. Install depenendencies:

```npm install```


## Usage
1. Start the server:
```npm start```

2. Open a web browser and go to [localhost 3000](http://localhost:3000/)
3. Enter the URL of a news article in the input field and submit the form.
4. View the summary produced.

## Testing

To run the tests use command

```npm test```

## Deployment

To build the application for pdocution use command

```npm run build```


