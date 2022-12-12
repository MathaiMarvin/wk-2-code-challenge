# Week 2 Code Challenge

# Description

The task entailed getting data from JSON server and through manipulation of the DOM being able to display the data on a webpage. One was tasked with displaying a list of animal names by making a GET request. In addition there was need to display the details of the animals one at a time depending on the animal chosen.

# Getting Started
In order to be able to use this particular repository one needs to have the following:
1. A computer that runs either on:  (Windows 7+, Linux, Mac OS).
2. A little bit of patience.

## Installation
To be able to use this repository on your machine one needs to:
- Open a terminal on your computer
- Clone the repo by using the following:

        git clone git@github.com:MathaiMarvin/wk-2-code-challenge.git
- Change directory to the repository folder

        cd wk-2-code-challenge
- Open in code editor: Visual Studio Code:

        code .
- Ensure that JSON server installed in your machine

        npm install -g json-server

# Running the application
- Start the JSON server:

        json-server --watch db.json

- Open html on browser to display the webpage using liveserver
- The web application has a search by id bar to be able to call the animal based on id and display its attribute.

# MIT License

Copyright (c) 2022 MathaiMarvin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
