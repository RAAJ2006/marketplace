// utils/ipfs.js
import { create } from "ipfs-http-client";

const ipfs = create({ url: "https://ipfs.infura.io:5001/api/v0" });

export async function uploadToIPFS(data) {
    const result = await ipfs.add(data);
    return result.path; // Returns the CID
}

export async function fetchFromIPFS(cid) {
    const chunks = [];
    for await (const chunk of ipfs.cat(cid)) {
        chunks.push(chunk);
    }
    return Buffer.concat(chunks).toString();
}
