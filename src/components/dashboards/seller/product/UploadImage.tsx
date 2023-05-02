import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { Button } from '../../../shared';
import { storage } from '../../../../services';
import { Previews } from './Preview';

type UploadImageProps = {
  setImgUrl: Dispatch<SetStateAction<string>>;
  imgUrl: string;
  setImgSrc: (value: string) => void;
};
export function UploadImage({
  setImgUrl,
  imgUrl,
  setImgSrc,
}: UploadImageProps) {
  const [progressPercent, setProgressPercent] = useState(0);

  const handleImageUpload = (e: any) => {
    e.preventDefault();
    const file = e.target[0]?.files[0];

    if (!file) return;

    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
        );
        setProgressPercent(progress);
      },
      (error) => {
        // TODO: use alert component
        alert(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImgUrl(downloadURL);
          setImgSrc(downloadURL);
        });
      },
    );
  };
  return (
    <div className="grid m-5">
      <form
        onSubmit={handleImageUpload}
        className="grid items-center grid-cols-1 gap-2 sm:grid-cols-2"
      >
        <Previews />
        <div className="m-4">
          <Button
            isSubmit
            colorScheme="btn-secondary-outline"
            label="Upload Image"
          />
        </div>
      </form>
      {!imgUrl && (
        <div className="w-full my-2">
          <div className="mb-1 text-base font-medium text-indigo-700 dark:text-indigo-500">
            {progressPercent}%
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div
              className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      )}
      {imgUrl && (
        <h1 className="font-bold text-2xl my-2 !text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-lime-500 to-green-600">
          Uploaded Successfully 🐒
        </h1>
      )}
    </div>
  );
}
