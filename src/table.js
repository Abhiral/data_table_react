import React from 'react'
import styled from 'styled-components'
import { Add, Search } from '@material-ui/icons';

const Container = styled.div`
    background-color: #fff;
    padding: 20px;
`;

const tableTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
`;

const tableHeading = styled.div`
    background-color: #ddd;
    text-align: center;    
    font-weight: 600;
    padding: 5px;
`;

const tableBody = styled.div`
    padding: 5px;
`;

const titleRight = styled.div`
    display: flex;
`;

const searchContainer = styled.div`
    border: 1px solid #ddd;
    position: relative;
    padding: 3px 8px;
`;

const Input = styled.input`
    border: none;
`;

const addButton = styled.button`
    background-color: blue;
    color: #fff;
`;

const table = () => {
    return (
        <Container>
            <tableTitle>
                <titleLeft>
                    Users
                </titleLeft>
                <titleRight>
                    <searchContainer>
                        <Input />
                        <Search />
                    </searchContainer>
                    <addButton>
                        <Add />
                        New User
                    </addButton>
                </titleRight>
            </tableTitle>
            <tableHeading>
            
            </tableHeading>   
            <tableBody>

            </tableBody>
        </Container>
    )
}

export default table
