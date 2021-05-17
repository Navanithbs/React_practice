import React from 'react';
import { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const firstBook={
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqFlnm6RRiS-xfPGk-Aa8DX_8S6c2ui_XmIoLIYEmw6Q7TlbvYgrAer7dxA5GVrlN_kl0&usqp=CAU',
    Title:'The Blue Moon',
    Author:'Book_author'
};
const secondBook={
    img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlRukEPREM3_HIbS_R4c0-sxeO1zAkTD1THXhayfTXHXiX9ITAwbsP34E7L76SMfbqLA&usqp=CAU',
    Title:'Harrypotter',
    Author:'Rowling'
};
const thirdBook={
    img:'https://lh3.googleusercontent.com/proxy/FfW3TyXMFVQwOcO54Ak-BeVSAovekjEkjqC17eR16NpajH8uX49BJZHuoOgh9DueWgcd4pV7exfwaFrcGfbSeT_wIshgSXwf3_C-3nrZqzgGL7h9dRZ1HP2YtLjwzFPZN_pEpaasVPFxvjju6EAYG-_TZbl5wLrm1WPSAwu-X7tRjKTU5Z-l9jtNYoeTyWBY',
    Title:'Harrypotter2',
    Author:'Book_author'
};
function Booklist() {
    return (
        <section className="booklist">
            <Book
            img={firstBook.img} 
            title={firstBook.Title}
            author={firstBook.Author}
            >
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley.
            </p>
            </Book>
            <Book img={secondBook.img} title={secondBook.Title} author={secondBook.Author}/>
            <Book img={thirdBook.img} title={thirdBook.Title} author={thirdBook.Author}/>
            <Book img={secondBook.img} title={secondBook.Title} author={secondBook.Author}/>
        </section>
    );
};
// const Book = (props) =>{
//     return(
//         <article className="book">
//             <img src={props.img}/>
//             <h1>{props.title}</h1>
//             <a href="#">{props.author}</a>
//             {children}
//         </article>
//     );
// };

// const Book = (props) =>{
//     const {img,title,author,children}=props;
//     return(
//         <article className="book">
//             <img src={img}/>
//             <h1>{title}</h1>
//             <a href="#">{author}</a>
//             {children}
//         </article>
//         )};

const Book = ({img,title,author,children}) =>{
    return(
        <article className="book">
            <img src={img}/>
            <h1>{title}</h1>
            <a href="#">{author}</a>
            {children}
            {<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley.
            </p>}
        </article>
    );
};

ReactDOM.render(<Booklist />,document.getElementById('root'));

