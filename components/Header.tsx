import React from 'react';
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.svg";

type Props = {}

const Header = (props: Props) => {
  return (
    <div className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
      <Link href="/">
        <Image
          className="w-28 object-contain"
          src={logo}
          alt="logo"
          width={50}
          height={50}
          placeholder="blur"
          blurDataURL="../public/vercel.svg"
        />
      </Link>
      <Link href="/CreatePost" className="font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md">Create</Link>
    </div>
  )
}

export default Header