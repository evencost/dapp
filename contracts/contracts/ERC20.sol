pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract xDAI is ERC20 {
  constructor() ERC20("xDAI Stablecoin", "xDAI") {}

  function mint(uint256 amount) public {
    _mint(msg.sender, amount);
  }
}
