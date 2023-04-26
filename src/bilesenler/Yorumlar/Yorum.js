// Bu dosyayı değiştirmenize gerek yok
import React from 'react';

const Yorum = props => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { yorumAktarim } = props;

  return (
    <div className='comment-text'>
      <span className='user'>{yorumAktarim.username}</span>
      {' '}
      <span className='comment'>{yorumAktarim.text}</span>
    </div>
  );
};


export default Yorum;
