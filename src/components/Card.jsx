import React from 'react';

const Card = ({ art }) => {
  return (
    <article className={art.imageAuthor ? 'author' : 'article'}>
      {art.urlImage && (
        <div className="article-image">
          <img src={art.urlImage} alt={art.title} title={art.title} />
        </div>
      )}
      <div className={art.imageAuthor ? 'author-text' : 'article-text'}>
        {art.title && (
          <h2 className="article-text-title">
            <a href={art.url}>
              {art.volanta && (
                <em className="article-text-volanta">{art.volanta}.</em>
              )}
              {art.title}
            </a>
          </h2>
        )}
        {art.bajada && <p className="article-text-bajada">{art.bajada}</p>}
        {art.marquesina && (
          <strong title={art.marquesina} className="article-text-marquesina">
            {art.marquesina}
          </strong>
        )}
        {art.author && (
          <div className="article-text-contentImageAuthor">
            {art.imageAuthor && (
              <img
                className="article-text-imageAuthor"
                src={art.imageAuthor}
                alt={art.author}
                title={art.author}
              />
            )}
            <strong className="article-text-author">
              <a href="#" title={art.author}>
                {art.author}
              </a>
            </strong>
          </div>
        )}
      </div>
    </article>
  );
};
export default Card;
