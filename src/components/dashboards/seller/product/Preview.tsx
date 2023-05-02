/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';
import {
  useDropzone,
  DropzoneRootProps,
  DropzoneInputProps,
} from 'react-dropzone';
import { FcAddImage } from 'react-icons/fc';

interface FilePreview extends File {
  preview: string;
}

export function Previews(): JSX.Element {
  const [files, setFiles] = useState<FilePreview[]>([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) => Object.assign(file, {
          preview: URL.createObjectURL(file),
        })),
      );
    },
  });

  const thumbs = files.map((file) => (
    <div
      className="inline-flex p-4 mb-8 mr-8 border border-white rounded w-52 h-52"
      key={file.name}
    >
      <div className="flex min-w-0 overflow-hidden">
        <img
          src={file.preview}
          className="block object-cover w-full h-auto"
          alt={file.name}
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));

  useEffect(
    () => () => files.forEach((file) => URL.revokeObjectURL(file.preview)),
    [files],
  );

  const { ...rootProps }: DropzoneRootProps = getRootProps();
  const inputProps: DropzoneInputProps = getInputProps();

  return (
    <section className="flex flex-col items-center justify-center w-full p-5 border border-dashed rounded border-cyan-400">
      <div
        {...rootProps}
        className="flex items-center justify-center cursor-pointer dropzone"
      >
        <FcAddImage size={100} />
        <input {...inputProps} />
        <p>Drag and drop some files here, or click to select files</p>
      </div>
      <aside className="flex flex-wrap mt-16">{thumbs}</aside>
    </section>
  );
}
