// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Registration {
    event RegisterNewLand(address indexed wallet, string nullifierHash, string coordinatesHash);

    function RegisterLand(address wallet, string memory nullifierHash, string memory coordinatesHash) public {
        emit RegisterNewLand(wallet, nullifierHash, coordinatesHash);
    }
}
