import { FiltersSidebar } from '@/components/FiltersSidebar'
import Navbar from '@/components/Navbar'
import { ShopHeader } from '@/components/ShopHeader'
import React from 'react'

const ShopPage = () => {
  return (
    <>
    <Navbar/>
    <main className='container mx-auto px-4 py-8'>
        <ShopHeader/>
        <FiltersSidebar/>
    </main>
    </>
    
  )
}

export default ShopPage