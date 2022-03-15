import Select from "components/select"

export default function SideBar() {
    return (
        <div className="flex flex-col pl-5 pr-11 w-80">
            <div className="text-base text-zinc-900 font-bold">Filter your results</div>
            <Select className="mt-3">
                <option value="">All books</option>
            </Select>
        </div>
    )
}