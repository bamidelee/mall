

import Tab from "./tabs";

interface Props{
    tabs: string[],
    activeTab: string,
    setActiveTab: (tab:string) => void
}

export default function TabsArray({tabs, activeTab, setActiveTab}: Props){

    return(
        <div className="gap-2 flex lg:gap-8 items-center">
            {tabs.map((tab, id) => <div key={id}><Tab name={tab} activeTab={activeTab} setActiveTab= {setActiveTab}/></div>)}
        </div>
    )
}