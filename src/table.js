import React from 'react'
import styled from 'styled-components'
import { Add, Search } from '@material-ui/icons';

const Container = styled.div`
    background-color: #fff;
    margin: 50px;
    padding: 20px;
`;

const TableTitle = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 5px;
`;

const TitleLeft = styled.div`
    font-size: 20px;
    font-weight: 600;
`;

const TableHeading = styled.div`
    background-color: aliceblue;
    font-weight: 600;
    padding: 10px;
    display: flex;
    flex-wrap: no-wrap;
    align-items: center;
    justify-content: space-around;
`;

const HeadingItem = styled.div`
    
`;

const TableBody = styled.div`
    padding: 5px;
    display: flex;
    flex-wrap: no-wrap;
    justify-content: space-around;
`;

const BodyItem = styled.div`
    
`;

const TitleRight = styled.div`
    display: flex;
`;

const SearchContainer = styled.div`
    border: 1px solid #ddd;
    border-radius: 5px;
    position: relative;
    
`;

const Input = styled.input`
    border: none;
    height: 93%;
    padding: 0 5px;
`;

const AddButton = styled.button`
    border: 1px solid #0d739b;
    border-radius: 5px;
    background-color: #0d739b;
    color: #fff;
    cursor: pointer;
    margin-left: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Table = () => {
    return (
        <Container>
            <TableTitle>
                <TitleLeft>
                    Users
                </TitleLeft>
                <TitleRight>
                    <SearchContainer>
                        <Input />
                        <Search />
                    </SearchContainer>
                    <AddButton>
                        <Add style={{ fontSize: "16px" }} />
                        New User
                    </AddButton>
                </TitleRight>
            </TableTitle>
            <TableHeading>
                <HeadingItem></HeadingItem>
                <HeadingItem>Name</HeadingItem>
                <HeadingItem>Username</HeadingItem>
                <HeadingItem>Email</HeadingItem>
                <HeadingItem>Phone</HeadingItem>
                <HeadingItem>Website</HeadingItem>
                <HeadingItem>Address</HeadingItem>
            </TableHeading>   
            <TableBody>
                <BodyItem></BodyItem>
                <BodyItem>Ram Bahadur Gharti</BodyItem>
                <BodyItem>cltrlxaltF4</BodyItem>
                <BodyItem>rambg@abiral.com</BodyItem>
                <BodyItem>+12 3454565434</BodyItem>
                <BodyItem>www.abiral.com</BodyItem>
                <BodyItem>Carl Roth GmbH</BodyItem>
            </TableBody>
            <TableBody>
                <BodyItem></BodyItem>
                <BodyItem>Ram Bahadur Gharti</BodyItem>
                <BodyItem>cltrlxaltF4</BodyItem>
                <BodyItem>rambg@abiral.com</BodyItem>
                <BodyItem>+12 3454565434</BodyItem>
                <BodyItem>www.abiral.com</BodyItem>
                <BodyItem>Carl Roth GmbH</BodyItem>
            </TableBody>
            <TableBody>
                <BodyItem></BodyItem>
                <BodyItem>Ram Bahadur Gharti</BodyItem>
                <BodyItem>cltrlxaltF4</BodyItem>
                <BodyItem>rambg@abiral.com</BodyItem>
                <BodyItem>+12 3454565434</BodyItem>
                <BodyItem>www.abiral.com</BodyItem>
                <BodyItem>Carl Roth GmbH</BodyItem>
            </TableBody>
            <TableBody>
                <BodyItem></BodyItem>
                <BodyItem>Ram Bahadur Gharti</BodyItem>
                <BodyItem>cltrlxaltF4</BodyItem>
                <BodyItem>rambg@abiral.com</BodyItem>
                <BodyItem>+12 3454565434</BodyItem>
                <BodyItem>www.abiral.com</BodyItem>
                <BodyItem>Carl Roth GmbH</BodyItem>
            </TableBody>
            <TableBody>
                <BodyItem></BodyItem>
                <BodyItem>Ram Bahadur Gharti</BodyItem>
                <BodyItem>cltrlxaltF4</BodyItem>
                <BodyItem>rambg@abiral.com</BodyItem>
                <BodyItem>+12 3454565434</BodyItem>
                <BodyItem>www.abiral.com</BodyItem>
                <BodyItem>Carl Roth GmbH</BodyItem>
            </TableBody>
        </Container>
    )
}

export default Table
