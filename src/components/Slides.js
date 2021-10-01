import React, {useState, useEffect} from "react";

function Slides({slides}) {

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);

    const restart = () => {
        setIndex(0);
    };

    const prev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    };

    const next = () => {
        if (index < slides.length - 1) {
            setIndex(index + 1);
        }
    };

    useEffect(() => {
        (async () => {
            setTitle(slides[index].title);
            setText(slides[index].text);
        })();
    }, [index]);

    return (
        <div>
            <div id="navigation" className="text-center">
                <button 
                    disabled={index == 0}
                    onClick={restart} 
                    data-testid="button-restart" 
                    className="small outlined">Restart</button>
                <button 
                    disabled={index == 0}
                    onClick={prev} 
                    data-testid="button-prev" 
                    className="small">Prev</button>
                <button 
                    disabled={index == slides.length - 1}
                    onClick={next} 
                    data-testid="button-next" 
                    className="small">Next</button>
            </div>
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{title}</h1>
                <p data-testid="text">{text}</p>
            </div>
        </div>
    );

}

export default Slides;
