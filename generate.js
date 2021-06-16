const fs = require('fs');

fs.readdir('src/assets/characters/tm_lrr', (err, files) => {
  const orderedFile = files.sort((a, b) => {
    const ax = a.replace('.png', '').replace('f', '');
    const bx = b.replace('.png', '').replace('f', '');

    if (Number(ax) > Number(bx)) {
      return 1;
    } else {
      return -1;
    }
  });

  orderedFile.forEach(file => {
    console.log(file);
  });
});
