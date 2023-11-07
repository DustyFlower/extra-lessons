import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {
    const banknotesFilter = props.money.banknotes === 'Dollars' ? 'chartreuse' : '#61dafb'
    return (
            <Banknote color={banknotesFilter}>
            <Name>
                {props.money.banknotes}
                </Name>
                <Nominal>
                    {props.money.value}
                </Nominal>
            </Banknote>
    );
};

type PropsType = {
    color: string
}

const Banknote = styled.div<PropsType>`
  background-color: ${props => props.color};
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Name = styled.div`
display: flex;
  justify-content: center;
  font-size: 30px;
`

const Nominal = styled.div`
display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 90px;
`

//-------------------------------------------------------------------------------
/*
import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentBankomatPropsType = {
    money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

    return (
        props.money.banknotes === 'Dollars'
            ? <BanknoteGreen>
                <Name>
                    {props.money.banknotes}
                </Name>
                <Nominal>
                    {props.money.value}
                </Nominal>
            </BanknoteGreen>
            : <BanknoteBlue>
                <Name>
                    {props.money.banknotes}
                </Name>
                <Nominal>
                    {props.money.value}
                </Nominal>
            </BanknoteBlue>
    );
};

const BanknoteGreen = styled.div`
  background-color: chartreuse;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const BanknoteBlue = styled.div`
  background-color: #61dafb;
  width: 400px;
  height: 200px;
  margin: 10px;
`

const Name = styled.div`
display: flex;
  justify-content: center;
  font-size: 30px;
`

const Nominal = styled.div`
display: flex;
  justify-content: center;
  margin-top: 30px;
  font-size: 90px;
`*/
