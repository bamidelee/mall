

interface Props{
    name: string,
    activeTab: string,
    setActiveTab: (tab:string) => void
}


export default function Tab({name, activeTab, setActiveTab}: Props){

    return (
        <button onClick={() => setActiveTab(name)} className={`${activeTab === name? 'border-primary-purple text-primary-purple rounded-2xl shadow-[0_3px_20px_-3px_#632d8e] shadow-primary-purple': 'border-secondary-grey rounded-2xl'} border-2  px-4 transition-all duration-150 hover:text-primary-purple hover:border-primary-purple text-[.7rem] lg:text-[1rem]`}>
            {name}
        </button>
    )
}