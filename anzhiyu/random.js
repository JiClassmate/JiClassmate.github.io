var posts=["2024/04/06/景德镇陶瓷抢摊位老太婆打人事件/","2024/04/05/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };