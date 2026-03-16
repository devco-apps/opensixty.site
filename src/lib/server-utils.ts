import fs from "fs";
import path from "path";

/**
 * Reads a directory and returns a list of filenames that start with a given prefix.
 * This function is intended for server-side use only.
 *
 * @param directoryPath - The path to the directory to read, relative to the `public` folder.
 * @param filePrefix - The prefix to filter files by.
 * @returns An array of filenames.
 */
export function getFilesByPrefix(
  directoryPath: string,
  filePrefix: string,
): string[] {
  const absoluteDirectoryPath = path.join(
    process.cwd(),
    "public",
    directoryPath,
  );

  try {
    const allFiles = fs.readdirSync(absoluteDirectoryPath);
    const filteredFiles = allFiles.filter((file) =>
      file.startsWith(filePrefix),
    );
    return filteredFiles;
  } catch (error) {
    console.error(`Error reading directory ${absoluteDirectoryPath}:`, error);
    return [];
  }
}
