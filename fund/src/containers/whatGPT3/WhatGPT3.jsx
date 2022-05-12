import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is FPIS" text=" Fake Product Identification System : Fake product incidents have risen in the last few years. It is necessary to have a system for customers or users to check all the details of the product so that users can decide that the product is real or fake. So, the solution involves a simple QR code-based identification that can help the end-user or customers to scan and identify the genuineness of the product by using a Smartphone. manufacturer give product details generate QR code of abstract data of product. Product details would be saved in blockchain. He can track the product and also safety ensure of data of product. Cosumer scans the product and mark it as sold." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <a href="csignup" target="_signup"><p>Register Now</p></a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Encryption" text="The QR code or Quick Response system became popular outside the industry due to its fast readability and greater storage capacity. Applications include product tracking, item identification, time tracking, document management, and general marketing." />
      <Feature title="Blockchain" text="A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format. Blockchains are best known for their crucial role in cryptocurrency systems" />
      <Feature title="Ethereum" text="Ethereum is the most popular and widely used blockchain development platform in the world. In fact, it is the very first blockchain development platform. Built in 2015, it introduced a revolutionary feature known as the smart contract." />
      <Feature title="Smart Contracts" text="A smart contract is a program that contains functions and states. Each smart contract runs on a specific address in the Ethereum blockchain. Because smart contracts are an autonomous type of account on Ethereum, they can send transactions and also have balance." />
    </div>
  </div>
);

export default WhatGPT3;
