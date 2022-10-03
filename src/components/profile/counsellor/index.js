import React from 'react';
import { useRouter } from 'next/router';
import Navbar from '../../../components/common/Navbar';
import Profile from '../../../components/common/Profile.js';


export default function Counsellor() {
  const router = useRouter();
  const data = router.query;

  console.log(data)
  return (
    <>
      <Profile data={data} />
    
    </>
  )
}
