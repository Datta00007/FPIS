// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract Funder{
    uint public numOfFunders;
    mapping(uint=>address)  private funders;
    string public msgp;
    receive() external payable{}

    function transfer(string memory _msgp) external payable
    {
        funders[numOfFunders] = msg.sender;
        msgp = _msgp;

    }

    function withdraw(uint256 withdrawAmount ) external
    {
        require(withdrawAmount <= 2000000000000000000,
        "Cannot withdraw more than 2 eth"
        );
        payable(msg.sender).transfer(withdrawAmount);
    }
}