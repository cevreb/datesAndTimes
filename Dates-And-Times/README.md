# Kenzie Academy Challenge: Dates and Times

Follow the instructions provided on `kenzie.instructure` for this challenge. The `script.js` file is a placeholder. Feel free to rename it or add additional files to the project.

Customize this README.md however you want to turn it into documentation for your project (including deleting these opening paragraphs). The only required section is **Reflection** (and the **Project Plan** if you complete the Advanced Level), but if you used a unit testing framework, also fill in the **Running the Unit Tests** section. Be sure to use proper Markdown syntax in this file (here's a [cheatsheet PDF](https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf) of the basic syntax).

## Running the Unit Tests (Basic Level)

_(Instructions for how to install the unit testing framework and run the unit tests.)_

## Project Plan (Intermediate Level)

_(Put your project plan here. It could be pseudocode, an outline-style development plan, etc. But whatever form you choose, it should be detailed enough that another developer could feasibly use it to implement your solution.)_

# Pseudocode for Stopwatch functionality:

# Setting the global variables:
stopwatchTimer
isStopwatchRunning = false
stopwatchStartTime
stopwatchElapsedTime = 0

# Function to start the stopwatch:
function start():
    if isStopwatchRunning not running:
        stopwatchStartTime = current time - stopwatchElapsedTime
        stopwatchTimer = set interval to call updateStopwatchDisplay every 10 milliseconds
        isStopwatchRunning = true

# Function to stop the stopwatch:
function stop():
    if isStopwatchRunning:
        clear interval for stopwatchTimer
        isStopwatchRunning = false

# Function to reset the stopwatch:
function reset():
    clear interval for stopwatchTimer
    isStopwatchRunning = false
    stopwatchElapsedTime = 0
    update time display to "00:00.000"

# Function to update the stopwatch display:
function updateStopwatchDisplay():
    current time = get current time
    stopwatchElapsedTime = current time - stopwatchStartTime

    minutes = floor(stopwatchElapsedTime / (60 * 1000))
    seconds = floor((stopwatchElapsedTime % (60 * 1000)) / 1000)
    milliseconds = stopwatchElapsedTime % 1000

    update time display to formatted string (pad(minutes, 2) + ":" + pad(seconds, 2) + "." + pad(milliseconds, 3))

# Function to pad a number with zeros to a specified length:
function pad(number, length):
    convert number to string
    while length - length of string is greater than 0:
        add "0" to the beginning of the string

    return the padded string


## Reflection

### Basic Level

For a software developer, what are the benefits of good unit tests? Are there any drawbacks to writing unit tests?

I personally don't believe that there are any drawbacks to writing good unit tests! While they can be time consuming, they help to ensure that each of your functions are working as they should. Without my unit tests, I would not have caught that 3 of my functions did not work properly when tested. If I were using these functions later on in a complete application, they could have thrown everything off. By testing beforehand, I can ensure that I will not have any issues later on down the road. 

### Intermediate Level

What different approaches or techniques did you consider when planning your implementation? What were the advantages and disadvantages of those alternatives?

_(Put your reflection answer here.)_



## RESOURCES: 

Button styling: https://getcssscan.com/css-buttons-examples

Special font: https://fonts.google.com/specimen/Rubik+Doodle+Shadow

Using pad: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
