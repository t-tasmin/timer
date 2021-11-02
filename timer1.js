const args = process.argv;
const A = args.slice(2).sort();


for (let i = 0; i < A.length; i++) {
  if (Number(A[i]) > 0) {
    setTimeout(() =>   process.stdout.write('\x07'), 1000 * Number(A[i]));
  }
}
