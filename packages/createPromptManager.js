import warning from "warning";

const createPromptManager = (getUserConfirmation) => {
  let prompt = null;
  const confirm = () => {
    let resolve,
        reject,
        promise = new Promise((res, rej) => {
          resolve = res;
          reject = rej;
        });
    if (typeof getUserConfirmation === "function") {
      getUserConfirmation(prompt, resolve, reject);
    } else {
      warning(
        false,
        "needs a getUserConfirmation function in order to use a prompt message"
      );
      resolve();
    }
    return promise;
  };
  const setPrompt = nextPrompt => {
    prompt = nextPrompt;
    return () => {
      if (prompt === nextPrompt) prompt = null;
    };
  };

  return {
    setPrompt,
    confirm
  };
};

export default createPromptManager;