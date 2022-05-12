import React from 'react';
// import possibilityImage from '../../assets/possibility.png';
import eti from '../../assets/smart-contract-3.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={eti} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      
      <h1 className="gradient__text">Ethereum Smart Contracts</h1>
      <p>A "smart contract" is simply a program that runs on the Ethereum blockchain. It's a collection of code (its functions) and data (its state) that resides at a specific address on the Ethereum blockchain.Smart contracts are a type of Ethereum account. This means they have a balance and they can send transactions over the network. However they're not controlled by a user, instead they are deployed to the network and run as programmed. User accounts can then interact with a smart contract by submitting transactions that execute a function defined on the smart contract. Smart contracts can define rules, like a regular contract, and automatically enforce them via the code. Smart contracts cannot be deleted by default, and interactions with them are irreversible</p>
    </div>
  </div>
);

export default Possibility;
