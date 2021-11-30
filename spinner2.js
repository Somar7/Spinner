let symbols = "|/-\|/-\| \n";
let delay = 0;
let increment = 500;

for(const char of symbols) {
  setTimeout(() => {
    process.stdout.write("\r" + char);
  }, delay);
  delay += increment;
};