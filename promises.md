# Promises

* ECMA def.: A Promise is an object that is used as a placeholder for the eventual results of a deferred (and possibly asynchronous) computation.
* Represents a value which may be available *now*, *in future*, or *never*.
* Say you send a HTTPrequest to a server, and the server takes 5 seconds to process the request. You're going to get back your data, or some kind of error message telling you why the server failed to fulfil the request.
* Promises have 3 states:
    * **Pending** - initial state, not fulfilled or rejected
    * **Fulfilled** - operation completed successfully. Use `.then()` to process.
    * **Rejected** - o peration failed. Use `.catch()` to process.

### Example

```
const myPromise = new Promise((resolve, reject) => {
    if (Math.random() * 100 <= 90) {
        resolve("Hello, Promises!");
    }
    reject(new Error('In 10% of the cases, I fail miserably.'))
    })

// Two functions
const onResolved = (resolvedValue) => console.log(resolvedValue);
const onRejected = (error) => console.log(error);

myPromise.then(onResolved, onRejected);
```
