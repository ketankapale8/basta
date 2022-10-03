import React from 'react';
import { useRouter } from 'next/router';
import Profile from '../../../components/common/Profile';

export default function Parent() {
  const router = useRouter();
  const data = router.query;

  return (
    <Profile data={data} />
  )
}
