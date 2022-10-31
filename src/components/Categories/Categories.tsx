import * as React from 'react';
import { Link } from 'react-router-dom';
import { plantCategories } from '../../categories';

interface Props {

}

const Categories: React.FC<Props> = ({ }) => {
    return (
        <div className="ShopPage__CategoryWrapper uppercase flex flex-col gap-3">
            <span className="text-3xl font-semibold">CATEGORIES</span>
            <ol className="flex flex-col text-xl font-light">
                {plantCategories.map((category) => (
                    <Link to={`/${category.id}`}><li className="border-b-2 py-3 hover:font-normal hover:text-emerald-800 ease-in duration-75 hover:bg-teal-200 hover:bg-opacity-10">{category.name}</li></Link>
                ))}
            </ol>

        </div>
    )
}

export default Categories