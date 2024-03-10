import Header from '@/components/shared/Header'
import React from 'react'
import { transformationTypes } from '@/constants'
import TransFormationForm from '@/components/shared/TransFormationForm';
import { auth } from '@clerk/nextjs';
import { SearchParamProps, TransformationTypeKey } from '@/types';
import { getUserById } from '@/lib/actions/user.actions';

const AddTransFormationTypePage = async({params:{type}}:SearchParamProps) => {
  const {userId} = auth();
  const transformation = transformationTypes[type];
  const user = await getUserById(userId);
  return (
    <div>

      <Header 
        title={transformation.title}
        subtitle={transformation.subTitle}
      />
      <TransFormationForm
        action="Add"
        userId={user._id}
        type={transformation.type as TransformationTypeKey}
        creditBalance={user.creditBalance}
      />
    </div>
  )
}

export default AddTransFormationTypePage
