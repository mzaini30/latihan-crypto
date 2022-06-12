import {question, keyInSelect} from 'readline-sync'
import CryptoJS from 'crypto-js'

const menu = keyInSelect(['encrypt', 'decrypt'], 'Fitur mana yang ingin digunakan?')
const pesan = question('Masukkan pesan: ')
const kunci = question('Masukkan kunci: ')

if (menu == 0){
	const hasil = CryptoJS.AES.encrypt(pesan, kunci).toString()
	console.log(hasil)
}

if (menu == 1){
	const hasil = CryptoJS.AES.decrypt(pesan, kunci).toString(CryptoJS.enc.Utf8)
	console.log(hasil)
}