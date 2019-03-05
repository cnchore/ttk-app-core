let EXP = {
	number: /^[0-9]*$/,
	mobile: /^[1][3,4,5,7,8][0-9]{9}$/,
	email: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
	link: /^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-\.,@?^=%&:\/~\+#]*[\w\-\@?^=%&\/~\+#$])/,
	chineseText: /^[\u4e00-\u9fa5]{0,}$/,
	englishText: /^[A-Za-z_-]+$/, //含_-
	apiVersion: /^[v][1-9][0-9]{0,1}$/, //v1~99
	ip: /^\d+\.\d+\.\d+\.\d|.\*+$/,	  //ip,最后一位可以为*
}

export default EXP