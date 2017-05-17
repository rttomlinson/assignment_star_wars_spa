import React from 'react';
import Button from './elements/Button';

const Pagination = ({ previousUrl, nextUrl }) => {
    return (
        <div>
            <Button onClick={previousUrl}>
                Previous
            </Button>
            <Button onClick={nextUrl}>
                Next
            </Button>
        </div>
    );
};


export default Pagination;