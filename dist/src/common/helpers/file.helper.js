"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileHelper = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
class FileHelper {
    static walkSyncFiles(dir, listFiles = []) {
        const files = (0, fs_1.readdirSync)(dir);
        files.forEach(function (file) {
            if ((0, fs_1.statSync)((0, path_1.join)(dir, file)).isDirectory()) {
                listFiles = FileHelper.walkSyncFiles((0, path_1.join)(dir, file), listFiles);
            }
            else {
                listFiles.push((0, path_1.join)(dir, file));
            }
        });
        return listFiles;
    }
}
exports.FileHelper = FileHelper;
//# sourceMappingURL=file.helper.js.map