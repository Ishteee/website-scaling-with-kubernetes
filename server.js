const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, "public")));

// Function to find prime numbers
function findPrimes(n) {
    let primes = [];
    let startTime = Date.now();
    for (let num = 2; num <= n; num++) {
        let isPrime = true;
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(num);
        }
    }
    let endTime = Date.now();
    let timeTaken = endTime - startTime;
    return { primes, timeTaken };
}

// Route to serve the homepage
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "index.html"));
});

// Route to handle form submission
app.post("/find", (req, res) => {
    const number = parseInt(req.body.number);
    if (isNaN(number) || number < 2) {
        return res.send("<h2>Please enter a valid number greater than 1.</h2><a href='/'>Go Back</a>");
    }
    const { primes, timeTaken } = findPrimes(number);
    res.send(`<h2>Prime Numbers up to ${number}:</h2><p>${primes.join(", ")}</p><p>Time taken: ${timeTaken} ms</p><a href='/'>Go Back</a>`);
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log('Server is running on port 3000');
  });