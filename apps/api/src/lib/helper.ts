import axios from "axios";

export const getFigmaFile = async (fileKey : string)=>{
    const res = await axios.get(
        `https://api.figma.com/v1/files/${fileKey}`,
        {
        headers: {
            "X-Figma-Token": process.env.FIGMA_TOKEN!
        }
        }
    );

    return res.data.document;
}

export function extractFileKey(url: string ) {
  return url.split("/file/")[1]?.split("/")[0];
}
