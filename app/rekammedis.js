import kontrak from './contract.js'
import setting from './settings.js'

window.addEventListener('load',async()=>{
	if(window.ethereum){
		window.web3 = new Web3(ethereum);
		try{
			ethereum.enable()
		}catch(error){}

//code goes here

//show account
document.getElementById('myAccount').innerHTML = web3.eth.accounts[0];

///////////////////////////////cari pasien/////////////////////////////
const KontrakPersonalData = web3.eth.contract(kontrak.personal_data_pasien_abi).at(kontrak.personal_data_pasien_address)
const thisAddress = document.getElementById('address-pasien')
/////////////////////////////tampilan data personal//////////////////
document.getElementById('cari-pasien').addEventListener('click',()=>{
	console.log(thisAddress.value)
	KontrakPersonalData.pasien_1(thisAddress.value,(err,res)=>{
		if(err){
			alert('Address Pasien Tidak Ditemukan')
			return
		}
		document.getElementById('nama-pasien').value = res[0]
		document.getElementById('jeniskelamin-pasien').innerHTML = res[1]
		document.getElementById('tempatlahir-pasien').value = res[2]
		document.getElementById('tanggallahir-pasien').value = res[3]
		document.getElementById('alamattinggal-pasien').value = res[4]
	})
	KontrakPersonalData.pasien_2(thisAddress.value,(err,res)=>{
		document.getElementById('pekerjaan-pasien').value = res[0]
		document.getElementById('statusperkawinan-pasien').innerHTML = res[1]
		document.getElementById('pendidikan-pasien').value = res[2]
		document.getElementById('telepon-pasien').value = res[3]
		document.getElementById('pasfoto-preview').src = 'https://ipfs.io/ipfs/'+res[4]
	})
})
////////////////////////////////initiating ipfs Node////////////////////////
const node = new Ipfs({repo:'ipfs-'+Math.random()});
//////////////////////////////change the image data////////////////////////////
var imageBuffer = null
document.getElementById('pasfoto-pasien').addEventListener('change',(event)=>{
	/////////////////////////pengubahan data/////////////////////////
	var file = event.target.files[0]
	var reader = new window.FileReader()

	reader.readAsArrayBuffer(file)
	reader.onloadend= ()=>{
		imageBuffer = buffer.Buffer(reader.result)
	}
})
///////////////////////////////showing buffer///////////////////////////////
/*
document.getElementById('status-ubah-data').addEventListener('change',()=>{
	if(document.getElementById('status-ubah-data').checked){
		console.log('Terjadi Perubahan data')
		////////////////////////////////dapatkan data baru//////////////////////
		const nama = document.getElementById('nama-pasien')
		var jeniskelamin = null
		if(document.getElementById('jeniskelamin-laki').checked){
			jeniskelamin = document.getElementById('jeniskelamin-laki')
		}else{
			jeniskelamin = document.getElementById('jeniskelamin-perempuan')
		}
		const tempatlahir = document.getElementById('tempatlahir-pasien')
		const tanggallahir = document.getElementById('tanggallahir-pasien')
		const alamattinggal = document.getElementById('alamattinggal-pasien')
		const pekerjaan = document.getElementById('pekerjaan-pasien')
		var statusperkawinan = null
		if(document.getElementById('statusperkawinan-menikah').checked){
			statusperkawinan = document.getElementById('statusperkawinan-menikah')
		}else{
			statusperkawinan = document.getElementById('statusperkawinan-belum')
		}
		const pendidikan = document.getElementById('pendidikan-pasien')
		const notelepon = document.getElementById('telepon-pasien')
		const addressPasien = document.getElementById('address-pasien')

		console.log('Buffer Gambar Saat ini: ',imageBuffer)
		if(imageBuffer==null){
			console.log('tidak Ada perubahan gambar')
			//get the image hash
			KontrakPersonalData.pasien_2(thisAddress.value,(err,resImage)=>{			
				console.log('Current Hash: ',resImage[4])
				KontrakPersonalData.ubahData(thisAddress.value,nama.value,jeniskelamin.value,tempatlahir.value,tanggallahir.value,alamattinggal.value,pekerjaan.value,statusperkawinan.value,pendidikan.value,notelepon.value,resImage[4],
						{from:web3.eth.accounts[0],gasPrice:setting.gasPrice,gas:setting.gas},(err,res)=>{
							if(!err){
								alert('Data Diubah gambar Terdeteksi')
							}
				})
			})
		}else{
			node.add({content:imageBuffer},(err,resImage)=>{
				if(err){
					alert('error')
					return
				}
				/////////check/////////
				console.log('pass: ',thisAddress.value)
				console.log('Pass: ',nama.value)
				console.log('Pass: ',jeniskelamin.value)
				console.log('Pass: ',tempatlahir.value)
				console.log('Pass: ',tanggallahir.value)
				console.log('Pass: ',alamattinggal.value)
				console.log('Pass: ',pekerjaan.value)
				console.log('Pass: ',statusperkawinan.value)
				console.log('Pass: ',pendidikan.value)
				console.log('Pass: ',notelepon.value)
				console.log('Pass: ',resImage[0].hash)

				KontrakPersonalData.ubahData(thisAddress.value,nama.value,jeniskelamin.value,tempatlahir.value,tanggallahir.value,alamattinggal.value,pekerjaan.value,statusperkawinan.value,pendidikan.value,notelepon.value,resImage[0].hash,
					{from:web3.eth.accounts[0],gasPrice:setting.gasPrice,gas:setting.gas},(err,res)=>{
						if(!err){
							alert('Data Diubah gambar Terdeteksi')
						}
				})
			})
		}	
	}else{
		console.log('Tidak ada Perubahan Data')
	}
})
*/



//////////////////////////////////kontrak rekam medis/////////////////////////
////////////////////////////////////define kontrak rekam medis//////////////////////////
const KontrakRekamMedis = web3.eth.contract(kontrak.rekam_medis_pasien_abi).at(kontrak.rekam_medis_pasien_address)
console.log(KontrakRekamMedis)
//////////////////////////////////ingin menambah data medis//////////////
const tinggibadan = document.getElementById('tinggibadan-pasien')
const beratbadan = document.getElementById('beratbadan-pasien')
const waktu = document.getElementById('waktu-pasien')
const diagnosis = document.getElementById('diagnosis-pasien')
const tatalaksana = document.getElementById('tatalaksana-pasien')
const tindakan = document.getElementById('tindakan-pasien')
const pelayananlain = document.getElementById('pelayananlain-pasien')
const persetujuan = document.getElementById('persetujuan-pasien')

//set waktu 
var d = new Date()
//tanggal
waktu.innerHTML = '('+(d.getMonth()+1)+'/'+d.getDate()+'/'+d.getFullYear()+')'
waktu.innerHTML += '('+(d.getHours())+':'+d.getMinutes()+':'+d.getSeconds()+')'

//define ipfs 
//const node = new Ipfs({repo:'ipfs-'+Math.random()})
var imageBufferPenunjang = null
var imageBufferOdontogram = null
node.once('ready',()=>{
	console.log('status: ',node.isOnline()?'online':'offline');
	//Penunjang
	var fileChange = document.getElementById('file-penunjang')
	var reader = null
	var file = null
	fileChange.addEventListener('change',(event)=>{
		console.log('File Penunjang')
		file = event.target.files[0]
		reader = new window.FileReader()
		reader.readAsArrayBuffer(file)
		reader.onloadend= ()=>{
			imageBufferPenunjang = buffer.Buffer(reader.result)
		}
		document.getElementById('penunjang-preview').src = URL.createObjectURL(file)
	})

	fileChange = document.getElementById('file-odontogram')
	fileChange.addEventListener('change',(event)=>{
		console.log('File Odontogram')
		console.log('File Penunjang')
		file = event.target.files[0]
		reader = new window.FileReader()
		reader.readAsArrayBuffer(file)
		reader.onloadend= ()=>{
			imageBufferOdontogram = buffer.Buffer(reader.result)
		}
		document.getElementById('odontogram-preview').src = URL.createObjectURL(file)
	})
})

////////////////////////////Tambah Rekaman/////////////////
document.getElementById('submit-button').addEventListener('click',()=>{
	////upload the image
	node.add({content:imageBufferPenunjang},(err,resPenunjang)=>{
		node.add({content:imageBufferOdontogram},(err,resOdontogram)=>{
			console.log(diagnosis.value)
			KontrakRekamMedis.tambahRekamMedis(
				thisAddress.value,
				tinggibadan.value,
				beratbadan.value,
				waktu.innerHTML,
				resPenunjang[0].hash,
				diagnosis.value,
				tatalaksana.value,
				tindakan.value,
				pelayananlain.value,
				resOdontogram[0].hash,
				persetujuan.value,
				{from:web3.eth.accounts[0],gasPrice:setting.gasPrice,gas:setting.gas},
				(err,res)=>{
					if(err){
						alert(thisAddress.value)
						console.error('error')
					}else{
						alert(thisAddress.value)
					}
				})
		})
	})








////////////////////////////////Masih Error di ubah data//////////////////////////////////////////////






	//jika ubah data
	if(document.getElementById('status-ubah-data').checked){
		console.log('Ubah Data')
		///////////////////////////////////////ubah data////////////////////////////////
		const nama = document.getElementById('nama-pasien')
		var jeniskelamin = null
		if(document.getElementById('jeniskelamin-laki').checked){
			jeniskelamin = document.getElementById('jeniskelamin-laki')
		}else{
			jeniskelamin = document.getElementById('jeniskelamin-perempuan')
		}
		const tempatlahir = document.getElementById('tempatlahir-pasien')
		const tanggallahir = document.getElementById('tanggallahir-pasien')
		const alamattinggal = document.getElementById('alamattinggal-pasien')
		const pekerjaan = document.getElementById('pekerjaan-pasien')
		var statusperkawinan = null
		if(document.getElementById('statusperkawinan-menikah').checked){
			statusperkawinan = document.getElementById('statusperkawinan-menikah')
		}else{
			statusperkawinan = document.getElementById('statusperkawinan-belum')
		}
		const pendidikan = document.getElementById('pendidikan-pasien')
		const notelepon = document.getElementById('telepon-pasien')
		const addressPasien = document.getElementById('address-pasien')
		console.log('pass: ',addressPasien.value)
		console.log('Pass: ',nama.value)
		console.log('Pass: ',jeniskelamin.value)
		console.log('Pass: ',tempatlahir.value)
		console.log('Pass: ',tanggallahir.value)
		console.log('Pass: ',alamattinggal.value)
		console.log('Pass: ',pekerjaan.value)
		console.log('Pass: ',statusperkawinan.value)
		console.log('Pass: ',pendidikan.value)
		console.log('Pass: ',notelepon.value)
		KontrakPersonalData.pasien_2(addressPasien.value,(err,thisHash)=>{
			console.log('Pass: ',thisHash[4])
		})

		/////////////////////////////////////////parsing image////////////////////////
		//const node = new Ipfs({repo:'ipfs-'+Math.random()})
		var imageBuffer = null

		node.once('ready',()=>{
			console.log('Status: ',node.isOnline()?'online':'offline')
			const fileChange = document.getElementById('pasfoto-pasien')
			fileChange.addEventListener('change',(event)=>{
				console.log('image changed')
				const file = event.target.files[0]
				const reader = new window.FileReader()
				reader.readAsArrayBuffer(file)
				reader.onloadend=()=>{
					imageBuffer = buffer.Buffer(reader.result)
					console.log('Gambar 1: ',imageBuffer)
				}
				document.getElementById('pasfoto-preview').src = URL.createObjectURL(file)
				console.log('Gambar 2: ',imageBuffer)
			})
		})


		if(imageBuffer == null){
			console.log('Tidak Ada Gambar')
			KontrakPersonalData.pasien_2(addressPasien.value,(err,thisHash)=>{
				console.log('Current Hash: ',thisHash[4])
				console.log('pass: ',addressPasien.value)
				KontrakPersonalData.ubahData(addressPasien.value,nama.value,jeniskelamin.value,tempatlahir.value,tanggallahir.value,alamattinggal.value,pekerjaan.value,statusperkawinan.value,pendidikan.value,notelepon.value,thisHash[4],
					{from:web3.eth.accounts[0],gasPrice:setting.gasPrice,gas:setting.gas},(err,res)=>{
					if(!err){
						alert('Tanpa Gambar')
					}
				})	
			})	
		}else{
			console.log('Ada Gambar')
			node.add({content:imageBuffer},(err,resImage)=>{
				KontrakPersonalData.ubahData(addressPasien.value,nama.value,jeniskelamin.value,tempatlahir.value,tanggallahir.value,alamattinggal.value,pekerjaan.value,statusperkawinan.value,pendidikan.value,notelepon.value,resImage[0].hash,
				{from:web3.eth.accounts[0],gasPrice:setting.gasPrice,gas:setting.gas},(err,res)=>{
					if(!err){
						alert('Data Diubah gambar Terdeteksi')
					}
				})	
			})
		}
	}
})

}})