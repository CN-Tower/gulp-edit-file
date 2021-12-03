const gutil = require('gulp-util');
const through = require('through2');

const PluginError = gutil.PluginError;

/**
 * 编辑文件的自定义gulp插件
 * @param {*} write 
 * @returns 
 */
const editFile = editHandler => through.obj(function(file, enc, cb) {
  if (file.isNull()) {
    this.push(file);
    return cb();
  }
  if (file.isStream()) {
    this.emit('error', new PluginError('gulp-comment', 'Streaming not supported'));
    return cb();
  }
  const newContent = editHandler(file.contents.toString(), file.basename);
  file.contents = Buffer.from(newContent);
  this.push(file);
  cb();
});
module.exports = editFile;
