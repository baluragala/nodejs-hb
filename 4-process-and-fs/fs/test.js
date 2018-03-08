promises = []
// Start all tasks
for (let file of files) {
    promises.push(fs.readFileAysnc()
}
// wait for all tasks
for (let promise of promises) {
    content = await promise;
    result.push(content);
}
