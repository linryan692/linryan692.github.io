// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function learnMore(section) {
    if (section === 'Sites') {
        window.location.href = 'https://whc.unesco.org/en/list/4/';
    } else if (section === 'Group of building') {
        window.location.href = 'https://whc.unesco.org/zh/list/2';
    }else if (section === 'Monuments') {
        window.location.href = 'https://whc.unesco.org/zh/list/292';
    }else if (section === 'parsa-mahmoudi') {
        window.location.href = 'https://whc.unesco.org/en/list/75/';
    }else if (section === 'Rain Forest Park') {
        window.location.href = 'https://whc.unesco.org/en/list/261/';
    }else if (section === 'Law') {
        window.location.href = 'https://www.mct.gov.cn/gtb/index.jsp?url=https://www.mct.gov.cn/whzx/bnsj/fwzwhycs/201111/t20111128_765131.html';
    }else if (section === 'country') {
        window.location.href = 'https://zh.wikipedia.org/zh-tw/%E4%BF%9D%E6%8A%A4%E4%B8%96%E7%95%8C%E6%96%87%E5%8C%96%E5%92%8C%E8%87%AA%E7%84%B6%E9%81%97%E4%BA%A7%E5%85%AC%E7%BA%A6';
    }
    
}

function openPopup(content) {
    document.getElementById('popupContent').innerHTML = `
        <button id="closePopup" onclick="closePopup()">✖</button>
        <h1>詳細內文</h1>
        <p>${content}</p>
    `;
    document.getElementById('popupOverlay').style.display = 'block';
}

function closePopup() {
    document.getElementById('popupOverlay').style.display = 'none';
}