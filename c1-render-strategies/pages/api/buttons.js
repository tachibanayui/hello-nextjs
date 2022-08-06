import { readButtonsFromFile } from "../../lib/button-utils";

export default async function handler(req, res) {
    await new Promise((s, e) => {
        setTimeout(async () =>
            s(res.status(200).json(await readButtonsFromFile())), 5000);
    });
}
