//창 width, height 구하기
var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

document.documentElement.style.setProperty('--windowWidth', windowWidth + 'px');
document.documentElement.style.setProperty('--windowHeight', windowHeight + 'px');



//채팅방추가 버튼 후 액션
document.getElementById("addchatroomBtn").addEventListener("click", function() {
    // 새로운 div 요소 생성
    var newDiv = document.createElement("div");
    // "abc" 클래스를 추가
    newDiv.classList.add("flex-box3");
    // 생성된 div에 텍스트 추가
    var textNode = document.createTextNode("New Div");
    newDiv.appendChild(textNode);
    // 생성된 div를 container 요소의 자식으로 추가
    document.getElementById("chatroomList").appendChild(newDiv);
});



// 첫번째 기본 질문 message1에 대입
document.addEventListener("DOMContentLoaded", function() {
    // message1 변수에 텍스트를 저장
    var message1 = "ChitChatBot은 어떤 서비스야?";
  
    // HTML 요소에 동적으로 텍스트를 삽입
    document.getElementById('messageElement1').textContent = message1;
  });

// 첫번째 기본 질문에 대한 답변
document.getElementById("defaultMessageBtn1").addEventListener("click", function() {
    var chattingDiv = document.querySelector('.chatting-div');

    // 새로운 채팅을 생성하고 아래 내용 추가
    var newChat = document.createElement('div');
    newChat.classList.add('bot-chat');
    newChat.innerHTML = `
        <img class="chat-icon" alt="" src="./resources/ccb_img/yong_icon.png" />
        <p class="message">안녕하세요.<br>Chitchatbot은 사용자의 카톡채팅방에 내용에 AI 서비스를 탑재해 필요한 정보를 찾기 위해 대화 내역을 일일이 찾아볼 필요 없이 질의응답을 쉽고 빠르게 하여 필요한 내용을 찾을 수 있는 서비스입니다.</p>
    `;

    // .chatting-div 요소의 맨 아래에 새로운 채팅을 추가
    chattingDiv.appendChild(newChat);

    //가장 하단으로 이동
    var parentDiv = document.querySelector('.chatting-div');
    parentDiv.scrollTop = parentDiv.scrollHeight;
});



// 두번째 기본 질문 message2에 대입
document.addEventListener("DOMContentLoaded", function() {
    // message2 변수에 텍스트를 저장
    var message2 = "단체톡방에 봇 추가하는 방법 알려줘";
  
    // HTML 요소에 동적으로 텍스트를 삽입
    document.getElementById('messageElement2').textContent = message2;
  });

// 두번째 기본 질문에 대한 답변
document.getElementById("defaultMessageBtn2").addEventListener("click", function() {
    var chattingDiv = document.querySelector('.chatting-div');

    // 새로운 채팅을 생성하고 아래 내용 추가
    var newChat = document.createElement('div');
    newChat.classList.add('bot-chat');
    newChat.innerHTML = `
        <img class="chat-icon" alt="" src="./resources/ccb_img/yong_icon.png" />
        <p class="message">안녕하세요.<br>봇을 추가하기 위해서는</p>
    `;

    // .chatting-div 요소의 맨 아래에 새로운 채팅을 추가
    chattingDiv.appendChild(newChat);

    //가장 하단으로 이동
    var parentDiv = document.querySelector('.chatting-div');
    parentDiv.scrollTop = parentDiv.scrollHeight;
});



// 세번째 기본 질문 message3에 대입
document.addEventListener("DOMContentLoaded", function() {
    // message3 변수에 텍스트를 저장
    var message3 = "채팅방 추가는 어떻게 하는거야?";
  
    // HTML 요소에 동적으로 텍스트를 삽입
    document.getElementById('messageElement3').textContent = message3;
  });

// 세번째 기본 질문에 대한 답변
document.getElementById("defaultMessageBtn3").addEventListener("click", function() {
    var chattingDiv = document.querySelector('.chatting-div');

    // 새로운 채팅을 생성하고 아래 내용 추가
    var newChat = document.createElement('div');
    newChat.classList.add('bot-chat');
    newChat.innerHTML = `
        <img class="chat-icon" alt="" src="./resources/ccb_img/yong_icon.png" />
        <p class="message">안녕하세요.<br> 채팅방을 추가하기 위해서는 왼쪽의 "+"버튼을 눌러 PIN 번호와 설정하고자 하는 채팅방의 이름을 설정해주세요.</p>
    `;

    // .chatting-div 요소의 맨 아래에 새로운 채팅을 추가
    chattingDiv.appendChild(newChat);

    //가장 하단으로 이동
    var parentDiv = document.querySelector('.chatting-div');
    parentDiv.scrollTop = parentDiv.scrollHeight;
});





