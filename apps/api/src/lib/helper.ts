import axios from 'axios';
import { Response } from 'express';

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  success: boolean,
  message: string,
  data?: T | null,
  error?: T | null
): Response => {
  return res.status(statusCode).json({
    success,
    message,
    data: data ?? null,
    error: error ?? null,
  });
};

export const getFigmaFile = async (fileKey: string) => {
  const res = await axios.get(
    `https://api.figma.com/v1/files/${fileKey}`,
    {
      headers: {
        'X-Figma-Token': process.env.FIGMA_TOKEN!,
      },
    }
  );

  return res.data.document;
};

export function extractFileKey(url: string) {
  return url.split('/file/')[1]?.split('/')[0];
}

export const parseToUISchema = (figmaDoc: any) => {
  return {
    type: 'Page',
    cildren: figmaDoc.children
      ?.filter((n: any) => n.type === 'FRAME')
      .map((frame: any) => ({
        type: 'Section',
        name: frame.name,
        layout:
          frame.layoutMode === 'HORIZONTAL'
            ? 'row'
            : 'column',
      })),
  };
};
