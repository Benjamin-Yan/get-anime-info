// Define
const allInput = document.getElementsByTagName('input');
const allButton = document.getElementsByTagName('button');

// Helper functions
function simplified(string) {
    fetch(`https://corsproxy.io/?https://api.zhconvert.org/convert?converter=Simplified&text=${string}`)
        .then(r => r.json())
        .then(data => {
            const outstring = data.data.text;
            document.getElementById('ia1').innerHTML = ` (若前一步失敗則<a id="ia1" href="https://bangumi.tv/subject_search/${outstring}?cat=2" target="_blank">點此</a>)`;
            getId(outstring);
        })
        .catch(error => console.log(error));
}

function formatDateString(dateString) {
    const date = new Date(dateString);

    const year = date.getFullYear();
    const monthIndex = date.getMonth(); // return index

    const months = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
    const month = months[monthIndex];

    return `${year}${month}月`;
}

// Main functions
function getId(instring) {
    fetch(`https://corsproxy.io/?https://api.bgm.tv/search/subject/${instring}?type=2&responseGroup=small`)
        .then(r => r.json())
        .then(data => {
            const ID = data.list[0].id;
            allInput[1].value = ID;
        })
        .catch(error => {
            console.log(error);
            allInput[1].value = "搜尋 ID 時發生錯誤!";
        });
    allButton[1].disabled = false;
    allInput[1].readOnly = false;
}

function search(id) {
    fetch(`https://corsproxy.io/?https://api.bgm.tv/v0/subjects/${id}`)
        .then(r => r.json())
        .then(data => {
            const imageurl = data.images.medium;
            const dateString = data.date;
            const date = formatDateString(dateString);

            let count = "查詢失敗";
            for (const item of data.infobox) {
                if (item.key === "话数") {
                    count = item.value;
                    break;
                }
            }

            allInput[2].value = imageurl;
            allInput[3].value = date;
            allInput[4].value = count;
            
            const ID = allInput[1].value;
            document.getElementById('ia2').innerHTML = ` (其它詳細資料請<a id="ia2" href="https://bgm.tv/subject/${ID}" target="_blank">點此</a>)`;
        })
        .catch(error => console.log(error));
    allButton[2].disabled = false;
    allButton[3].disabled = false;
}

function printYAML() {
    const name = allInput[0].value;
    const imageurl = allInput[2].value;
    const date = allInput[3].value;
    const count = allInput[4].value;

    const yamlContent = `


- name: ${name}
  img: ${imageurl}
  date: ${date}
  totalcount: ${count}
  progress: 0
  link: 
  des: ""`;

    document.getElementById('outfield').innerHTML = `<pre>${yamlContent}</pre>`;
    allInput[0].value = '';
}

// Button trigger
allButton[0].addEventListener('click', function() {
    const searchword = allInput[0].value;
    if(searchword.trim() === "") {alert("請先輸入內容!");return;}
    simplified(searchword);
});

allButton[1].addEventListener('click', function() {
    const id = allInput[1].value;
    search(id);
});

allButton[2].addEventListener('click', function() {
    imageurl = allInput[2].value;
    window.open(imageurl, '_blank');
});

allButton[3].addEventListener('click', function() {
    printYAML();
});

