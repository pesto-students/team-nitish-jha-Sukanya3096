const STATE = {
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

class CustomPromise {
  #state = STATE.PENDING;
  #value = null;
  #fulfilledCallbacks = [];
  #rejectedCallbacks = [];
  constructor(executor) {
    try {
      executor(
        (value) => this.#resolve(value),
        (value) => this.#reject(value)
      );
    } catch (error) {
      this.#reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new CustomPromise((resolve, reject) => {
      const fulfilledCallback = () => {
        if (!onFulfilled) {
          return resolve(this.#value);
        }
        queueMicrotask(() => {
          try {
            const value = onFulfilled(this.#value);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      };

      const rejectCallback = () => {
        if (!onRejected) {
          return reject(this.#value);
        }
        queueMicrotask(() => {
          try {
            const value = onRejected(this.#value);
            resolve(value);
          } catch (error) {
            reject(error);
          }
        });
      };

      switch (this.#state) {
        case STATE.PENDING:
          this.#fulfilledCallbacks.push(fulfilledCallback);
          this.#rejectedCallbacks.push(rejectCallback);
          break;
        case STATE.FULFILLED:
          fulfilledCallback();
          break;
        case STATE.REJECTED:
          rejectCallback();
          break;
        default:
          throw new Error("Unexpected promise state");
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  #resolve(value) {
    this.#value = value;
    this.#state = STATE.FULFILLED;
    this.#fulfilledCallbacks.forEach((callback) => callback());
  }

  #reject(reason) {
    this.#value = reason;
    this.#state = STATE.REJECTED;
    this.#rejectedCallbacks.forEach((callback) => callback());
  }
}

const myPromise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // Output: Success!
  })
  .catch((error) => {
    console.error(error);
  });
