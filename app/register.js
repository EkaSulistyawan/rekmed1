//import kontrak
import kontrak from './contract.js'
import setting from './settings.js'

window.addEventListener('load',async()=>{
	//metamask permision
	if(window.ethereum){
		window.web3 = new Web3(ethereum);
		try{
			ethereum.enable();
		}catch(error){}

//show account
document.getElementById('myAccount').innerHTML = web3.eth.accounts[0];
///////////////////////////////define contract for registration////////////////////
const KontrakRegistrasi = web3.eth.contract(kontrak.personal_data_pasien_abi).at(kontrak.personal_data_pasien_address)
console.log('Kontrak Personal Data: ',KontrakRegistrasi)
/////////////////////////////define the data/////////////////////////
const nama = document.getElementById('nama-pasien')
const tempatlahir = document.getElementById('tempatlahir-pasien')
const tanggallahir = document.getElementById('tanggallahir-pasien')
const alamattinggal = document.getElementById('alamattinggal-pasien')
const pekerjaan = document.getElementById('pekerjaan-pasien')
const pendidikan = document.getElementById('pendidikan-pasien')
const notelepon = document.getElementById('telepon-pasien')
const addressPasien = document.getElementById('address-pasien')
/////////////////////////////////////////parsing image////////////////////////
const node = new Ipfs({repo:'ipfs-'+Math.random()})
var imageBuffer = null

node.once('ready',()=>{
	console.log('Status: ',node.isOnline()?'online':'offline')
	const fileChange = document.getElementById('pasfoto-pasien')
	fileChange.addEventListener('change',(event)=>{
		const file = event.target.files[0]
		const reader = new window.FileReader()
		reader.readAsArrayBuffer(file)
		reader.onloadend=()=>{
			imageBuffer = buffer.Buffer(reader.result)
		}
		document.getElementById('pasfoto-preview').src = URL.createObjectURL(file)
	})
})

document.getElementById('register-pasien').addEventListener('click',()=>{
	//define perkawinan
	var statusperkawinan = null
	if(document.getElementById('statusperkawinan-menikah').checked){
		statusperkawinan = document.getElementById('statusperkawinan-menikah')
	}else{
		statusperkawinan = document.getElementById('statusperkawinan-belum')
	}
	//define jeniskelamin
	var jeniskelamin = null
	if(document.getElementById('jeniskelamin-laki').checked){
		jeniskelamin = document.getElementById('jeniskelamin-laki')
	}else{
		jeniskelamin = document.getElementById('jeniskelamin-perempuan')
	}

	///////////////////////////upload///////////////////////////////////
	if(imageBuffer == null){
		alert('Tidak Ada Pasfoto')
		return
	}
	node.add({content:imageBuffer},(err,resImage)=>{
		if(err){
			alert('Failed to Upload Image to IPFS')
			return
		}
		console.log(resImage[0].hash)
		console.log('Pass: ',nama.value)
		console.log('Pass: ',jeniskelamin.value)
		console.log('Pass: ',tempatlahir.value)
		console.log('Pass: ',tanggallahir.value)
		console.log('Pass: ',alamattinggal.value)
		console.log('Pass: ',pekerjaan.value)
		console.log('Pass: ',statusperkawinan.value)
		console.log('Pass: ',pendidikan.value)
		console.log('Pass: ',notelepon.value)
		KontrakRegistrasi.tambahDataBaru(addressPasien.value,nama.value,jeniskelamin.value,tempatlahir.value,tanggallahir.value,alamattinggal.value,pekerjaan.value,statusperkawinan.value,pendidikan.value,notelepon.value,resImage[0].hash,
										{from:web3.eth.accounts[0],gasPrice:setting.gasPrice,gas:setting.gas },(err,res)=>{
			if(!err){
				window.location = './provider.html'
			}else{
				alert('FAILED!')
			}
		})
	})
})


}})
