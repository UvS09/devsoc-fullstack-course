**Explanation:**

**SYNCHRONOUS FILE READ**

1. **console.log('1. Starting sync read...')**
This line runs immediately — it’s just a print statement.

2. **fs.readFileSync('myfile.txt', 'utf8')**
The Sync in the name means synchronous.
Node pauses the entire program here until this line finishes.
It tries to open and read myfile.txt.
If the file exists → returns its contents.
If not → throws an error.

3. **try...catch**
We wrap it in a try-catch to handle the possible error gracefully.
Without it, the program would crash.

4. **If file is missing:**
The catch block prints:

5. **console.log('3. Done reading file')**
This runs only after the read (or error handling) is complete.
So the output order is:
    1. Starting sync read...
    2. Error reading file: ...
    3. Done reading file

👉 The key point:
Asynchronous = non-blocking.
The code continues running while the file operation happens in the background.

**ASYNCHRONOUS FILE READ**

1. **console.log('1. Starting async read...')**
This line runs immediately — it just prints the start message before any file reading begins.

2. **fs.readFile('myfile.txt', 'utf8', (err, data) => { ... })**
The readFile function starts reading the file asynchronously (in the background).
The program does not wait for the file to finish reading.
Instead, it registers the callback function (the (err, data) => { ... } part) that will run later when the operation completes.
If the file exists → the callback will receive its contents in data.
If the file doesn’t exist → the callback will receive an error object in err.

3. **console.log('3. Done starting read operation')**
This line runs immediately after fs.readFile is called.
It shows that the program does not block — Node continues executing the next line even while the file is being read in the background.
When file reading finishes:
Node.js triggers the callback function (err, data) => { ... }.
Inside this callback:
If there was an error (like file not found), it prints
    Error reading file: ENOENT: no such file or directory, open 'myfile.txt'
If successful, it prints the file’s contents:
    File contents: (whatever is inside)

4. **Order of output (if file is missing):**

    1. Starting async read...
    3. Done starting read operation
    2. Error reading file: ENOENT: no such file or directory, open 'myfile.txt'!