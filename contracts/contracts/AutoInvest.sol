pragma solidity 0.8.19;

import "@uniswap/v3-periphery/contracts/libraries/TransferHelper.sol";
import "@uniswap/v3-periphery/contracts/interfaces/ISwapRouter.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract AutoInvest {
  address public constant DAI = 0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb;
  address public constant WETH9 = 0x4200000000000000000000000000000000000006;
  address public constant WBTC = 0x68f180fcCe6836688e9084f035309E29Bf0A2095;

  ISwapRouter public immutable swapRouter;

  event NewPlan(string indexed id);

  struct Plan {
    string id;
    address user;
    bool status;
    string crypto;
    uint256 amount;
    uint256 total;
    string cycle;
  }

  string[] public planIds;
  mapping(string => Plan) private plans;
  mapping(string => uint256) private exe;

  constructor() {
    swapRouter = ISwapRouter(0xE592427A0AEce92De3Edee1F18E0157C05861564);
  }

  function createPlan(
    string memory _id,
    string memory _crypto,
    uint256 _amount,
    uint256 _total,
    string memory _cycle
  ) public returns (bool) {
    Plan memory plan = Plan(
      _id,
      msg.sender,
      true,
      _crypto,
      _amount,
      _total,
      _cycle
    );
    plans[_id] = plan;
    planIds.push(_id);
    emit NewPlan(_id);
    return true;
  }

  /**
   * this function can be executed by any one - msg.sender pay gas to:
   * iterate via all plans and execute on next logic:
   *
   * 1. only if plan is active check if plan exe[id] + plan.cycle < now
   * 2. if true - execute plan
   * 3. update plan exe[id].timestamp = now
   *
   * both exe[id] and plan.cycle is unix timestamp
   */
  function executePlans() public {
    for (uint i = 0; i < planIds.length; i++) {
      Plan memory plan = plans[planIds[i]];

      // Check if the plan meets the execution criteria
      if (plan.status && plan.amount > 0) {
        TransferHelper.safeTransferFrom(
          DAI,
          plan.user,
          address(this),
          plan.amount
        );

        TransferHelper.safeApprove(DAI, address(swapRouter), plan.amount);

        // @TODO add validation to turn off the status
        uint24 poolFee = 3000;
        address tokenOut = Strings.equal(plan.crypto, "WBTC") ? WBTC : WETH9;
        ISwapRouter.ExactInputSingleParams memory params = ISwapRouter
          .ExactInputSingleParams({
            tokenIn: DAI,
            tokenOut: tokenOut,
            fee: poolFee,
            recipient: plan.user,
            deadline: block.timestamp,
            amountIn: plan.amount,
            amountOutMinimum: 0,
            sqrtPriceLimitX96: 0
          });

        swapRouter.exactInputSingle(params);

        exe[plan.id] = block.timestamp;
      }
    }
  }
}
