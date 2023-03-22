import React, { useState, useEffect } from 'react';
import FormField from "@/components/FormField";
import Loader from "@/components/Loader";
import Card from "@/components/Card";

type Props = {}

const Content = (props: Props) => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  return (
    <div className='max-w-7xl mx-auto'>
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">The Community Showcase</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">Browse through a collection of imaginative and visually stunning images generated by DALL-E AI</p>
      </div>
    </div>
  )
}

export default Content