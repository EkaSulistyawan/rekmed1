pragma solidity ^0.5.0;

/**
 * The contractName contract does this and that...
 */
contract rekam_medis_pasien {
	//data yang tersimpan
	struct riwayat_1{
		uint tinggi_badan;
		uint berat_badan;
		string waktu;
		string penunjang;
		string diagnosis;
	}

	struct riwayat_2{
		string tatalaksana;
		string tindakan;
		string pelayanan_lain;
		string odontogram;
		string persetujuan;
	}
	uint256 public totalTransaksi;
	mapping (uint256 => riwayat_1) public seluruh_rekam_medis_1;
	mapping (uint256 => riwayat_2) public seluruh_rekam_medis_2;
	//cari rekam medis siapa
	mapping (uint256 => address)public pemilik;
	
	function tambahRekamMedis(
		address _addrs,
		uint _tinggi_badan,
		uint _berat_badan,
		string memory _waktu,
		string memory _penunjang,
		string memory _diagnosis,
		string memory _tatalaksana,
		string memory _tindakan,
		string memory _pelayanan_lain,
		string memory _odontogram,
		string memory _persetujuan
		)public{
		//total transaksi bertambah
		totalTransaksi++;
		//jumlah riwayat addrs bertambah
		pemilik[totalTransaksi] = _addrs;

		seluruh_rekam_medis_1[totalTransaksi] = riwayat_1(
			_tinggi_badan,
			_berat_badan,
			_waktu,
			_penunjang,
			_diagnosis
			);
		seluruh_rekam_medis_2[totalTransaksi] = riwayat_2(
			_tatalaksana,
			_tindakan,
			_pelayanan_lain,
			_odontogram,
			_persetujuan);
	}
}

