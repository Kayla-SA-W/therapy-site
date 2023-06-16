import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'gatsby';
import RightArrow from '../images/arrow-right.svg';

const Goto = styled(Link)`
    text-decoration: none;
    color: black;
    margin-right: 5px;
    font-weight: bold;
`

export const ReadMore = ({url}: {url: string}) => (
    <div>
        <Goto to={url}>Read More</Goto>
        <img src={RightArrow} style={{height: '12px'}} />
    </div>
)
    
