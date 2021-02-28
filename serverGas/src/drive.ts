class driveEdit {
  private rootFolderId;

  constructor(rootFolderId: string) {
    this.rootFolderId = rootFolderId;
  }

  public folderCopy(folderId?: string) {
    if (folderId != undefined) {
      const rootFolder = DriveApp.getFolderById(folderId);
      const files = rootFolder.getFiles();
      while (files.hasNext()) {
        Logger.log(files.next().getId());
      }
      const folders = rootFolder.getFolders();
      while (folders.hasNext()) {
        const id = folders.next().getId();
        this.folderCopy(id);
        //file edit
      }
    } else {
      const rootFolder = DriveApp.getFolderById(this.rootFolderId);
      const files = rootFolder.getFiles();
      while (files.hasNext()) {
        Logger.log(files.next().getId());
      }
      const folders = rootFolder.getFolders();
      while (folders.hasNext()) {
        const id = folders.next().getId();
        this.folderCopy(id);
        //file edit
      }
    }
  }
}
