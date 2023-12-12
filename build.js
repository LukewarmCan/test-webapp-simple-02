//script to create directory, read file, modidy content, and then write content to new file
const mkdirp = require('mkdirp'); //use mkdir module
const fs = require('fs');// file system functionaliry 

//create repo, handle errors
mkdirp('./public',  (err) => {
  if (err) {
    console.error(err);
    throw (error)
  }
  //in callback func: read indexhtml content, replace Anon w uname or nobody 
  let content = fs.readFileSync('web/index.html').toString();
  content = content.replace('Anonymous', process.env.USERNAME || 'Nobody')
// write modified content to new file
  fs.writeFileSync('public/index.html', content);

})

