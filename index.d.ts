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
