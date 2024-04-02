"use client";
import Image from "next/image";
import { observer } from "mobx-react-lite";
import { useStores } from "../../../store";

export const User = observer(() => {
  const { userStore } = useStores();
  return (
    <div className='ml-10'>
      <Image
        className='rounded-[50%] object-cover'
        src={"/noavatar.png"}
        alt=''
        width='50'
        height='50'
      />
      <div className='flex flex-col'>
        <span className='font-medium'>{userStore.userName}</span>
        <span className='text-[12px]'>Administrator</span>
      </div>
    </div>
  );
});
