import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
                <Banknote colors={props.money.banknotes === 'Dollars'? 'chartreuse': 'cadetblue'}>
                    <Name>{props.money.banknotes}</Name>
                    <Nominal>{props.money.value}</Nominal>
                </Banknote>
    );
};

type ColorProps = {
    colors: 'chartreuse' | 'cadetblue'
}

const Banknote = styled.div<ColorProps>`
    background-color: ${props => props.colors};
    width: 400px;
    height: 200px;
    margin: 10px;
`
const BanknoteBlue = styled.div`
    background-color: cadetblue;
    width: 400px;
    height: 200px;
    margin: 10px;
`
const Name = styled.div`
    justify-content: center;
    font-size: 30px;

`
const Nominal = styled.div`
    font-size: 50px;
    margin-top: 30px;
`