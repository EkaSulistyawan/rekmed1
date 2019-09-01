pragma solidity ^0.5.0;

/**
 * The contractName contract does this and that...
 */
contract akses_provider {
	//simpan address provider
	
	mapping (address => bool) public provider;
	
	constructor()public{
		provider[0xEB3509eAF5556D4AAD383E3EaFBCb51512484C40/*inisial Address provider*/] = true;
		require(provider[msg.sender],'Tidak Punya Akses');
	}

	//tambah provider
	function tambahProvider(address _address)public{
		require(provider[msg.sender],'Tidak Punya Akses');
		provider[_address] = true;
	}	
}

