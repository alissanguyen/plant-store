import * as React from 'react';
import { useParams } from 'react-router-dom';

interface Props {

}

const CategoryPage: React.FC<Props> = ({ }) => {
    const { category } = useParams();

    return (
        <div>Hi</div>
    )
}

export default CategoryPage