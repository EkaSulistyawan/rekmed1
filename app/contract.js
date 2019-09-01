///////////////////////////addresss///////////////////////////////
const akses_provider_address = '0x39BbD6BAc7637c35d96DF75d0099DBA3E3fcf68B';
const personal_data_pasien_address ='0x4b1792C445CCBF583dEcaB950470B6aB587d432a';
const rekam_medis_pasien_address='0xbFD3f9811078Cb527544AB396ad374D2D2C6CeA0';
                                  


////////////////////////////////////////////abi////////////////////////
const akses_provider_abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "provider",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "tambahProvider",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];

const personal_data_pasien_abi = [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "terdaftar",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "pasien_1",
      "outputs": [
        {
          "name": "nama",
          "type": "string"
        },
        {
          "name": "jenis_kelamin",
          "type": "string"
        },
        {
          "name": "tempat_lahir",
          "type": "string"
        },
        {
          "name": "tanggal_lahir",
          "type": "string"
        },
        {
          "name": "alamat_tinggal",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "pasien_2",
      "outputs": [
        {
          "name": "pekerjaan",
          "type": "string"
        },
        {
          "name": "status_perkawinan",
          "type": "string"
        },
        {
          "name": "pendidikan",
          "type": "string"
        },
        {
          "name": "telepon",
          "type": "string"
        },
        {
          "name": "pasFoto",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        },
        {
          "name": "_nama",
          "type": "string"
        },
        {
          "name": "_jenis_kelamin",
          "type": "string"
        },
        {
          "name": "_tempat_lahir",
          "type": "string"
        },
        {
          "name": "_tanggal_lahir",
          "type": "string"
        },
        {
          "name": "_alamat_tinggal",
          "type": "string"
        },
        {
          "name": "_pekerjaan",
          "type": "string"
        },
        {
          "name": "_status_perkawinan",
          "type": "string"
        },
        {
          "name": "_pendidikan",
          "type": "string"
        },
        {
          "name": "_telepon",
          "type": "string"
        },
        {
          "name": "_pasFoto",
          "type": "string"
        }
      ],
      "name": "tambahDataBaru",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_address",
          "type": "address"
        },
        {
          "name": "_nama",
          "type": "string"
        },
        {
          "name": "_jenis_kelamin",
          "type": "string"
        },
        {
          "name": "_tempat_lahir",
          "type": "string"
        },
        {
          "name": "_tanggal_lahir",
          "type": "string"
        },
        {
          "name": "_alamat_tinggal",
          "type": "string"
        },
        {
          "name": "_pekerjaan",
          "type": "string"
        },
        {
          "name": "_status_perkawinan",
          "type": "string"
        },
        {
          "name": "_pendidikan",
          "type": "string"
        },
        {
          "name": "_telepon",
          "type": "string"
        },
        {
          "name": "_pasFoto",
          "type": "string"
        }
      ],
      "name": "ubahData",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];
  
const rekam_medis_pasien_abi =[
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "seluruh_rekam_medis_1",
      "outputs": [
        {
          "name": "tinggi_badan",
          "type": "uint256"
        },
        {
          "name": "berat_badan",
          "type": "uint256"
        },
        {
          "name": "waktu",
          "type": "string"
        },
        {
          "name": "penunjang",
          "type": "string"
        },
        {
          "name": "diagnosis",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "seluruh_rekam_medis_2",
      "outputs": [
        {
          "name": "tatalaksana",
          "type": "string"
        },
        {
          "name": "tindakan",
          "type": "string"
        },
        {
          "name": "pelayanan_lain",
          "type": "string"
        },
        {
          "name": "odontogram",
          "type": "string"
        },
        {
          "name": "persetujuan",
          "type": "string"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "pemilik",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "totalTransaksi",
      "outputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_addrs",
          "type": "address"
        },
        {
          "name": "_tinggi_badan",
          "type": "uint256"
        },
        {
          "name": "_berat_badan",
          "type": "uint256"
        },
        {
          "name": "_waktu",
          "type": "string"
        },
        {
          "name": "_penunjang",
          "type": "string"
        },
        {
          "name": "_diagnosis",
          "type": "string"
        },
        {
          "name": "_tatalaksana",
          "type": "string"
        },
        {
          "name": "_tindakan",
          "type": "string"
        },
        {
          "name": "_pelayanan_lain",
          "type": "string"
        },
        {
          "name": "_odontogram",
          "type": "string"
        },
        {
          "name": "_persetujuan",
          "type": "string"
        }
      ],
      "name": "tambahRekamMedis",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ];



export default {akses_provider_abi, akses_provider_address, personal_data_pasien_address, personal_data_pasien_abi, rekam_medis_pasien_address, rekam_medis_pasien_abi}