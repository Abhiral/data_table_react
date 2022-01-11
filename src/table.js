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
`;

const HeadingItem1 = styled.div`
    flex:1;
`;

const HeadingItem2 = styled.div`
    flex:2;
`;

const HeadingItem3 = styled.div`
    flex:3;
`;

const TableBody = styled.div`
    padding: 10px;
    display: flex;
    border-bottom: 1px solid #ddd;
`;

const BodyItem1 = styled.div`
    flex:1;
`;

const BodyItem2 = styled.div`
    flex:2;
`;

const BodyItem3 = styled.div`
    flex:3;
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
                        <Search style={{position:"absolute", top:"5px", right:"0px", fontSize: "16px", color:"#999", cursor:"pointer" }} />
                    </SearchContainer>
                    <AddButton>
                        <Add style={{ fontSize: "16px" }} />
                        New User
                    </AddButton>
                </TitleRight>
            </TableTitle>
            <TableHeading>
                <HeadingItem1>
                    <input type="checkbox"></input>
                </HeadingItem1>
                <HeadingItem3>Name</HeadingItem3>
                <HeadingItem2>Username</HeadingItem2>
                <HeadingItem3>Email</HeadingItem3>
                <HeadingItem3>Phone</HeadingItem3>
                <HeadingItem3>Website</HeadingItem3>
                <HeadingItem3>Address</HeadingItem3>
            </TableHeading>   
            <TableBody>
                <BodyItem1>
                    <input type="checkbox"></input>
                </BodyItem1>
                <BodyItem3>Ram Bahadur Gharti</BodyItem3>
                <BodyItem2>cltrlxaltF4</BodyItem2>
                <BodyItem3>rambg@abiral.com</BodyItem3>
                <BodyItem3>+12 3454565434</BodyItem3>
                <BodyItem3>www.abiral.com</BodyItem3>
                <BodyItem3>Carl Roth GmbH</BodyItem3>
            </TableBody>
            <TableBody>
                <BodyItem1>
                    <input type="checkbox"></input>
                </BodyItem1>
                <BodyItem3>Ram Bahadur Gharti</BodyItem3>
                <BodyItem2>cltrlxaltF4</BodyItem2>
                <BodyItem3>rambg@abiral.com</BodyItem3>
                <BodyItem3>+12 3454565434</BodyItem3>
                <BodyItem3>www.abiral.com</BodyItem3>
                <BodyItem3>Carl Roth GmbH</BodyItem3>
            </TableBody>
            <TableBody>
                <BodyItem1>
                    <input type="checkbox"></input>
                </BodyItem1>
                <BodyItem3>Ram Bahadur Gharti</BodyItem3>
                <BodyItem2>cltrlxaltF4</BodyItem2>
                <BodyItem3>rambg@abiral.com</BodyItem3>
                <BodyItem3>+12 3454565434</BodyItem3>
                <BodyItem3>www.abiral.com</BodyItem3>
                <BodyItem3>Carl Roth GmbH</BodyItem3>
            </TableBody>
            <TableBody>
                <BodyItem1>
                    <input type="checkbox"></input>
                </BodyItem1>
                <BodyItem3>Ram Bahadur Gharti</BodyItem3>
                <BodyItem2>cltrlxaltF4</BodyItem2>
                <BodyItem3>rambg@abiral.com</BodyItem3>
                <BodyItem3>+12 3454565434</BodyItem3>
                <BodyItem3>www.abiral.com</BodyItem3>
                <BodyItem3>Carl Roth GmbH</BodyItem3>
            </TableBody>
            <TableBody>
                <BodyItem1>
                    <input type="checkbox"></input>
                </BodyItem1>
                <BodyItem3>Ram Bahadur Gharti</BodyItem3>
                <BodyItem2>cltrlxaltF4</BodyItem2>
                <BodyItem3>rambg@abiral.com</BodyItem3>
                <BodyItem3>+12 3454565434</BodyItem3>
                <BodyItem3>www.abiral.com</BodyItem3>
                <BodyItem3>Carl Roth GmbH</BodyItem3>
            </TableBody>
            <TableBody>
                <BodyItem1>
                    <input type="checkbox"></input>
                </BodyItem1>
                <BodyItem3>Ram Bahadur Gharti</BodyItem3>
                <BodyItem2>cltrlxaltF4</BodyItem2>
                <BodyItem3>rambg@abiral.com</BodyItem3>
                <BodyItem3>+12 3454565434</BodyItem3>
                <BodyItem3>www.abiral.com</BodyItem3>
                <BodyItem3>Carl Roth GmbH</BodyItem3>
            </TableBody>
        </Container>
    )
}

export default Table
