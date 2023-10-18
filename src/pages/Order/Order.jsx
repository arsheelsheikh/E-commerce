import React, { useContext } from 'react'
import myContext from '../../context/data/myContext'
import Layout from '../../components/layout/Layout'


const Order = () => {
  const context = useContext(myContext);
  const {name, rollno} = context;
  return (
    <Layout>
      Order
      <h1>Name: {name}</h1>
      <h1>Roll No. : {rollno}</h1>
    </Layout>
  )
}

export default Order