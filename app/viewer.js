import kontrak from './contract.js'

//function
function clickThis(_a){
	alert(_a)
}
//metamask
window.addEventListener('load',async()=>{
	//metamask permission
	if(window.ethereum){
		window.web3 = new Web3(ethereum);
		try{
			ethereum.enable();
		}catch(error){}

//reload when account change
ethereum.on('accountsChanged',(err,res)=>{
	location.reload();
})
//show account
document.getElementById('myAccount').innerHTML = web3.eth.accounts[0];

///////////////////////////////define personal data contract//////////////////////

const KontrakPersonalData = web3.eth.contract(kontrak.personal_data_pasien_abi).at(kontrak.personal_data_pasien_address)
const thisAddress = web3.eth.accounts[0]
console.log(thisAddress)

//first half of the data
KontrakPersonalData.pasien_1(thisAddress,(err,res)=>{
	console.log(res[0])
	document.getElementById('nama-pasien').innerHTML = res[0]
	document.getElementById('jeniskelamin-pasien').innerHTML = res[1]
	document.getElementById('tempatlahir-pasien').innerHTML= res[2]
	document.getElementById('tanggallahir-pasien').innerHTML = res[3]
	document.getElementById('alamattinggal-pasien').innerHTML = res[4] 
})
//second half
KontrakPersonalData.pasien_2(thisAddress,(err,res)=>{
	document.getElementById('pekerjaan-pasien').innerHTML = res[0]
	document.getElementById('statusperkawinan-pasien').innerHTML = res[1]
	document.getElementById('pendidikan-pasien').innerHTML = res[2]
	document.getElementById('notelepon-pasien').innerHTML = res[3]
	document.getElementById('pasfoto-pasien').src = 'https://ipfs.io/ipfs/'+res[4]
	console.log('IPFS Hash: ',res[4])
})

//lihat rekam pasien
const KontrakRekamMedis = web3.eth.contract(kontrak.rekam_medis_pasien_abi).at(kontrak.rekam_medis_pasien_address)

//search the whole datas
KontrakRekamMedis.totalTransaksi(async(err,total)=>{
	console.log(parseInt(total))
	var angka = await 1
	for (var i = 1;i<=parseInt(total);i++){
		console.log(i)
		//cek apakah sama
		KontrakRekamMedis.pemilik(i,async(err,owner)=>{
			console.log('owner ',owner)
			if(!owner.localeCompare(thisAddress)){
				const insideAngka = angka
				var table = await document.getElementById('tabel-rekammedis')
				var row = await table.insertRow(1)
				KontrakRekamMedis.seluruh_rekam_medis_1(angka,async(err,res)=>{
					//tambah no
					var kolom0 = await row.insertCell(0)
					kolom0.innerHTML = await insideAngka

					var kolom1 = await row.insertCell(1)
					kolom1.innerHTML = await res[2]

					//diagnosis
					var kolom2 = await row.insertCell(2)
					kolom2.innerHTML = await res[4]
				})
				KontrakRekamMedis.seluruh_rekam_medis_2(angka,async(err,res)=>{
					var kolom3 = await row.insertCell(3)
					kolom3.innerHTML = await res[1]

					var kolom4 = await row.insertCell(4)
					kolom4.innerHTML = await res[4]
				})
				KontrakRekamMedis.seluruh_rekam_medis_1(angka,async(err,res)=>{
					//tambah no
					var kolom0 = await row.insertCell(5)
					kolom0.innerHTML = await res[0]

					var kolom1 = await row.insertCell(6)
					kolom1.innerHTML = await res[1]

					//diagnosis
					//dibenerin
					var kolom2 = await row.insertCell(7)
					kolom2.innerHTML = await '<a href="https://ipfs.io/ipfs/'+res[3]+'" target="_blank">Click</a><br>'//+'<img width="120" height="180" src="https://gateway.ipfs.io/ipfs/'++'">'
				})
				KontrakRekamMedis.seluruh_rekam_medis_2(angka,async(err,res)=>{
					var kolom3 = await row.insertCell(8)
					kolom3.innerHTML = await res[0]

					var kolom4 = await row.insertCell(9)
					kolom4.innerHTML = await res[2]

					//dibenerin
					var kolom4 = await row.insertCell(10)
					kolom4.innerHTML = await '<a href="https://ipfs.io/ipfs/'+res[3]+'" target="_blank">Click</a>'
				})

			}
			angka++;
		})
	}
})
}})

function cek(bool1, bool2, bool3, bool4){
	if(bool1&&bool2&&bool3&&bool4){
	}else{
		location.reload();
	}
}