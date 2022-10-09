// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract Registration {
    event RegisterNewLand(string nullifierHash, string coordinateOne, string coordinateTwo, string coordinateThree);

    function RegisterLand(string memory _nullifierHash, string memory _coordinateOne, string memory _coordinateTwo, string memory _coordinateThree) public {
        emit RegisterNewLand(_nullifierHash, _coordinateOne, _coordinateTwo, _coordinateThree);
    }
}
