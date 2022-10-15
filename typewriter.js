const sentence = "hello there from lighthouse labs";

const typewritter = function(string) {
  let delay = 0;
  for (let i = 0; i < sentence.length; i++) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, delay);
    delay += 50;
  }
  setTimeout(() => {
    process.stdout.write("\n");
  }, (sentence.length + 1) * 50);
};

typewritter(sentence);

