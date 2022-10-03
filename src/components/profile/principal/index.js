import React from 'react';
import Navbar from '../../../components/common/Navbar';
import { useRouter } from 'next/router';
import Profile from '../../../components/common/Profile';


export default function Principal() {
  const router = useRouter();
  const data = router.query;

  console.log(data)
  return (
    <>
     <Profile data={data} />

    </>
  )
}
