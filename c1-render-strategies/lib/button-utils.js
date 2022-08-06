import { promises as fs } from 'fs';
import path from 'path';
import { load as fromYaml} from 'js-yaml';

const buttonDir = path.join(process.cwd(), "public", "buttons");

export const readButtonsFromFile = async () => {
    const buttons = (await fs.readdir(buttonDir))
      .filter((x) => x.endsWith(".yaml"))
      .map((x) => fs.readFile(path.join(buttonDir, x), "utf-8"))
      .map(async (x) => fromYaml(await x));
    
    return Promise.all(buttons);
}




