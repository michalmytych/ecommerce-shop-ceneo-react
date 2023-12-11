import { data } from '../../data';

export default function Categories(){
    console.log(data.categories)
    return (
        <div className="bg-white pl-5 pr-5 py-5 w-[300px]">
            <div className="flex flex-row space-x-12 items-center">
                <p className="font-bold">Kategorie</p>
                <a className="text-gray-500 text-sm whitespace-nowrap" href="localhost:3000">Pozostałe kategorie</a>
            </div>
            <div className="flex flex-col space-y-2 mt-4">
                {data.categories.map((category) => {
                    return (
                        <div key={category.id} className="flex flex-row space-x-2">
                            {category.icon}
                            <a  href="localhost:3000" className='hover:text-orange-500'>{category.name}</a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}


