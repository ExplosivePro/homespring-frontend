import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Card from 'components/card'
import Input from 'components/input'
import Divider from 'components/divider'
import { BookInfo } from 'pages/types'
import Book from './components/Book'

interface SearchResult {
    total: number,
    items: BookInfo[]
}

const Home: NextPage = () => {
    const [searchKey, setSearchKey] = useState('')
    const [searchResult, setSearchResult] = useState<SearchResult>()
    const handleSearch = (ev: React.FormEvent<HTMLInputElement>) => {
        setSearchKey(ev.currentTarget.value)
    }

    async function fetchData() {
        var url = new URL(`${process.env.NEXT_PUBLIC_HOST}/books`)
        var params = {q:"+intitle", filter:"free-ebooks", startIndex: 0, maxResults: 10} as unknown as URLSearchParams
        url.search = new URLSearchParams(params).toString();
        const res = await fetch(url.toString())
        const searchResult = await res.json()

        setSearchResult(searchResult)
    }
    
    useEffect( () => {
        fetchData()
    }, [searchKey])

    return (
        <Card className="flex flex-col h-full w-available bg-white">
            <Input className='w-full' type='search' placeholder='Start searching...' onChange={handleSearch} value={searchKey}/>
            <Divider className='border-b-zinc-200'/>
            {
                searchResult?.items.map( (item) => (
                    <Book key={item.id} item={item} />
                ))
            }
        </Card>
    )
}

export default Home