const major = parseInt(process.versions.node.split('.')[0], 10);

if (major < 20) {
  console.error(
    `\nThis Package Requires Node.js 20+ To Run Reliably\n` +
    `   You Are Using Node.js ${process.versions.node}.\n` +
    `   Please Upgrade To Node.js 20+ To Proceed\n`
  );
  process.exit(1);
}
