'use strict'

const mBody = document.getElementsByClassName('main_body')[0];
const createList = function(obj)
{
    console.log(obj);
    let div = document.createElement('div');
    div.classList.add('item');
    let newElement = `<div class="logoPA"><img class="logo" src="${obj.logo}"></div><div class="info"><div class="info1"><span>${obj.company}</span>${(obj.new) ? `<span id="id1">NEW!</span>`:``}${(obj.featured) ? `<span id="id2">FEATURED</span>`:``}</div><div class='info2'><span>${obj.position}</span></div><div class="info3"><span>${obj.postedAt} .</span><span> ${obj.contract} .</span><span> ${obj.location}</span></div></div><div class="skills"><div class="skill_item">${obj.role}</div><div class="skill_item">${obj.level}</div></div>`;
    div.innerHTML = newElement;
    mBody.append(div);
    let skill = document.getElementsByClassName('skills')[obj.id-1];
    obj.languages.forEach((ele)=>
    {
        newElement = document.createElement('div');
        newElement.classList.add('skill_item');
        newElement.innerHTML = ele;
        skill.append(newElement);
    });
    obj.tools.forEach((ele)=>
    {
        newElement = document.createElement('div');
        newElement.classList.add('skill_item');
        newElement.innerHTML = ele;
        skill.append(newElement);
    });
}

function fetchFapi()
{
 // const header = new Headers();
    fetch('https://api.jsonbin.io/v3/b/6197cb5862ed886f91518da6/1',
    {
        method: 'get',
        headers: {"X-Master-Key": "$2b$10$WfBL6QP4k.XGi29MRbSsE.1rP/h9ou1i1Vrrbn.GL4x3mHZpfGd5C"}
    })
    .then(response => response.json())
    .then(data=>
        {
            let arr = [...data.record];
            console.log(arr);
            arr.forEach((obj,i)=>
            {
                createList(obj);
            });
        })
}
fetchFapi();
const filt = document.querySelector('.fill_item');
const skill_item = document.getElementsByClassName('skill_item');
skill_item.addEventListener('click',function(ele)
{
    
}),{once:true};