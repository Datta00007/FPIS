// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;


contract Funder{
    uint public numOfFunders;
    mapping(uint=>address)  private funders;
    string public msgp;
    string[] public row;
    
    function getPid() public view returns (string memory)
        {
            return msgp;
        }
    function setPid(string memory _msgp) public
    {
        msgp = _msgp;
        row.push(_msgp);
    }
    function transfer(string memory _msgp) external payable
    {
        msgp = _msgp;
        row.push(_msgp);
        funders[numOfFunders] = msg.sender;
    }

    function withdraw(uint256 withdrawAmount ) external
    {
        require(withdrawAmount <= 2000000000000000000,
        "Cannot withdraw more than 2 eth"
        );
        payable(msg.sender).transfer(withdrawAmount);
    }
}