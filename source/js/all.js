
let options=['苓雅區','三民區','新興區','美濃區','大樹區'];

// 建立Ｌist與Select
for(let i=0;i<options.length;i++){
	//Select Options
	let laySelect=document.querySelector('select');
	let layCardHot=document.querySelector('.m_cardHot__list');
	let	layOptions=document.createElement('option');

	layOptions.textContent=options[i];
	laySelect.appendChild(layOptions);

	//m_cardHot__list lis
	let	layLis=document.createElement('li');
	layLis.textContent=options[i];
	layCardHot.appendChild(layLis);

	//監聽事件
	layLis.addEventListener('click',function(){
		btnValue=options[i];
		setTitle();
		resetAttractList();
		loadAttractList(btnValue);
	})
}

let btnSelect=document.querySelector('select');
let btnValue='苓雅區';

btnSelect.addEventListener('change',function(){
	btnValue=btnSelect.value;
	setTitle();
	resetAttractList();
	loadAttractList(btnValue);
})

var xhr =new XMLHttpRequest();
xhr.open('get','js/api.json',true)
xhr.send(null);

xhr.onload = function(){
	if(xhr.status == '200'){
		console.log('資料有查到');
		loadAttractList();
		setTitle();
	}else{
	console.log('資料沒有查到');
	}
}


//改標題
function setTitle(){
	let title=document.querySelector('.a_title');
	title.textContent=btnValue;

	let m =options.indexOf(btnValue)
	console.log(m);
		switch(m){
			case 0:
				title.setAttribute('class', 'a_title a_title--fir');
				break;
			case 1:
				title.setAttribute('class', 'a_title a_title--sec');
				break;
			case 2:
				title.setAttribute('class', 'a_title a_title--thr');
				break;
			case 3:
				title.setAttribute('class', 'a_title a_title--for');
				break;
			case 4:
				title.setAttribute('class', 'a_title a_title--fiv');
				break;
		}
}

//載入後
function loadAttractList(){
	let str =JSON.parse(xhr.responseText);
	let length=str.result.records.length;

	for(i=0;i<length;i++){
		let Zones=str.result.records[i].Zone
		if(Zones==btnValue){
			setAttractList();
		}
	}
}

//載入的＋設定清單
function setAttractList(){
	let str =JSON.parse(xhr.responseText);
	let attractSection=document.querySelector('.o_attractSection');

	let	layRWD=document.createElement('div');
	layRWD.setAttribute('class','col-6 col-xs-12');
	let	layAttract=document.createElement('div');
	layAttract.setAttribute('class','m_cardAttract');
	let	layImg=document.createElement('img');
	let	layUl=document.createElement('ul');
	layUl.setAttribute('class','m_cardAttract__list');
		
	attractSection.appendChild(layRWD).appendChild(layAttract).appendChild(layImg);
	layAttract.appendChild(layUl);

	// 3-0.內容串字串
	let addImg=`${str.result.records[i].Picture1}`;
	let addTime=`<i class="fas fa-clock"></i>${str.result.records[i].Opentime}`;
	let addStr=`<i class="fas fa-map-marker-alt"></i>${str.result.records[i].Add}`;
	let addPhone=`<i class="fas fa-phone-alt"></i>${str.result.records[i].Tel}
	<span><i class="fas fa-tag"></i>${str.result.records[i].Ticketinfo}</span>
	`;

	//3-1.塞內容
	layImg.setAttribute('src', addImg);
	for(let j=0;j<3;j++){
		let layLi=document.createElement('li'); 
		layUl.appendChild(layLi);

		switch(j){
			case 0:
				layLi.innerHTML=addTime;
				break;
			case 1:
				layLi.innerHTML=addStr;
				break;
			case 2:
				layLi.innerHTML=addPhone;
				break;
		}
	}

}


//清除
function resetAttractList(){
	let attractSection=document.querySelector('.o_attractSection');
	let layAttract=document.querySelectorAll('.m_cardAttract');

	for(let k=0;k<layAttract.length;k++){
		attractSection.removeChild(layAttract[k].parentNode);
	}
}


