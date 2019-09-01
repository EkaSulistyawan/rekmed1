pragma solidity ^0.5.0;

/**
 * The contractName contract does this and that...
 */
contract personal_data_pasien {
	//definisi data personal pasien
	struct data_personal_1{
		string nama;
		string jenis_kelamin;
		string tempat_lahir;
		string tanggal_lahir;
		string alamat_tinggal;
	}
	struct data_personal_2 {
		string pekerjaan;
		string status_perkawinan;
		string pendidikan;
		string telepon;
		string pasFoto;
	}
	
	mapping (address => data_personal_1)public pasien_1;
	mapping (address => data_personal_2)public pasien_2;
	mapping (address => bool )public terdaftar;
	
	function tambahDataBaru(
		address _address,
		string memory _nama,
		string memory _jenis_kelamin,
		string memory _tempat_lahir,
		string memory _tanggal_lahir,
		string memory _alamat_tinggal,
		string memory _pekerjaan,
		string memory _status_perkawinan,
		string memory _pendidikan,
		string memory _telepon,
		string memory _pasFoto
		)public{

		require(!terdaftar[_address],'Sudah Terdaftar');
		terdaftar[_address] = true;
		pasien_1[_address] = data_personal_1(
			_nama,
			_jenis_kelamin,
			_tempat_lahir,
			_tanggal_lahir,
			_alamat_tinggal
			);
		pasien_2[_address] = data_personal_2(
			_pekerjaan,
			_status_perkawinan,
			_pendidikan,
			_telepon,
			_pasFoto);
	}

	function ubahData(
		address _address,
		string memory _nama,
		string memory _jenis_kelamin,
		string memory _tempat_lahir,
		string memory _tanggal_lahir,
		string memory _alamat_tinggal,
		string memory _pekerjaan,
		string memory _status_perkawinan,
		string memory _pendidikan,
		string memory _telepon,
		string memory _pasFoto
		)public{

		require(terdaftar[_address],'Pasien Belum Terdaftar');
		terdaftar[_address] = true;
		pasien_1[_address] = data_personal_1(
			_nama,
			_jenis_kelamin,
			_tempat_lahir,
			_tanggal_lahir,
			_alamat_tinggal
			);
		pasien_2[_address] = data_personal_2(
			_pekerjaan,
			_status_perkawinan,
			_pendidikan,
			_telepon,
			_pasFoto);
	}
			
}

