// GET 요청 예시
fetch('http://www.slangquiz.shop/')
     .then(response => {
     if (!response.ok) {
          throw new Error('Network response was not ok');
     }
     return response.json(); // JSON 형태로 응답을 파싱
     })
     .then(data => {
    console.log(data); // API로부터 받은 데이터
     })
     .catch(error => {
     console.error('There was a problem with the fetch operation:', error);
     });


fetch('http://www.slangquiz.shop/', {
     method: 'POST',
     headers: {
          'Content-Type': 'application/json',
     },
     body: JSON.stringify(postData),
     })
     .then(response => response.json())
     .then(data => {
     console.log('Success:', data);
     })
     .catch((error) => {
          console.error('Error:', error);
     });