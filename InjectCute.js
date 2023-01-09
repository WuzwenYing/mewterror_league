//Name: Cute
//Author: Sarah
//Version: UNFINISHED
//Comment: I will update it remotly via the url below, you can still take the code and edit it with a local file tho

window.addEventListener('load', () => {
   setTimeout(function () {
      // ...
      addTheme();
      console.log('Cute theme added');
   }, 3500);
});

function addTheme() {
   var head = document.getElementsByTagName('head')[0];

   var style = document.createElement('link');
   style.href = 'https://rawcdn.githack.com/WuzwenYing/mewterror_league/265a29e4b440248f25997031541b913d58e74cb2/cute.theme.css';
   style.type = 'text/css';
   style.rel = 'stylesheet';
   head.append(style);
}
