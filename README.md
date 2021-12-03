# gulp-edit-file

> Edit file content in gulp pipe method.
> 一个在gulp的管道方法中修改文件内容的插件。

## Install
```
npm install gulp-edit-file -D
```

## Gulp Demo
```js
const gulp = require('gulp');
const editFile = require('gulp-edit-file');

gulp.task('edit', () => {
  return gulp
    .src('src/index.js')
    .pipe(editFile((content, fileInfo) => {
      console.log(fileInfo);
      // Edit file content here, eg:
      const newContent = `/*!\n * Hello there!\n */${content}`;
      return newContent;
    }))
    .pipe(gulp.dest('dist'));
});
```

## Result
src/index.js
```js
console.log('index.js');
```
To ↓ ↓ ↓ ↓ ↓ ↓

dist/index.js
```js
/*!
 * Hello there!
 */
console.log('index.js');
```

## Interface
```ts
interface FileInfo {
  dirName: string,
  dirPath: string,
  fileBase: string,
  fileExt: string,
  fileName: string,
  filePath: string,
}
declare function editFile(handler: (content: string, fileInfo: FileInfo) => string): NodeJS.ReadWriteStream;
export = editFile;
```
