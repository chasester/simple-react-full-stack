const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('/api/getVideos', (req, res) => res.send(getVideos()) )

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));



function getVideos() {
    return [
      {title: 'Adult Caucasian Male with Bruises',                                          thumbnail: 'public/img1.jpg'},
      {title: 'Elderly African American Male with Bruises and Cuts',                        thumbnail: 'public/img2.jpg'},
      {title: 'Adult African American Female',                                              thumbnail: 'public/img3.jpg'},
      {title: 'Adult Hispanic Male with Burn',                                              thumbnail: 'public/img4.jpg'},
      {title: 'Adult Caucasian Female with Bruises',                                        thumbnail: 'public/img5.jpg'}
    ];
  }
  