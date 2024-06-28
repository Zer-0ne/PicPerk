import { View, Text } from 'react-native'
import React from 'react'
import CardContainer from '@/components/CardContainer'

const education = () => {
  return (
    <CardContainer
        Action='query'
        Query='Educations'
    />
  )
}

export default education