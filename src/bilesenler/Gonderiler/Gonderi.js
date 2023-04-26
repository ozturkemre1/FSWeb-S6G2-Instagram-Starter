import React from "react";
import Yorumlar from "../Yorumlar/Yorumlar";
import BegenBolumu from "./BegenBolumu";
import GonderiBasligi from "./GonderiBasligi";

const Gonderi = (props) => {
  // 🔥 Bu bileşenin parentının aşağıdaki propları düzgün gönderdiğinden emin olun.
  const { gonderiAktarim, gonderiyiBegen } = props;

  return (
    <div className="post-border">
      <GonderiBasligi
        username={gonderiAktarim.username}
        thumbnailUrl={gonderiAktarim.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={gonderiAktarim.imageUrl}
        />
      </div>
      {/* BegenBolumu düzgün çalışması için ihtiyaç duyduğu tüm proplara sahip mi? */}
      <BegenBolumu gonderiyiBegen={() => gonderiyiBegen(gonderiAktarim.id)} begeniSayisi={gonderiAktarim.likes}/>
      {/* Yorumlar da proplara dikkat istiyor! */}
      <Yorumlar yorumlarAktarim={gonderiAktarim.comments} />
    </div>
  );
};

export default Gonderi;
