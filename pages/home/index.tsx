import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Card from 'components/card'
import Input from 'components/input'
import Divider from 'components/divider'

const Home: NextPage = () => {
    const [searchKey, setSearchKey] = useState('')
    const [data, setData] = useState()
    console.log(process.env.BACK_URL)
    const handleSearch = (ev: React.FormEvent<HTMLInputElement>) => {
        setSearchKey(ev.currentTarget.value)
    }

    async function fetchData() {
        const res = await fetch(`${process.env.BACK_URL}`)
        const data = await res.json()
        setData(data)
    }
    
    useEffect( () => {
        fetchData()
    }, [searchKey])

    return (
        <Card className="flex flex-col h-full w-available bg-white">
            <Input className='w-full' type='search' placeholder='Start searching...' onChange={handleSearch} value={searchKey}/>
            <Divider className='border-b-zinc-200'/>
        </Card>
    )
}

export default Home