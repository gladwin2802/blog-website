# Blog Website

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)
- [Contributors](#contributors)
- [License](#license)

## Overview
This project is a simple blog website built using Node.js, Express, MongoDB, and EJS. It allows users to create, search, edit, and delete articles with a WYSIWYG markdown editor. The project structure includes server-side scripts, models, routes, views, and public assets for styling and scripts.

## Features
- Create, search, edit, and delete articles
- WYSIWYG markdown editor for article content
- Dynamic rendering of articles with sanitized HTML
- MongoDB for data storage

## Project Structure
<pre>
  Blog_Website/
    ┣ models/
      ┗ article.js
    ┣ public/
      ┣ css/
        ┣ form.css
        ┣ index.css
        ┗ show.css
      ┗ script/
        ┣ autoResizeTextarea.js
        ┣ scrollToTop.js
        ┗ search.js
    ┣ routes/
      ┗ article.js
    ┣ views/
      ┗ articles/
        ┣ edit.ejs
        ┣ form.ejs
        ┣ index.ejs
        ┣ new.ejs
        ┗ show.ejs
    ┣ .gitignore
    ┣ package-lock.json
    ┣ package.json
    ┗ server.js
</pre>

## Getting Started
1. Install dependencies:

   ```bash
   npm install
2. Start the server
   ```bash
   npm start
3. Open the application in your browser
   ```bash
   http://localhost:3000

## Dependencies
- Express: Web application framework
- Mongoose: MongoDB object modeling for Node.js
- EJS: Embedded JavaScript templating
- Marked: Markdown parser
- Method-Override: Middleware for handling HTTP methods
- DOMPurify: HTML sanitizer
- Slugify: URL-friendly string converter
- Nodemon: Utility for automatically restarting the server

## License
This project does not currently have a specific open-source license. All rights are reserved.
