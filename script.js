function showAnswer(option) {
    var chatContainer = document.getElementById("chat-container");
    var messageDiv = document.createElement("div");
    messageDiv.className = "message";

    var senderDiv = document.createElement("div");
    senderDiv.className = "sender";
    senderDiv.textContent = "나";

var textDiv = document.createElement("div");
textDiv.className = "text";
switch (option) {
    case 1:
        textDiv.innerHTML = "기본 인적 사항<br>나의 이름은 김상용이야. 38살이고 지금은 수원에서 살고있는 직장인이야. 여자친구로는 나미공주라고 아주 예쁜 공주님이 있는데 정말 세상에서 제일 예뻐. 내가 장담해.";
        break;
            break;
        case 2:
            textDiv.textContent = "술은 잘 마시지도 아주 못마시지도 않는 정도인 것 같고, 담배는 펴본적도 없어 종교도 없어 나의 신은 김나미 뿐이야 아? 그럼 종교가 있는건가?";
            break;
        case 3:
            textDiv.textContent = "MBTI로 표현을 하자면 나는 ISFJ야";
            break;
        default:
            textDiv.textContent = "김나미 사랑해♥";
    }

    messageDiv.appendChild(senderDiv);
    messageDiv.appendChild(textDiv);
    chatContainer.appendChild(messageDiv);

    chatContainer.scrollTop = chatContainer.scrollHeight;
}
